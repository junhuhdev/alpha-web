import { DELETE_MEDICINE, INSERT_MEDICINE, SELECT_MEDICINE, SELECT_MEDICINES, UPDATE_MEDICINE } from './types';
import axios from 'axios';

const BASE_PATH = '/medicines';

export default {
 namespaced: true,
 state: {
  medicine: {},
  medicines: []
 },
 mutations: {
  [SELECT_MEDICINE] (state, payload) {
   state.medicine = payload;
  },
  [SELECT_MEDICINES] (state, payload) {
   state.medicines = payload;
  },

 },
 actions: {
  async selectMedicine ({commit}, id) {
   try {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH + '/' + id}`);
    commit(SELECT_MEDICINE, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async selectMedicines ({commit}) {
   try {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH}`);
    commit(SELECT_MEDICINES, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async insertMedicine ({commit}, payload) {
   try {
    const response = await axios.post(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH}`, payload);
    commit(INSERT_MEDICINE, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async updateMedicine ({commit}, payload) {
   try {
    const response = await axios.put(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH + '/' + payload.id}`, payload);
    commit(UPDATE_MEDICINE, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async deleteMedicine ({commit}, payload) {
   try {
    const response = await axios.delete(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH}` + '/' + payload.id);
    commit(DELETE_MEDICINE, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  }
 },
 getters: {
  medicines: state => state.medicines
 }
};
