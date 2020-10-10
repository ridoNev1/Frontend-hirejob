import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Hire from '../views/Hire.vue'
import Profile from '../views/Profile.vue'

import Home from '../views/Home.vue'

import Portofolio from '../views/Portofolio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/portofolio',
    name: 'Portofolio',
    component: Portofolio
  },
  {
    path: '/hire',
    name: 'Hire',
    component: Hire
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
