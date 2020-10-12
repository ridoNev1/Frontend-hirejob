import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import Login from '../views/Login.vue'
import LoginRekrut from '../views/LoginRekrut.vue'
import Register from '../views/Register.vue'
import RegisRekrut from '../views/RegisterRekrut.vue'
import Hire from '../views/Hire.vue'
import Profile from '../views/Profile.vue'
import Chat from '../views/Chat.vue'
import ProfileRecrut from '../views/ProfileRecrut'
import Company from '../views/Company.vue'

import Home from '../views/Home.vue'

import Portofolio from '../views/Portofolio.vue'

import store from '../store/index'

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
    path: '/loginrekrut',
    name: 'LoginRekrut',
    component: LoginRekrut
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/regisrekrut',
    name: 'RegisRekrut',
    component: RegisRekrut
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/profilerecrut',
    name: 'ProfileRecrut',
    component: ProfileRecrut
  },
  {
    path: '/company',
    name: 'Company',
    component: Company
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
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
    // ,
    // meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) { // jika ada requiresAuth TRUE di setiap path
    if (!store.getters['auth/isLogin']) { // masuk selanjutnya jika tidak ada getters di login
      next({
        name: 'Login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
