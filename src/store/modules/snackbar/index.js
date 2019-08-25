import { INSERT_SNACK } from './types';

export default {
 namespaced: false,
 state: {
  text: '',
 },
 mutations: {
  [INSERT_SNACK] (state, payload) {
   state.text = payload;
  }
 },
 actions: {
  async insertSnack ({commit}, payload) {
   commit(INSERT_SNACK, payload);
  }
 },
 getters: {
  snackText: state => state.text,
 }
};
