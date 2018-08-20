import mount from '@/core/dom/mount.js'
import getTemplate from '@/core/util/getTemplate.js'
import guid from '../../core/util/guid';

export default {
  name: 'Attributes',

  computed: {
    components: {
      get() {
          return this.$store.state.components
      },
      set(components) {
          this.$store.commit('setState', {
              components
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
    }
  },

  mounted() {
    // this.mount()
  },

  methods: {
    dragOver(e) {
      e.preventDefault();
    },

    drop(e) {
      let info = JSON.parse(e.dataTransfer.getData('info'))
      let id = guid()
      info.id = id
      let component = getTemplate(info)
      console.log(component)
      // 计算位置
      let eventX = e.clientX
      let eventY = e.clientY
      console.log(eventX)
      let cellWidth = document.getElementById('cell').offsetWidth
      let barHeight = document.getElementById('topbar').offsetHeight
      component.attributes.style.left = (eventX - cellWidth) + 'px'
      component.attributes.style.top = (eventY - barHeight) + 'px'

      let components = JSON.parse(JSON.stringify(this.components))
      components.push(component)
      // this.components = components
      this.$store.commit('setState', {
        components
      })
      this.$store.commit('setState', {
        current: component
      })
      // console.log(this.$store.state)
      this.mount(component)
      this.$emit('updateType', info.type)
    },

    mount(component) {
      //挂载及更新视图中组件的位置信息
      mount(component.info.id, component).then(vm => {
        let tempEl = document.createElement('div')
        tempEl.id = component.info.id
        let previewEl = document.getElementById('preview')
        previewEl.appendChild(tempEl)
        vm.$mount(tempEl)
        // let el = document.getElementById(component.info.id)
        /*
        component.position = {
                offsetLeft: el.offsetLeft,
                offsetRight: el.offsetLeft + el.clientWidth,
                offsetTop: el.offsetTop,
                offsetBottom: el.offsetTop + el.clientHeight
            }
            //每次重新挂载后dom变动，更新scoped style
        this.addUserStyle()
        */
      })
      /*
      setTimeout(() => {
        this.components = components
      }, 0)*/
  },
  }
}
