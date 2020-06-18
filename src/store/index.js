import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[]
  },
  mutations: {
    undata(state,payload){
      console.log(payload)
      state.list=payload
    }
  },
  actions: {

  },
  modules: {

  }
})
