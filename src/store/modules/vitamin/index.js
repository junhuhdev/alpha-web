import axios from 'axios';
import { DELETE_VITAMIN, INSERT_VITAMIN, SELECT_VITAMIN, SELECT_VITAMINS, UPDATE_VITAMIN } from './types';

const BASE_PATH = '/api/vitamins';

axios.defaults.headers.common['Authorization'] = localStorage.getItem('user-token');

export default {
 namespaced: false,
 state: {
  vitamin: {},
  vitamins: []
 },
 mutations: {
  [SELECT_VITAMIN] (state, payload) {
   state.vitamin = payload;
  },
  [SELECT_VITAMINS] (state, payload) {
   state.vitamins = payload;
  },
  [INSERT_VITAMIN] (state, payload) {
   state.vitamins.push(payload);
  },
  [UPDATE_VITAMIN] (state, payload) {
   const index = state.vitamins.findIndex(existing => existing.id === payload.id);
   Object.assign(state.vitamins[index], payload);
  }
 },
 actions: {
  async selectVitamin ({commit}, id) {
   try {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH + '/' + id}`);
    commit(SELECT_VITAMIN, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async selectVitamins ({commit}) {
   try {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH}`);
    commit(SELECT_VITAMINS, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async insertVitamin ({commit}, payload) {
   try {
    const response = await axios.post(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH}`, payload);
    commit(INSERT_VITAMIN, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async updateVitamin ({commit}, payload) {
   try {
    const response = await axios.put(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH + '/' + payload.id}`, payload);
    commit(UPDATE_VITAMIN, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async deleteVitamin ({commit}, payload) {
   try {
    const response = await axios.delete(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH}` + '/' + payload.id);
    commit(DELETE_VITAMIN, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  }
 },
 getters: {
  vitamins: state => state.vitamins,
  vitamin: state => state.vitamin,
  vitaminOptions (state) {
   const options = [];
   state.vitamins.map(v => {
    options.push(v.name);
   });
   return options;
  }
 }
};
