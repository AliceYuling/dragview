export default {
  name: 'Node',
  methods: {
    dragStart(e) {
      let nodeName = e.target.getAttribute('data-name')
      let info = {
          type: nodeName,
          id: ''
      }
      e.dataTransfer.setData('info', JSON.stringify(info))
    }
  }
}
