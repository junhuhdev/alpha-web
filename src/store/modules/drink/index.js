import axios from 'axios';
import { DELETE_DRINK, INSERT_DRINK, SELECT_DRINK, SELECT_DRINKS, UPDATE_DRINK } from './types';

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
  },
  [INSERT_DRINK] (state, payload) {
   state.drinks.push(payload);
  },
  [UPDATE_DRINK] (state, payload) {
   const index = state.drinks.findIndex(existing => existing.id === payload.id);
   Object.assign(state.drinks[index], payload);
  },
  [DELETE_DRINK] (state, payload) {
   const index = state.drinks.findIndex(existing => existing.id === payload.id);
   state.drinks.splice(index, 1);
  }
 },
 actions: {
  async selectDrink ({commit}, id) {
   try {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH + '/' + id}`);
    commit(SELECT_DRINK, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async selectDrinks ({commit}) {
   try {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH}`);
    commit(SELECT_DRINKS, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async insertDrink ({commit}, payload) {
   try {
    const response = await axios.post(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH}`, payload);
    commit(INSERT_DRINK, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async updateDrink ({commit}, payload) {
   try {
    const response = await axios.put(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH + '/' + payload.id}`, payload);
    commit(UPDATE_DRINK, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async deleteDrink ({commit}, payload) {
   try {
    const response = await axios.delete(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH}` + '/' + payload.id);
    commit(DELETE_DRINK, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  }
 },
 getters: {
  drinks: state => state.drinks,
  drink: state => state.drink,
  drinkOptions (state) {
   const options = [];
   state.drinks.map(d => {
    options.push(d.name);
   });
   return options;
  }
 }
};
