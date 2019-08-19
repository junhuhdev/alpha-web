import axios from 'axios';
import { DELETE_NOOTROPIC, INSERT_NOOTROPIC, SELECT_NOOTROPIC, SELECT_NOOTROPICS, UPDATE_NOOTROPIC } from './types';

const BASE_PATH = '/api/nootropics';

export default {
 namespaced: false,
 state: {
  nootropic: {},
  nootropics: []
 },
 mutations: {
  [SELECT_NOOTROPIC] (state, payload) {
   state.nootropic = payload;
  },
  [SELECT_NOOTROPICS] (state, payload) {
   state.nootropics = payload;
  },
  [INSERT_NOOTROPIC] (state, payload) {
   state.nootropics.push(payload);
  },
  [UPDATE_NOOTROPIC] (state, payload) {
   const index = state.nootropics.findIndex(existing => existing.id === payload.id);
   Object.assign(state.nootropics[index], payload);
  },
  [DELETE_NOOTROPIC] (state, payload) {
   const index = state.nootropics.findIndex(existing => existing.id === payload.id);
   state.nootropics.splice(index, 1);
  }
 },
 actions: {
  async selectNootropic ({commit}, id) {
   try {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH + '/' + id}`);
    commit(SELECT_NOOTROPIC, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async selectNootropics ({commit}) {
   try {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH}`);
    commit(SELECT_NOOTROPICS, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async insertNootropic ({commit}, payload) {
   try {
    const response = await axios.post(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH}`, payload);
    commit(INSERT_NOOTROPIC, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async updateNootropic ({commit}, payload) {
   try {
    const response = await axios.put(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH + '/' + payload.id}`, payload);
    commit(UPDATE_NOOTROPIC, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async deleteNootropic ({commit}, payload) {
   try {
    const response = await axios.delete(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH}` + '/' + payload.id);
    commit(DELETE_NOOTROPIC, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  }
 },
 getters: {
  nootropics: state => state.nootropics,
  nootropic: state => state.nootropic,
  nootropicOptions (state) {
   const options = [];
   state.nootropics.map(n => {
    options.push(n.name);
   });
   return options;
  }
 }
};
