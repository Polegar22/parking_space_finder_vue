// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


Vue.config.productionTip = false


import { MdToolbar, MdSpeedDial, MdIcon, MdCard, MdField, MdButton, MdRadio } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'


Vue.use(MdToolbar)
Vue.use(MdSpeedDial)
Vue.use(MdIcon)
Vue.use(MdCard)
Vue.use(MdField)
Vue.use(MdButton)
Vue.use(MdRadio)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
