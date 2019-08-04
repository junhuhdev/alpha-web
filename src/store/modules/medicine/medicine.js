import { SELECT_MEDICINE, SELECT_MEDICINES } from './types';

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
  async selectVitamin ({commit}, id) {
   try {

   } catch (error) {

   }
  },
  async selectVitamins({commit}) {

  }
 }
};
