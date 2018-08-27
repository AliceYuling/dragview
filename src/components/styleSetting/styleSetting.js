export default {
  name: 'StyleSetting',
  props: ['type'],
  data() {
    return {
      textStyleForm: {
        content: '',
        bgColor: '',
        fontSize: '',
        fontColor: ''
      },
      barStyle: {
        title: '未命名' 
      }
    }
  },
  methods: {
    contentChange (value) {
      this.$emit('contentChange', value) 
    },
    bgColorChange (value) {
      this.$emit('bgColorChange', value)
    },
    fontSizeChange (value) {
      this.$emit('fontSizeChange', value) 
    },
    fontColorChange (value) {
      this.$emit('fontColorChange', value)
    }
  }
}
