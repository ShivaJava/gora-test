import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
  LOGIN,
  LOGOUT,
  GET_LOG_STATUS,
  GET_USER,
  GET_ERROR
} from './constans'

export default new Vuex.Store({
  state: {
    status: 'listen',
    error: '',
    token: localStorage.getItem('token') || '',
    user : {}
  },
  mutations: {
    [AUTH_REQUEST](state){
      state.status = 'loading'
    },
    [AUTH_SUCCESS](state, data){
      localStorage.setItem('token', data.token)
      Vue.axios.defaults.headers.common['Authorization'] = data.token

      state.status = 'success'
      state.error = ''
      state.token = data.token
      state.user = data.user
    },
    [AUTH_ERROR](state, error){
      state.status = 'error'
      state.error = error
    },
    [LOGOUT](state){
      localStorage.removeItem('token')
      delete Vue.axios.defaults.headers.common['Authorization']

      state.status = 'listen'
      state.token = ''
      state.user = {}
    },
  },
  actions: {
    async [LOGIN]({commit}, user){
        commit('AUTH_REQUEST')
        await Vue.axios({url: `${Vue.axios.defaults.baseURL}/user/login`, data: user, method: 'POST' })
        .then(resp => {
          commit('AUTH_SUCCESS', resp.data)
        })
        .catch((error) => {
          commit('AUTH_ERROR', error.response.data.error)
          commit('LOGOUT')
        })
    }
  },
  getters : {
    [GET_LOG_STATUS]: state => !!state.token,
    [GET_USER]: state => state.user,
    [GET_ERROR]: state => state.error
  }
})