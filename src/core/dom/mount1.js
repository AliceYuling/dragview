import Vue from 'vue'
// import preview from './preview'
// 给定模板，和要挂载的元素id,挂载组件
var mount = function (id, _component) {
  let nodes = window._Vue.$store.state.nodes
  let node = nodes.find(c => c.info.id === id)
  return new Promise((resolve, reject) => {
    // 需要延迟才能取到document.getElementById(id)
    setTimeout(() => {
      let data = {}
      if (_component.attributes) {
        Object.keys(_component.attributes).forEach(key => {
          data[key] = _component.attributes[key].value
        })
      }

      if (node.uid) { // 销毁旧实例

      }

      console.log(document.getElementById(id))

      var res = Vue.compile(node.template)
      let vm = new Vue({
        name: id.toString(),
        data () {
          return data
        },
        template: _component.template,
        el: document.getElementById(id),
        render: res.render,
        mounted () {
          this.$el.id = id
          if (node) {
            node.uid = this._uid
          }

          // 添加选中效果
          let info = window._Vue.$store.state.currentComponent.info
          if (!info) {
            this.$el.click()
          }
        }
      })
      resolve(vm)
    }, 200)
  })
}

export default mount
