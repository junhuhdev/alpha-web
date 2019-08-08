import axios from 'axios';
import { SELECT_FOOD, SELECT_FOODS } from './types';

const BASE_PATH = '/api/foods';

export default {
 namespaced: false,
 state: {
  food: {},
  foods: []
 },
 mutations: {
  [SELECT_FOOD] (state, payload) {
   state.food = payload;
  },
  [SELECT_FOODS] (state, payload) {
   state.foods = payload;
  }
 },
 actions: {
  async selectFood ({commit}, id) {
   try {

   } catch (error) {

   }
  },
  async selectFoods ({commit}) {
   try {

   } catch (error) {

   }
  },
  async insertFood ({commit}, payload) {
   try {

   } catch (error) {

   }
  },
  async updateFood ({commit}, payload) {
   try {

   } catch (error) {

   }
  },
  async deleteFood ({commit}, payload) {
   try {

   } catch (error) {

   }
  }
 },
 getters: {
  foods: state => state.foods,
  food: state => state.food
 }
};
