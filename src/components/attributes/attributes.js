import DataSetting from '@/components/dataSetting/dataSetting.vue'
import StyleSetting from '@/components/styleSetting/styleSetting.vue'
import { runInThisContext } from 'vm';

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
      activeName: 'data',
      barOption: {
        legend: {},
        xAxis: {type: 'category'},
        yAxis: {},
        series: [
          { type: 'bar' }
        ],
        dataset: {
          source: []
        }
      },
      pieOption: {
        legend: {},
        xAxis: {type: 'category'},
        yAxis: {},
        series: [
          { type: 'pie' }
        ],
        dataset: {
          source: []
        }
      }
    }
  },
  computed: {
    nodes: {
      get() {
        return this.$store.state.nodes
      },
      set(nodes) {
        this.store.commit('setState', {
          nodes
        })
      }
    },
    current: {
      get() {
        return this.$store.state.current
      },
      set(current) {
        this.store.commit('setState', {
          current
        })
      }
    },
    currentId() {
      return this.current.info.id
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
    },
    updateBarData(data) {
      this.barOption.dataset.source = data
      this.updateBarChart()
    },
    updatePieData(data) {
      this.pieOption.dataset.source = data
      this.updatePieChart()
    },
    updateBarChart() {
      var chart = this.$echarts.getInstanceByDom(document.getElementById(this.current.info.id))
      chart.setOption(this.barOption, {
        notMerge: true
      })
    },
    updatePieChart() {
      var chart = this.$echarts.getInstanceByDom(document.getElementById(this.current.info.id))
      chart.setOption(this.pieOption, {
        notMerge: true
      })
    }
  }
}
