import axios from 'axios';
import { DELETE_FOOD, INSERT_FOOD, SELECT_FOOD, SELECT_FOODS, UPDATE_FOOD } from './types';

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
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH + '/' + id}`);
    commit(SELECT_FOOD, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async selectFoods ({commit}) {
   try {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH}`);
    commit(SELECT_FOODS, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async insertFood ({commit}, payload) {
   try {
    const response = await axios.post(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH}`, payload);
    commit(INSERT_FOOD, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async updateFood ({commit}, payload) {
   try {
    const response = await axios.put(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH + '/' + payload.id}`, payload);
    commit(UPDATE_FOOD, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async deleteFood ({commit}, payload) {
   try {
    const response = await axios.delete(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH}` + '/' + payload.id);
    commit(DELETE_FOOD, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  }
 },
 getters: {
  foods: state => state.foods,
  food: state => state.food
 }
};
