import Vue from 'vue'
import Vuex from 'vuex'
import appStore from './app'

Vue.use(Vuex)

const app = {
  actions: { ...appStore.actions },
  getters: { ...appStore.getters },
  mutations: { ...appStore.mutations },
  state: { ...appStore.state },
  namespaced: true
}

const store = new Vuex.Store({
  modules: {
    app
  }
})

export default store
