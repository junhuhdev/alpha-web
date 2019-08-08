import { SELECT_USER, SELECT_USERS } from './types';

const BASE_PATH = '/users';

export default {
 namespaced: false,
 state: {
  user: {},
  users: []
 },
 mutations: {
  [SELECT_USER] (state, payload) {
   state.user = payload;
  },
  [SELECT_USERS] (state, payload) {
   state.users = payload;
  }
 },
 actions: {
  async selectUser ({commit}, id) {
   try {

   } catch (error) {

   }
  },
  async selectUsers ({commit}) {
   try {

   } catch (error) {

   }
  },
  async insertUser ({commit}, payload) {
   try {

   } catch (error) {

   }
  },
  async updateUser ({commit}, payload) {
   try {

   } catch (error) {

   }
  },
  async deleteUser ({commit}, payload) {
   try {

   } catch (error) {

   }
  }
 },
 getters: {
  users: state => state.users,
  user: state => state.user
 }
};
