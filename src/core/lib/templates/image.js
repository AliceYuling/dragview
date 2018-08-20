import getStrTypeAttr from '@/core/util/getStrTypeAttr.js'

var getImgTemplate = function (_attr) {
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
    style: {
      type: 'style',
      value: 'width:100px;height:50px;border:1px solid #aaa;background-color:#bbb;position:absolute;left:0;top:0;'
    }
  }

  Object.assign(attributes, _attr)

  let strAttr = getStrTypeAttr(attributes)

  let template = `<img ${strAttr} />`

  return { template, attributes }
}

export default getImgTemplate
