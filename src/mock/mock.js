import Mock from 'mockjs'

const getDevices = function (params) {
  let type = params.body
  let data
  switch (type) {
    case 'IoT设备':
      data = ['温度传感器', '湿度传感器']
      break
    default:
      data = []
  }
  return data
}

const getDeviceTypes = function () {
  let data = ['IoT设备']
  return data
}

const getDataStream = function (params) {
  let device = params.body
  let data = []
  switch (device) {
    case '温度传感器':
      data = ['摄氏温度', '华氏温度']
      break
    case '湿度传感器':
      data = ['湿度数据']
      break
    default:
      data = []
  }
  return data
}

const getDeviceData = function (params) {
  let stream = params.body
  let data = []
  switch (stream) {
    case '摄氏温度':
      data = [{
        time: '周一',
        temperature: '30'
      }, {
        time: '周二',
        temperature: '31'
      }, {
        time: '周三',
        temperature: '36'
      }, {
        time: '周四',
        temperature: '31'
      }, {
        time: '周五',
        temperature: '24'
      }, {
        time: '周六',
        temperature: '21'
      }, {
        time: '周日',
        temperature: '20'
      }]
      break
    case '湿度数据':
      data = [{
        time: '周一',
        humidity: '10'
      }, {
        time: '周二',
        humidity: '32'
      }, {
        time: '周三',
        humidity: '30'
      }, {
        time: '周四',
        humidity: '20'
      }, {
        time: '周五',
        humidity: '15'
      }, {
        time: '周六',
        humidity: '34'
      }, {
        time: '周日',
        humidity: '12'
      }]
      break
    default:
      data = []
  }
  return data
}

Mock.mock('/devices', 'post', getDevices)
Mock.mock('/device/types', 'get', getDeviceTypes)
Mock.mock('/device/stream', 'post', getDataStream)
Mock.mock('/device/data', 'post', getDeviceData)
