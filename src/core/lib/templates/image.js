import getStrTypeAttr from '@/core/util/getStrTypeAttr.js'
import getStrTypeStyle from '@/core/util/getStrTypeStyle'

var getImgTemplate = function (_attr, _style) {
  let attributes = {
    width: {
      type: 'text',
      value: ''
    },
    height: {
      type: 'text',
      value: ''
    },
    src: {
      type: 'text',
      value: ''
    },
    alt: {
      type: 'text',
      value: 'Image'
    },
    draggable: {
      type: 'boolean',
      value: true
    }
    /*
    style: {
      type: 'style',
      value: 'width:100px;height:50px;border:1px solid #aaa;background-color:#bbb;position:absolute;left:0;top:0;'
    } */
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

  let template = `<img ${strAttr} style="${strStyle}" />`

  return { template, attributes, style }
}
export default getImgTemplate
