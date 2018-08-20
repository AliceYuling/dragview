import axios from 'axios'

export default {
  name: 'subAttribute',
  props: ['type'],
  data() {
    return {
      selectedDevice: '',
      devices: [],
      textForm: {}
    }
  },
  created() {
    this.getDeviceData()
  },
  watch: {
    selectedDevice(newVal) {
      console.log(newVal)
      this.$emit('textChange', newVal)
    }
  },
  methods: {
    getDeviceData() {
      console.log('getDeviceData')
      axios.get('/device').then(res => {
        this.devices = res.data
        console.log(res.data)
      })
    },
    fileUploaded(file) {
      console.log(file)
      this.$emit('imageChange', file.url)
    }
  }
}
