import axios from 'axios'
import { url } from '../../helper/env'

const state = () => {
  return {
    token: localStorage.getItem('token') || null
  }
}
const getters = {
  isLogin (state) {
    if (state.token !== null) {
      return true
    } else {
      return false
    }
  }
}

const actions = {
  login (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${url}/v1/user/login`, payload)
        .then((result) => {
          resolve(result.data.message)
          localStorage.setItem('token', result.data.data.token)
          localStorage.setItem('datauser', JSON.stringify(result.data.data))
        })
        .catch((err) => {
          console.log(err.message)
        })
    })
  },
  logout (context) {
    return new Promise((resolve) => {
      localStorage.removeItem('token')
      resolve()
    })
  },
  register (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${url}/v1/user/register`, {
        name: payload.nama,
        email: payload.email,
        handphone: payload.handphone,
        password: payload.password,
        role: payload.role
      })
        .then((result) => {
        //   alert('Success Sign Up, please Log In')
        //   resolve(result.data.message)
        //   window.location = '/'
          console.log(result)
        })
        .catch((err) => {
          console.log(err.message)
        })
    })
  }

}

export default {
  namespaced: true,
  state,
  actions,
  getters
}
