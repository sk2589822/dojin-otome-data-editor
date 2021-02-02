import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imagesMap: {},
    imagesNames: [],
    diffThreshold: 10,
    size: 175,
  },
  mutations: {
    setImagesMap(state, payload) {
      state.imagesMap = payload
    },
    setImagesNames(state, payload) {
      state.imagesNames = payload
    },
    setDiffThreshold(state, payload) {
      state.diffThreshold = payload
    },
    setSize(state, payload) {
      state.size = payload
    },
  },
  actions: {
  },
})
