import * as types from './mutation-types'

export const delComponent = function ({commit, state}, {index}) {
  let pComponents = state.components.slice()
  pComponents.slice(index)
  commit(types.SET_COMPONENTS, pComponents)
}
