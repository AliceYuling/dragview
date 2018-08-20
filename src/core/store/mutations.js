import * as types from './mutation-types'

// import * as types from './mutation-types'
const mutations = {
  setState (state, obj) {
    // obj = mergeDeep(JSON.parse(JSON.stringify(state)), obj)
    Object.assign(state, obj)

    // 保存本地
    localStorage.store = JSON.stringify(state)
  },

  [types.SET_COMPONENTS] (state, components) {
    state.components = components
  }
}

export default mutations
