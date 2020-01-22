import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import vuex from 'vuex'
import router from '@/router'
import {store} from '@/store'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  vuex,
  router,
  store,
  axios
}).$mount('#app')
