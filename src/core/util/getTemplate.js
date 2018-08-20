import templates from '@/core/lib/templates/index.js'

var getTemplate = function (info, _attr = {}) {
  let component

  component = templates[info.type](_attr)

  // 没有class属性的，添加class属性
  if (!component.attributes.class) {
    component.attributes.class = {
      type: 'text',
      value: ''
    }
  }

  // 添加组件标识 (info.id是唯一标识)
  component.template = component.template.replace(' ', ' data-component-active ')

  component.info = info

  return component
}

export default getTemplate
