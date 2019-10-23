import axios from 'axios';
import { SELECT_SLEEP } from './types';

const BASE_PATH = '/external/oura';

export default {
 namespaced: false,
 state: {
  sleep: {}
 },
 mutations: {
  [SELECT_SLEEP] (state, payload) {
   state.sleep = payload;
  }
 },
 actions: {
  async selectSleep ({commit}, id) {
   try {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH + '/sleep'}`);
    commit(SELECT_SLEEP, response.data);
    return response.data;
   } catch (error) {
    throw error;
   }
  },

 },
 getters: {
  sleep: state => state.sleep
 }
};
