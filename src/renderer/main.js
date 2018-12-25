import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import helper from './plugins/helper'

import App from './App'
import router from './router'
import store from './store'
import 'font-awesome/css/font-awesome.css'
// import animated from 'animate.css' // npm install animate.css --save安装，在引入

import '@/icons' // icon
// remove login component
// import '@/permission' // permission control

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.use(ElementUI, {
  locale
})
Vue.use(helper)
// Vue.use(animated)

Vue.config.productionTip = false

new Vue({
  components: {
    App
  },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
