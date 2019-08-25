import { DELETE_USER, INSERT_USER, SELECT_USER, SELECT_USERS, UPDATE_USER } from './types';
import axios from 'axios';

const BASE_PATH = '/api/users';

export default {
 namespaced: false,
 state: {
  user: {},
  users: []
 },
 mutations: {
  [SELECT_USER] (state, payload) {
   state.user = payload;
  },
  [SELECT_USERS] (state, payload) {
   state.users = payload;
  }
 },
 actions: {
  async selectUser ({commit}, id) {
   try {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH + '/username/' + id}`);
    commit(SELECT_USER, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async selectUsers ({commit}) {
   try {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH}`);
    commit(SELECT_USERS, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async insertUser ({commit}, payload) {
   try {
    const response = await axios.post(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH + '/register'}`, payload);
    commit(INSERT_USER, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async updateUser ({commit}, payload) {
   try {
    const response = await axios.put(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH + '/' + payload.id}`, payload);
    commit(UPDATE_USER, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async deleteUser ({commit}, payload) {
   try {
    const response = await axios.delete(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH}` + '/' + payload.id);
    commit(DELETE_USER, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  }
 },
 getters: {
  users: state => state.users,
  user: state => state.user
 }
};
