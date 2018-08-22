import { camelToDash } from './camelToDash.js'

function getStrTypeStyle (style) {
  let stringStyle = ''
  let value
  let arr = ['width', 'height', 'left', 'top']
  Object.keys(style).forEach(key => {
    if (arr.includes(key)) {
      value = style[key] + 'px'
    } else {
      value = style[key]
    }
    let attrKey = camelToDash(key)
    stringStyle += value ? `${attrKey}:${value};` : ''
  })
  return stringStyle
}

export default getStrTypeStyle
