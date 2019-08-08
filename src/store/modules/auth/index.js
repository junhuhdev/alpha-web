import { AUTH_ERROR, AUTH_LOGOUT, AUTH_REQUEST, AUTH_SUCCESS } from './types';
import axios from 'axios';

export const USER_TOKEN = 'user-token';

export default {
 namespaced: false,
 state: {
  token: localStorage.getItem(USER_TOKEN),
  status: '',
  hasLoadedOnce: false
 },
 mutations: {
  [AUTH_REQUEST] (state) {
   state.status = 'loading';
  },
  [AUTH_SUCCESS] (state, token) {
   state.status = 'success';
   state.token = token;
   state.hasLoadedOnce = true;
  },
  [AUTH_ERROR] (state) {
   state.status = 'error';
   state.hasLoadedOnce = true;
  },
  [AUTH_LOGOUT] (state) {
   state.token = '';
  }
 },
 actions: {
  async login ({commit}, {username, password}) {
   try {
    const params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);
    const response = await axios.post(`${process.env.VUE_APP_BACKEND_URL + '/api/authenticate'}`, params);
    const token = response.headers['authorization'];
    console.log('Successful login', token);
    axios.defaults.headers.common['Authorization'] = token;
    localStorage.setItem(USER_TOKEN, token);
    commit(AUTH_SUCCESS, token);
    return response.data;
   } catch (error) {
    console.log('Invalid login', error);
   }
  },

  async logout ({commit}) {
   commit(AUTH_LOGOUT);
   localStorage.removeItem(USER_TOKEN);
  }
 },
 getters: {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status
 }
};
