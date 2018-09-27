import moment from 'moment/moment'

let momentFilter = function (value, formatString) {
  formatString = formatString || 'YYYY-MM-DD HH:mm:ss'
  return moment(value).format(formatString)
}
let nullFilter = function (value) {
  return (value === null || value === '' || value === 0) ? '-' : value
}
let distanceFilter = function (value) {
  let distance = Math.round(value)
  if (distance > 1000) {
    distance = distance/1000 + ' 千米'
  } else {
    distance = distance + ' 米'
  }
  return distance
}
let uuidFilter = function (value) {
  let temp = ''
  if (value) {
    temp += value
  }
  function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1)
  }
  return temp + (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4())
}
export { momentFilter, nullFilter, distanceFilter, uuidFilter }
