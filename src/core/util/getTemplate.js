import templates from '@/core/lib/templates/index.js'

var getTemplate = function (info, _style = {}, _attr = {}) {
  let node

  node = templates[info.type](_attr, _style)

  // 没有class属性的，添加class属性
  if (!node.attributes.class) {
    node.attributes.class = {
      type: 'text',
      value: ''
    }
  }

  // 添加组件标识 (info.id是唯一标识)
  node.template = node.template.replace(' ', ' data-node-active ')

  node.info = info

  return node
}

export default getTemplate
