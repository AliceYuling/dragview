import mount from '@/core/dom/mount.js'
import getTemplate from '@/core/util/getTemplate.js'
import getStrTypeStyle from '@/core/util/getStrTypeStyle.js'
import guid from '../../core/util/guid';
import { mapMutations } from 'vuex'
import Dot from '../dot/dot.vue'
import Edge from '../edge/edge.vue'

export default {
  name: 'Attributes',
  components: {
    Dot,
    Edge
  },
  data() {
    return {
      dotWidth: 4,
      position: 'absolute'
    }
  },
  computed: {
    nodes: {
      get() {
          return this.$store.state.nodes
      },
      set(nodes) {
          this.$store.commit('setState', {
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
    elSelelcted() {
      return Object.keys(this.current).length
    }
  },

  watch: {
    current () {
      this.$emit('updateType', this.current.info.type)
    }
  },

  methods: {
    ...mapMutations([
      'setState'
    ]),

    ...mapMutations({
      setNode: 'SET_NODE',
    }),

    click() {
      console.log('click')
    },
    dragOver(e) {
      e.preventDefault();
    },

    drop(e) {
      let info = JSON.parse(e.dataTransfer.getData('info'))
      let targetId = info.id
      let nodes = JSON.parse(JSON.stringify(this.nodes))
      let node = nodes.find(item => {
        return item.info.id === targetId
      })
      let firstDrag = false
      if(!node) {
        let id = guid()
        info.id = id
        node = getTemplate(info)
        firstDrag = true
      }
      
      // 计算位置
      let eventX = e.clientX
      let eventY = e.clientY
      let nodeWidth = document.getElementById('node').offsetWidth
      let barHeight = document.getElementById('topbar').offsetHeight
      node.style.left = (eventX - nodeWidth)
      node.style.top = (eventY - barHeight)
      node = getTemplate(info, node.style, node.attributes)
      if (firstDrag) {
        this.mount(node)
      } else {
        this.setStyle(node)
      }
      this.setNode(node)
      this.$store.commit('setState', {
        current: node
      })
    },

    mount(node) {
      //挂载及更新视图中组件的位置信息
      let el = document.getElementById(node.info.id)
      if (el) {
        mount(node.info.id, node).then(vm => {
          vm.$mount(el)
        })
      } else {
        mount(node.info.id, node).then(vm => {
          let tempEl = document.createElement('div')
          tempEl.id = node.info.id
          let previewEl = document.getElementById('preview')
          previewEl.appendChild(tempEl)
          vm.$mount(tempEl)
          // vm.$on('click', this.selectEl)
          // vm.$on('dragstart', this.dragStart)
          if(node.info.type === 'pieChart') {
            this.$echarts.init(document.getElementById(node.info.id)).setOption({
              series: {
                type: 'pie',
                data: [
                  {name: 'A', value: 1212},
                  {name: 'B', value: 2323},
                  {name: 'C', value: 1919}
                ]
              }
            })
          } else if (node.info.type === 'barChart') {
            this.$echarts.init(document.getElementById(node.info.id)).setOption({
              title: {
                text: ''
              },
              tooltip: {},
              legend: {
                data:['销量']
              },
              xAxis: {
                data: ["A","B","C","D","E","F"]
              },
              yAxis: {},
              series: [{
                name: '',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
              }]
            })
          }
        })
      }
    },
    setStyle(node) {
      let el = document.getElementById(node.info.id)
      if (el) {
        el.style = getStrTypeStyle(node.style)
      }
    }
  }
}
