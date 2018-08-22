import getStrTypeAttr from '@/core/util/getStrTypeAttr.js'
import getStrTypeStyle from '@/core/util/getStrTypeStyle'

var getTextTemplate = function (_attr, _style) {
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
    draggable: {
      type: 'boolean',
      value: true
    }
    /*
    style: {
      type: 'style',
      value: 'width:100px;height:50px;border:1px solid #aaa;background-color:#aaa;position:absolute;left:0;top:0;'
    }
    */
  }

  let style = {
    width: '100',
    height: '50',
    // border: '1px solid #aaa',
    backgroundColor: '#bbb',
    position: 'absolute',
    left: '0',
    top: '0'
  }

  Object.assign(attributes, _attr)
  Object.assign(style, _style)

  let strAttr = getStrTypeAttr(attributes)
  let strStyle = getStrTypeStyle(style)

  let template = `<div ${strAttr} style="${strStyle}">Text</div>`

  return { template, attributes, style }
}

export default getTextTemplate
