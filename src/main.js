import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueSnip from 'vue-snip'


Vue.config.productionTip = false
Vue.use(VueSnip)
store.dispatch('getAllData')
new Vue({
  router,
  store,
  vuetify,
  VueSnip,
  render: h => h(App)
}).$mount('#app')
