import { DELETE_TOBACCO, INSERT_TOBACCO, SELECT_TOBACCO, SELECT_TOBACCOS, UPDATE_TOBACCO } from './types';
import axios from 'axios';

const BASE_PATH = '/api/tobaccos';

export default {
 namespaced: false,
 state: {
  tobacco: {},
  tobaccos: []
 },
 mutations: {
  [SELECT_TOBACCO] (state, payload) {
   state.tobacco = payload;
  },
  [SELECT_TOBACCOS] (state, payload) {
   state.tobaccos = payload;
  }
 },
 actions: {
  async selectTobacco ({commit}, id) {
   try {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH + '/' + id}`);
    commit(SELECT_TOBACCOS, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async selectTobaccos ({commit}) {
   try {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH}`);
    commit(SELECT_TOBACCOS, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async insertTobacco ({commit}, payload) {
   try {
    const response = await axios.post(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH}`, payload);
    commit(INSERT_TOBACCO, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async updateTobacco ({commit}, payload) {
   try {
    const response = await axios.put(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH + '/' + payload.id}`, payload);
    commit(UPDATE_TOBACCO, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async deleteTobacco ({commit}, payload) {
   try {
    const response = await axios.delete(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH}` + '/' + payload.id);
    commit(DELETE_TOBACCO, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  }
 },
 getters: {
  tobaccos: state => state.tobaccos,
  tobacco: state => state.tobacco
 }
};
