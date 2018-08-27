<template>
  <div
    class="edge"
    :style="style"
  >
  </div>
</template>

<script>
import getStrTypeStyle from '@/core/util/getStrTypeStyle.js'
export default {
  name: 'Edge',
  props: ['type', 'x1', 'y1', 'x2', 'y2'],
  computed: {
    style () {
      let strStyle = ''
      if (this.type === 'horizontal') {
        let objStyle = {
          left: this.x1,
          top: this.y1,
          width: this.x2 - this.x1,
          borderTop: '1px solid black'
        }
        strStyle = getStrTypeStyle(objStyle)
      } else if (this.type === 'vertical') {
        let objStyle = {
          left: this.x1,
          top: this.y1,
          height: this.y2 - this.y1,
          borderLeft: '1px solid black'
        }
        strStyle = getStrTypeStyle(objStyle)
      }
      return strStyle
    }
  }
}
</script>

<style scoped>
.edge {
  position: absolute;
  height: 0;
  z-index: 1000
}
</style>
