import axios from 'axios';
import { SELECT_DRINK, SELECT_DRINKS } from './types';

const BASE_PATH = '/api/drinks';

export default {
 namespaced: false,
 state: {
  drink: {},
  drinks: []
 },
 mutations: {
  [SELECT_DRINK] (state, payload) {
   state.drink = payload;
  },
  [SELECT_DRINKS] (state, payload) {
   state.drinks = payload;
  }
 },
 actions: {
  async selectDrink ({commit}, id) {
   try {

   } catch (error) {

   }
  },
  async selectDrinks ({commit}) {
   try {

   } catch (error) {

   }
  },
  async insertDrink ({commit}, payload) {
   try {

   } catch (error) {

   }
  },
  async updateDrink ({commit}, payload) {
   try {

   } catch (error) {

   }
  },
  async deleteDrink ({commit}, payload) {
   try {

   } catch (error) {

   }
  }
 },
 getters: {
  drinks: state => state.drinks,
  drink: state => state.drink
 }
};
