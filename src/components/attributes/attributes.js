import DataSetting from '@/components/dataSetting/dataSetting.vue'
import StyleSetting from '@/components/styleSetting/styleSetting.vue'

export default {
  name: 'Attributes',
  props: ['type'],
  components: {
    DataSetting,
    StyleSetting
  },
  data () {
    return {
      stretch: true,
      activeName: 'data'
    }
  },
  computed: {
    current: {
      get() {
        return this.$store.state.current
      },
      set(current) {
        this.store.commit('setState', {
          current
        })
      }
    }
  },
  methods: {
    textChange (text) {
      document.getElementById(this.current.info.id).innerText = text
    },
    contentChange(value) {
      document.getElementById(this.current.info.id).innerText = value
    },
    bgColorChange (value) {
      document.getElementById(this.current.info.id).style.backgroundColor = value
    },
    fontSizeChange (value) {
      document.getElementById(this.current.info.id).style.fontSize = value
    },
    fontColorChange (value) {
      document.getElementById(this.current.info.id).style.color= value
    },
    imageChange(src) {
      document.getElementById(this.current.info.id).src = src
    }
  }
}
