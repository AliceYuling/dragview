import * as types from './mutation-types'

// import * as types from './mutation-types'
const mutations = {
  setState (state, obj) {
    // obj = mergeDeep(JSON.parse(JSON.stringify(state)), obj)
    Object.assign(state, obj)

    // 保存本地
    localStorage.store = JSON.stringify(state)
  },

  [types.SET_NODES] (state, nodes) {
    state.nodes = nodes.slice()
  },

  [types.SET_NODE] (state, node) {
    let nodes = state.nodes.slice(0)
    let temp = nodes.find(item => {
      return item.info.id === node.info.id
    })
    if (temp) {
      state.nodes = nodes.map(item => {
        if (item.info.id === node.info.id) {
          item = Object.assign({}, node)
        }
        return item
      }).slice(0)
    } else {
      state.nodes.push(node)
    }
  }
}

export default mutations
