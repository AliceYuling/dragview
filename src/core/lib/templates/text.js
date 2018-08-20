import getStrTypeAttr from '@/core/util/getStrTypeAttr.js'

var getTextTemplate = function (_attr) {
  let attributes = {
    backgroundColor: {
      type: 'color',
      value: ''
    },
    color: {
      type: 'color',
      value: ''
    },
    src: {
      type: 'text',
      value: ''
    },
    style: {
      type: 'style',
      value: 'width:100px;height:50px;border:1px solid #aaa;background-color:#aaa;position:absolute;left:0;top:0;'
    }
  }

  Object.assign(attributes, _attr)

  let strAttr = getStrTypeAttr(attributes)

  let template = `<div ${strAttr}>Text</div>`

  return { template, attributes }
}

export default getTextTemplate
