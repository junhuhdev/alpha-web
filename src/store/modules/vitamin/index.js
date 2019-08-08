import axios from 'axios';
import { SELECT_VITAMIN, SELECT_VITAMINS } from './types';

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

  },
  async updateVitamin ({commit}, payload) {

  },
  async deleteVitamin ({commit}, payload) {

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
