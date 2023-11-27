
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import i18n from './i18n/i18n'
import './plugins/element.js'
import './assets/css/global.less'
import './plugins/lazyload.js'
import 'animate.css';

let vue = new Vue({
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

export default vue