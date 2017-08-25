import Vue from 'vue'
import Vuex from 'vuex'
import toast from './modules/toast'
import confirm from './modules/confirm'

if (process.env.NODE_ENV !== 'production') {
  Vue.use(Vuex)
}

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    toast,
    confirm
  }
})

export default store
