import Vue from 'vue'
import Vuex from 'vuex'
import VuexI18n from 'vuex-i18n' // load vuex i18n module

import app from './modules/app'
import menu from './modules/menu'
import * as getters from './getters'
const { JIRA_SEARCH } = process.env

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true, // process.env.NODE_ENV !== 'production',
  getters,
  modules: {
    app,
    menu
  },
  state: {
    teams: {
      tns: {
        sprints: [],
      }
    }
  },
  mutations: {
    updateSprint (state, opened) {
      state.sidebar.opened = opened
    }
  },
  actions: {
    getSprintData ({ commit }, opened) {
      fetch(`${JIRA_SEARCH}?jql=${escape('Sprint = 1574')}`)
        .then(res => res.json()).then((sprintData) => {
          console.log(sprintData)
        })
      // commit(types.TOGGLE_SIDEBAR, opened)
    }
  },
})

Vue.use(VuexI18n.plugin, store)

export default store
