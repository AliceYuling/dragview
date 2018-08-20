import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/common/style.css'
import store from '@/core/store/index.js'
import './mock/mock.js'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(MuseUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
