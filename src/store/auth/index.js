import axios from 'axios'
import { url } from '../../helper/env'

const state = () => {
  return {
    token: localStorage.getItem('token') || null,
    detailUser: [],
    dataPorfolio: []
  }
}
const getters = {
  isLogin (state) {
    if (state.token !== null) {
      return true
    } else {
      return false
    }
  },
  getDetailUser (state) {
    const data1 = state.detailUser
    const skill1 = `${data1.skill}`
    const skill2 = skill1.split(',')
    data1.skill = skill2
    return data1
  },
  getPortfolio (state) {
    return state.dataPorfolio
  }
}

const mutations = {
  SET_DETAIL_USER: (state, payload) => {
    state.detailUser = payload
  },
  SET_PORTFOLIO: (state, payload) => {
    state.dataPorfolio = payload
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
  },
  getOneUser (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/v1/user/${payload}`).then(result => {
        context.commit('SET_DETAIL_USER', result.data.data[0])
        // console.log(result.data.data[0])
      }).catch(err => {
        console.log(err)
      })
    })
  },
  findPortfolio (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/v1/portfolio/findone/${payload}`).then(result => {
        context.commit('SET_PORTFOLIO', result.data.data)
        // console.log(result.data.data)
      }).catch(err => {
        console.log(err)
      })
    })
  },
  sendEmail (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post()
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
