import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import state from './state.js'
import * as getters from './getters.js'
// import * as actions from './actions.js'
import mutations from './mutations.js'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  getters,
  // actions,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
