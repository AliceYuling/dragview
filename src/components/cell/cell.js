export default {
  name: 'Cell',
  methods: {
    dragStart(e) {
      let cellName = e.target.getAttribute('data-name')
      let info = {
          type: cellName
      }
      e.dataTransfer.setData('info', JSON.stringify(info))
    }
  }
}
