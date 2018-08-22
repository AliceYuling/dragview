<template>
  <div class="main">
    <top-menu />
    <div class="main-panel">
      <preview @updateType="changeType" />
      <node />
      <attributes :type="attrType" />
    </div>
  </div>
</template>

<script>
import topMenu from '@/components/topmenu/topmenu.vue'
import Node from '@/components/node/node.vue'
import Attributes from '@/components/attributes/attributes.vue'
import Preview from '@/components/preview/preview.vue'

export default {
  name: 'Main',
  components: {
    topMenu,
    Node,
    Attributes,
    Preview
  },
  data () {
    return {
      attrType: ''
    }
  },
  methods: {
    changeType (type) {
      this.attrType = type
    }
  }
}
</script>

<style>
  .main{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-height: 800px;
  }
  .main-panel{
    display: flex;
    width: 100%;
    min-height: 600px;
    flex: 1;
    background: #eee;
  }
</style>
