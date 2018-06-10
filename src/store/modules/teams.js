// import * as types from '../mutation-types'
// const { JIRA_SEARCH } = process.env
import Vue from 'vue'

import appState from './app'
const state = {
  tns: {
    id: 0,
    name: 'Trust & Safety',
    leader: '@dkunin',
    teams: [
      {
        id: 509,
        name: 'Main team',
        leader: '@dkunin'
      }
    ],
    sprints: [],
    sprintDetails: {
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
  },
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
    values: Object.values(reduced)
  }
}

const mutations = {
  // [types.CLOSE_MENU] (state) {
  //   if (document.documentElement.clientWidth < 992) {
  //     state.sidebar.opened = false
  //   }
  // },
  // [types.TOGGLE_SIDEBAR] (state, opened) {
  //   state.sidebar.opened = opened
  // },
  // [types.TOGGLE_WITHOUT_ANIMATION] (state, value) {
  //   state.sidebar.withoutAnimation = value
  // },

  setSprintList (state, data) {
    Vue.set(state.tns, 'sprints', data)
  },
  setSprintDetails (state, data) {
    const tasksPie = typeOfTasks(data.contents.completedIssues)
    const newDetails = {
      dates: {
        startDate: data.sprint.startDate,
        endDate: data.sprint.endDate,
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
      tasksPie: {
        labels: tasksPie.labels,
        datasets: [{
          label: '',
          backgroundColor: [
            appState.state.config.palette.primary,
            appState.state.config.palette.lighterGray,
            appState.state.config.palette.info,
            appState.state.config.palette.success,
            appState.state.config.palette.danger
          ],
          data: tasksPie.values
        }]
      }
    }
    Vue.set(state.tns, 'sprintDetails', newDetails)
    // Vue.set(state.tns, 'sprints', data)
  },
  openSprint (state, sprintId) {
    Vue.set(state, 'openedSprint', sprintId)
  }
}

const actions = {
  // closeMenu ({ commit }) {
  //   commit(types.CLOSE_MENU)
  // },
  openSprint ({ commit, state }, sprintId) {
    if (state.openedSprint === sprintId) {
      commit('openSprint', null)
    } else {
      commit('openSprint', sprintId)
      // fetch('/static/test-data/sprint-report.json').then(res => res.json()).then(sprintReport => {
      //   commit('setSprintDetails', sprintReport)
      // })
    }
    // fetch(`${JIRA_SEARCH}?jql=${escape('Sprint = 1574')}`)
    //   .then(res => res.json()).then((sprintData) => {
    //     console.log(sprintData)
    //   })
    // commit(types.TOGGLE_SIDEBAR, opened)
  },
  getSprintList ({ commit }) {
    fetch('/static/test-data/sprints-list.json').then(res => res.json()).then(sprintList => {
      const onlyTNS = sprintList.sprints
        .filter(({ name }) => name.includes('T&S'))
        .sort((a, b) => {
          return b.sequence - a.sequence
        })
      commit('setSprintList', onlyTNS)
    })
  }
  // toggleSidebar ({ commit }, opened) {
  //   commit(types.TOGGLE_SIDEBAR, opened)
  // },
  // isToggleWithoutAnimation ({ commit }, value) {
  //   commit(types.TOGGLE_WITHOUT_ANIMATION, value)
  // }
}

export default {
  state,
  mutations,
  actions
}
