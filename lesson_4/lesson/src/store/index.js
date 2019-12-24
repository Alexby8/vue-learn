import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    projectTitle: 'Project title'
  },
  mutations: {
    changeTitle: (state, payload) => (state.projectTitle = payload)
  }
})

export default store
