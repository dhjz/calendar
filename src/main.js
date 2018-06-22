// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import axios from 'axios'
import FastClick from 'fastclick'
import './style/base.styl'

Vue.config.productionTip = false
Vue.prototype.$http = axios
// 总线
Vue.prototype.bus = new Vue()

FastClick.attach(document.body)
// h5 适配iPhone X
Vue.nextTick(() => {
  document.querySelector('meta[name=viewport]').content += ', viewport-fit=cover'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
