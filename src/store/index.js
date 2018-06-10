import Vue from 'vue'
import Vuex from 'vuex'
import VuexI18n from 'vuex-i18n' // load vuex i18n module

import app from './modules/app'
import teams from './modules/teams'
import menu from './modules/menu'
import * as getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true, // process.env.NODE_ENV !== 'production',
  getters,
  modules: {
    app,
    menu,
    teams
  },
  state: {
  },
  mutations: {
    updateSprint (state, opened) {
      state.sidebar.opened = opened
    }
  },
  actions: {
  },
})

Vue.use(VuexI18n.plugin, store)

export default store
