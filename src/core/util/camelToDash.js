export const camelToDash = function (str) {
  let s = str.replace(/([A-Z])/g, '-$1').toLowerCase()
  return s
}
