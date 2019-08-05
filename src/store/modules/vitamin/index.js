import axios from 'axios';
import { SELECT_MEDICINE, SELECT_MEDICINES } from '../medicine/types';
import { SELECT_VITAMIN, SELECT_VITAMINS } from './types';

const BASE_PATH = '/vitamins';

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
    commit(SELECT_MEDICINE, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async selectVitamins ({commit}) {
   try {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH}`);
    commit(SELECT_MEDICINES, response.data);
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
  vitamin: state => state.vitamin
 }
};
