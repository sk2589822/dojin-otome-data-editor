import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drag: {
      sourceImageName: '',
      targetImageName: '',
    },
  },
  mutations: {
    setSourceImageName(state, payload) {
      state.drag.sourceImageName = payload
    },
    clearSourceImageName(state) {
      state.drag.sourceImageName = ''
    },
    setTargetImageName(state, payload) {
      state.drag.targetImageName = payload
    },
    clearTargetImageName(state ) {
      state.drag.targetImageName = ''
    },
  },
  actions: {
  },
})
