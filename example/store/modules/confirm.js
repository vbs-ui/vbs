import { merge } from '../../../src/utils'

const state = {
  show: false,
  title: '',
  content: ''
}

const mutations = {
  UPDATE_CONFIRM (state, confirmConfig) {
    merge(state, confirmConfig)
  }
}

const actions = {
  updateConfirm ({ commit }, confirmConfig) {
    commit('UPDATE_CONFIRM', confirmConfig)
  }
}

const getters = {
  confirm (state) {
    return state
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
