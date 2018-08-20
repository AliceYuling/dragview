import Mock from 'mockjs'

const getDeviceData1 = function () {
  let data = ['dev1', 'dev2', 'dev3']
  return data
}

Mock.mock('/device', 'get', getDeviceData1)
