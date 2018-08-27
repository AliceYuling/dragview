import axios from 'axios'

export default {
  name: 'subAttribute',
  props: ['type'],
  data() {
    return {
      textDeviceType: '',
      barDeviceType: '',
      devices: [],
      textForm: {},
      barForm: {
        serialName: '示例系列名'
      },
      pieForm: {
        serialName: '示例系列名'
      },
      types: [],
      streams: [],
      serialName: '',
      barDevice: '',
      barDeviceData: '',
      barDataStream: '',
      deviceData: {},
      pieDeviceType: '',
      pieDevice: '',
      pieDeviceData: {},
      pieDataStream: '',
    }
  },
  created() {
    this.getDeviceTypes()
  },
  watch: {
    textDeviceType(newVal) {
      console.log(newVal)
      this.$emit('textChange', newVal)
    },
    barDeviceType(newVal) {
      this.getDevices(newVal)
    },
    barDevice(newVal) {
      this.getDataStream(newVal)
    },
    barDataStream(newVal) {
      this.getDeviceData(newVal, 'bar')
    },
    pieDeviceType(newVal) {
      this.getDevices(newVal)
    },
    pieDevice(newVal) {
      this.getDataStream(newVal)
    },
    pieDataStream(newVal) {
      this.getDeviceData(newVal, 'pie')
    }
  },
  methods: {
    getDeviceTypes() {
      axios.get('/device/types').then(res => {
        this.types = res.data
      })
    },
    getDevices(type) {
      axios.post('/devices', type).then(res => {
        this.devices = res.data
      })
    },
    getDataStream(device) {
      axios.post('/device/stream', device).then(res => {
        this.streams = res.data
      })
    },
    getDeviceData(stream, type) {
      axios.post('/device/data', stream).then(res => {
        Object.assign(this.deviceData, {
          [stream]: {
            data: res.data
          }
        })
        if (type === 'bar') {
          this.$emit('updateBarData', res.data)
        } else if (type === 'pie') {
          this.$emit('updatePieData', res.data)
        }
      })
    },
    fileUploaded(file) {
      this.$emit('imageChange', file.url)
    }
  }
}
