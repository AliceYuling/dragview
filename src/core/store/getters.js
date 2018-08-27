export const getNodes = state => state.nodes
export const getNodeById = (state) => (id) => {
  return state.nodes.find(item => {
    return item.info.id === id
  })
}
