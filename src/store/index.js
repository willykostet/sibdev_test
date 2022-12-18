import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logined: false
  },
  getters: {
    getLogined(state){
      return state.logined
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
