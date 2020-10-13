import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2'
import VueCarousel from 'vue-carousel'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueSweetalert2)
Vue.use(VueCarousel)

axios.interceptors.response.use(function (response) {
  if (response.data.message === 'Token Expired! Please log in again') {
    localStorage.removeItem('token')
    localStorage.removeItem('datauser')
    window.location = '/login'
  } else {
    return response
  }
}, function (error) {
  return Promise.reject(error)
})

Vue.config.productionTip = false
axios.defaults.headers = {
  token: localStorage.getItem('token')
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
