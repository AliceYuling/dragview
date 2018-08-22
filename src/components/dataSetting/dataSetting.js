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
      axios.get('/device').then(res => {
        this.devices = res.data
      })
    },
    fileUploaded(file) {
      this.$emit('imageChange', file.url)
    }
  }
}
