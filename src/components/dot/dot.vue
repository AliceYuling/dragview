<template>
  <div
    class="dot"
    :style="{left:x+'px',top:y+'px',width:width+'px',height:height+'px'}"
  >
  </div>
</template>

<script>
export default {
  name: 'Dot',
  props: ['x', 'y', 'width', 'height']
}
</script>

<style scoped>
.dot {
  position: absolute;
  background-color: black;
  z-index: 999
}
</style>
