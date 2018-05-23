import * as types from '../../mutation-types'
import statistics from './statistics'
import forms from './forms'
import dashboard from './dashboard'
import cluster from './cluster'
import team from './team'
import ui from './ui'
import maps from './maps'
import tables from './tables'
import auth from './auth'
import extra from './extra'
import singleTeam from './singleTeam'
import settings from './settings'

const state = {
  items: [
    dashboard,
    statistics,
    cluster,
    team,
    forms,
    tables,
    ui,
    extra,
    singleTeam,
    settings,
    auth,
    maps
  ]
}

const mutations = {
  [types.TOGGLE_EXPAND_MENU_ITEM] (state, payload) {
    let menuItem = payload.menuItem
    let expand = payload.expand
    if (menuItem.children && menuItem.meta) {
      menuItem.meta.expanded = expand
    }
  }
}

const actions = {
  toggleExpandMenuItem ({commit}, payload) {
    // commit(types.TOGGLE_EXPAND_MENU_ITEM, payload)
  }
}

export default {
  state,
  mutations,
  actions
}
