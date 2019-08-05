import axios from 'axios';
import { SELECT_NOOTROPIC, SELECT_NOOTROPICS } from './types';

const BASE_PATH = '/nootropics';

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
  }
 },
 actions: {
  async selectNootropic ({commit}, id) {
   try {

   } catch (error) {

   }
  },
  async selectNootropics ({commit}) {
   try {

   } catch (error) {

   }
  },
  async insertNootropic ({commit}, payload) {
   try {

   } catch (error) {

   }
  },
  async updateNootropic ({commit}, payload) {
   try {

   } catch (error) {

   }
  },
  async deleteNootropic ({commit}, payload) {
   try {

   } catch (error) {

   }
  }
 },
 getters: {
  nootropics: state => state.nootropics,
  nootropic: state => state.nootropic
 }
};
