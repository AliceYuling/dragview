import * as types from './mutation-types'

const actions = {
  [types.DEL_NODE] ({ commit, state }) {
    let pNodes = state.nodes.slice()
    // pNODEs.slice(index)
    commit(types.SET_NODES, pNodes)
  }
}

export default actions
