import { merge } from 'vtc'

const state = {
  show: false,
  message: ''
}

const mutations = {
  UPDATE_TOAST (state, toastConfig) {
    merge(state, toastConfig)
  }
}

const actions = {
  updateToast ({ commit }, toastConfig) {
    commit('UPDATE_TOAST', toastConfig)
  }
}

const getters = {
  toast (state) {
    return state
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
