import Vue from 'vue'
import store from '@/core/store/index.js'
// import preview from './preview'
// 给定模板，和要挂载的元素id,挂载组件
var mount = function (id, _node) {
  let nodes = store.state.nodes
  let node = nodes.find(c => c.info.id === id)
  return new Promise((resolve, reject) => {
    let data = {}
    if (_node.attributes) {
      Object.keys(_node.attributes).forEach(key => {
        data[key] = _node.attributes[key].value
      })
    }

    if (node.uid) { // 销毁旧实例

    }

    let Vm = Vue.extend({
      name: id.toString(),
      data () {
        return data
      },
      template: _node.template,
      // el: document.getElementById(id),
      mounted () {
        this.$el.ondragstart = this.ondragstart
        this.$el.onclick = this.selectEl
        this.$el.id = id
        if (node) {
          node.uid = this._uid
        }

        // 添加选中效果
        let info = Object.assign({}, store.state.current.info)
        if (!info) {
          // this.$el.click()
        }
      },
      methods: {
        ondragstart (e) {
          let info
          let nodes = store.state.nodes.slice()
          if (nodes) {
            let node = nodes.find(item => {
              return item.info.id === e.target.id
            })
            if (node) {
              info = {
                type: node.info.type,
                id: e.target.id
              }
              e.dataTransfer.setData('info', JSON.stringify(info))
            }
          }
        },
        selectEl (e) {
          let nodes = store.state.nodes.slice()
          if (nodes) {
            let currentNode = nodes.find(item => {
              return item.info.id === e.target.id
            })
            if (currentNode) {
              store.commit('setState', {
                current: currentNode
              })
            }
          }
          // e.stopPropagation()
        }
      }
    })
    resolve(new Vm())
  })
}

export default mount
