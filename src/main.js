import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import vueAxios from 'vue-axios'

axios.defaults.baseURL = process.env.VUE_APP_API_URL

const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.common['Authorization'] = token
  axios.defaults.headers.common['Accept'] = 'application/json'
}

Vue.use(vueAxios, axios)

import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
