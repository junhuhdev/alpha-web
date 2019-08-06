import { AUTH_ERROR, AUTH_LOGOUT, AUTH_REQUEST, AUTH_SUCCESS } from './types';

export default {
 namespaced: false,
 state: {
  token: localStorage.getItem('user-token'),
  status: '',
  hasLoadedOnce: false
 },
 mutations: {
  [AUTH_REQUEST] (state) {
   state.status = 'loading';
  },
  [AUTH_SUCCESS] (state, response) {
   state.status = 'success';
   state.token = response.token;
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
  async login ({commit}, {email, password}) {
   try {

   } catch (error) {

   }
  },

  async logout ({commit}) {

  }
 },
 getters: {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status
 }
};
