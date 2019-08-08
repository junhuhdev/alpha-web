import { DELETE_BUG, INSERT_BUG, SELECT_BUG, SELECT_BUGS, UPDATE_BUG } from './types';
import axios from 'axios';

const BASE_PATH = '/api/bugs';

export default {
 namespaced: false,
 state: {
  bug: {},
  bugs: []
 },
 mutations: {
  [SELECT_BUG] (state, payload) {
   state.bug = payload;
  },
  [SELECT_BUGS] (state, payload) {
   state.bugs = payload;
  }
 },
 actions: {
  async selectBug ({commit}, id) {
   try {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH + '/' + id}`);
    commit(SELECT_BUGS, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async selectBugs ({commit}) {
   try {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH}`);
    commit(SELECT_BUGS, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async insertBug ({commit}, payload) {
   try {
    const response = await axios.post(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH}`, payload);
    commit(INSERT_BUG, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async updateBug ({commit}, payload) {
   try {
    const response = await axios.put(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH + '/' + payload.id}`, payload);
    commit(UPDATE_BUG, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async deleteBug ({commit}, payload) {
   try {
    const response = await axios.delete(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH}` + '/' + payload.id);
    commit(DELETE_BUG, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  }
 },
 getters: {
  bugs: state => state.bugs,
  bug: state => state.bug
 }
};
