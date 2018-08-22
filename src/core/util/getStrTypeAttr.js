function getStrTypeAttr (attributes) {
  let stringAttr = ''
  Object.keys(attributes).forEach(key => {
    let attrKey
    let arr = ['text', 'selection', 'icon', 'ionicon', 'color'] // 这些类型都不用加bind
    if (arr.includes(attributes[key].type) || attributes[key].notBind) {
      attrKey = key
    } else {
      attrKey = `:${key}`
    }
    stringAttr += attributes[key].value ? `${attrKey}="${attributes[key].value}"` : ''
  })
  return stringAttr
}

export default getStrTypeAttr
