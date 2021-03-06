import Vue from 'vue'

import appState from './app'
import utils from '../../services/utils'
const API_URL = ''

const emptySprintDetails = {
  dates: {
    startDateObject: new Date(),
    endDateObject: new Date()
  },
  completed: {
    issues: null,
    estimation: null
  },
  incomplete: {
    issues: null,
    estimation: null
  },
  tasksPie: null
}

const state = {
  tns: {
    id: 1,
    name: 'Trust & Safety',
    leader: '@dkunin',
    teams: [
      {
        id: 509,
        name: 'Main team',
        leader: '@dkunin'
      }
    ],
    sprints: []
  },
  sprintDetails: emptySprintDetails,
  lsr: { length: 0, issues: [] },
  pzeroBugs: { length: 0, issues: [] },
  supportBugs: { length: 0, issues: [] }
}

function typeOfTasks (tasksArray) {
  const reduced = tasksArray.reduce((newObject, singleItem) => {
    if (newObject[singleItem.typeName] !== undefined) {
      newObject[singleItem.typeName] = newObject[singleItem.typeName] + 1
    } else {
      newObject[singleItem.typeName] = 0
    }
    return newObject
  }, {})
  return {
    reduced,
    labels: Object.keys(reduced),
    values: Object.values(reduced),
    backgroundColor: Object.keys(reduced).map(singleState => appState.state.config.palette[singleState])
    // [
    //   appState.state.config.palette.primary,
    //   appState.state.config.palette.lighterGray,
    //   appState.state.config.palette.info,
    //   appState.state.config.palette.success,
    //   appState.state.config.palette.danger
    // ]
  }
}

function processSprintData (data) {
  const tasksPie = typeOfTasks(data.contents.completedIssues)
  return {
    id: data.sprint.id,
    dates: {
      startDate: data.sprint.startDate,
      endDate: data.sprint.endDate,
      startDateObject: data.sprint.startDate !== 'None' ? new Date(data.sprint.startDate) : null,
      endDateObject: data.sprint.endDate !== 'None' ? new Date(data.sprint.endDate) : null,
      daysRemaining: data.sprint.daysRemaining,
    },
    completed: {
      issues: data.contents.completedIssues,
      estimation: data.contents.completedIssuesEstimateSum.value
    },
    incomplete: {
      issues: data.contents.issuesNotCompletedInCurrentSprint,
      estimation: data.contents.issuesNotCompletedEstimateSum.value
    },
    scopeCreep: Object.keys(data.contents.issueKeysAddedDuringSprint),
    totalStoryPoints: data.contents.allIssuesEstimateSum.value,
    percent: Math.ceil((data.contents.completedIssuesEstimateSum.value * 100) / data.contents.allIssuesEstimateSum.value),
    lineChartData: {
      labels: ['mon', 'tue', 'wed', 'thu', 'friday'],
      datasets: [
        {
          label: 'Fact',
          backgroundColor: utils.hex2rgb(appState.state.config.palette.primary, 0.6).css,
          borderColor: appState.state.config.palette.transparent,
          data: [90, 88, 80, 50, 20]
        }, {
          label: 'Plan',
          backgroundColor: utils.hex2rgb(appState.state.config.palette.info, 0.6).css,
          borderColor: appState.state.config.palette.transparent,
          data: [100, 80, 60, 40, 20]
        }
      ],
    },
    tasksPie: {
      labels: tasksPie.labels,
      datasets: [{
        label: '',
        backgroundColor: tasksPie.backgroundColor,
        data: tasksPie.values
      }]
    }
  }
}

function processDate (date) {
  return `${date.getFullYear()}-${utils.leftPad(date.getMonth() + 1, 2, 0)}-${utils.leftPad(date.getDate(), 2, 0)}`
}

const mutations = {
  setSprintList (state, data) {
    Vue.set(state.tns, 'sprints', data)
  },
  setSprintDetails (state, data) {
    Vue.set(state, 'sprintDetails', data)
  },
  openSprint (state, sprintId) {
    Vue.set(state, 'openedSprint', sprintId)
  },
  lsr (state, amount) {
    Vue.set(state, 'lsr', amount)
  },
  pzeroBugs (state, amount) {
    Vue.set(state, 'pzeroBugs', amount)
  },
  supportBugs (state, amount) {
    Vue.set(state, 'supportBugs', amount)
  }
}

const actions = {
  openSprint ({ commit, state }, sprintId) {
    commit('supportBugs', {})
    commit('lsr', {})
    commit('pzeroBugs', {})
    if (state.openedSprint === sprintId) {
      commit('openSprint', null)
      commit('setSprintDetails', Object.assign({}, emptySprintDetails))
    } else {
      commit('openSprint', sprintId)
      fetch(API_URL + `/api/jira/rest/greenhopper/1.0/rapid/charts/sprintreport?rapidViewId=509&sprintId=${sprintId}`)
        .then(res => res.json())
        .then(processSprintData)
        .then(processedData => {
          commit('setSprintDetails', Object.assign({}, processedData))
          return processedData
        })
        // .then(processedData => {
        //   console.log(state)
        //   // Запрос бэклога
        //   // fetch(`${}/api/search?jql=${escape(`Sprint=${processedData.id}`)}`).then(res => res.json()).then(fullBacklog => {
        //   //   // console.log(typeOfTasks(fullBacklog.issues))
        //   // })
        //   // fetch(API_URL + `/api/jira/rest/greenhopper/1.0/rapid/charts/scopechangeburndownchart.json?rapidViewId=509&sprintId=${processedData.id}&statisticFieldId=field_customfield_10212`).then(res => res.json()).then(dateResult => {
        //   // }).then(chartData => {
        //   //   console.log(chartData)
        //   // })
        //   return processedData
        // })
        .then(processedData => {
          if (!processedData.dates.startDateObject) {
            return processedData
          }
          // Проверка Суппорт багов
          const searchQuery = escape(`project = SPT and Unit = "Trust and Safety" AND created >= ${processDate(processedData.dates.startDateObject)} AND created <= ${processDate(processedData.dates.endDateObject)}`)

          fetch(API_URL + `/api/search?jql=${searchQuery}`)
            .then(res => res.json()).then(dateResult => {
              commit('supportBugs', {
                length: dateResult.issues.length,
                issues: dateResult.issues,
              })
            })
          return processedData
        })
        .then(processedData => {
          if (!processedData.dates.startDateObject) {
            return processedData
          }
          // Проверка багов P0/P1
          const searchQuery = escape(`project = "Trust & Safety" and type = Bug and "Priority for Bug" in (P0, P1)  AND created >= ${processDate(processedData.dates.startDateObject)} AND created <= ${processDate(processedData.dates.endDateObject)}`)

          fetch(API_URL + `/api/search?jql=${searchQuery}`)
            .then(res => res.json()).then(dateResult => {
              commit('pzeroBugs', {
                length: dateResult.issues.length,
                issues: dateResult.issues
              })
            })
          return processedData
        })
        .then(processedData => {
          if (!processedData.dates.startDateObject) {
            return processedData
          }
          // Проверка LSR
          const searchQuery = escape(`project = "LSR (Live Site Review)" and Unit = "Trust and Safety" AND created >= ${processDate(processedData.dates.startDateObject)} AND created <= ${processDate(processedData.dates.endDateObject)}`)

          fetch(API_URL + `/api/search?jql=${searchQuery}`)
            .then(res => res.json()).then(dateResult => {
              commit('lsr', {
                length: dateResult.issues.length,
                issues: dateResult.issues,
              })
            })
          return processedData
        })
    }
  },
  getSprintList ({ commit }) {
    return new Promise(resolve => {
      fetch(API_URL + '/api/jira/rest/greenhopper/latest/sprintquery/509?includeHistoricSprints=true&includeFutureSprints=true').then(res => res.json()).then(sprintList => {
        const onlyTNS = sprintList.sprints
          .filter(({ name }) => name.includes('T&S'))
          // .filter(({ state }) => state === 'CLOSED')
          .sort((a, b) => {
            return b.sequence - a.sequence
          })
        commit('setSprintList', onlyTNS)
        resolve()
      })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
