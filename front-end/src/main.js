import Vue from 'vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import app from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import store from './store'

Vue.config.productionTip = false

import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(app)
}).$mount('#app')
