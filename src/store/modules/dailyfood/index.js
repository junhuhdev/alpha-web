import axios from 'axios';
import { DELETE_DAILY_FOOD, INSERT_DAILY_FOOD, SELECT_DAILY_FOOD, SELECT_DAILY_FOOD_CATEGORIES, SELECT_DAILY_FOODS, SELECT_DAILY_FOODS_AVAILABLE, UPDATE_DAILY_FOOD } from './types';

const BASE_PATH = '/api/dailyfoods';

export default {
 namespaced: false,
 state: {
  dailyFood: {},
  dailyFoods: [],
  dailyFoodCategories: [],
  dailyFoodsAvailable: []
 },
 mutations: {
  [SELECT_DAILY_FOOD] (state, payload) {
   state.dailyFood = payload;
  },
  [SELECT_DAILY_FOODS] (state, payload) {
   state.dailyFoods = payload;
  },
  [SELECT_DAILY_FOODS_AVAILABLE] (state, payload) {
   state.dailyFoodsAvailable = payload;
  },
  [SELECT_DAILY_FOOD_CATEGORIES] (state, payload) {
   state.dailyFoodCategories = payload;
  },
  [INSERT_DAILY_FOOD] (state, payload) {
   state.dailyFoods.push(payload);
  },
  [UPDATE_DAILY_FOOD] (state, payload) {
   const index = state.dailyFoods.findIndex(existing => existing.id === payload.id);
   Object.assign(state.dailyFoods[index], payload);
  },
  [DELETE_DAILY_FOOD] (state, payload) {
   const index = state.dailyFoods.findIndex(existing => existing.id === payload.id);
   state.dailyFoods.splice(index, 1);
  }
 },
 actions: {
  async selectDailyFood ({commit}, id) {
   try {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH + '/' + id}`);
    commit(SELECT_DAILY_FOOD, response.data);
    return response.data;
   } catch (error) {
    throw error;
   }
  },
  async selectDailyFoods ({commit}) {
   try {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH}`);
    commit(SELECT_DAILY_FOODS, response.data);
    return response.data;
   } catch (error) {
    throw error;
   }
  },
  async selectDailyFoodsAvailable ({commit}) {
   try {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH + '/foods'}`);
    commit(SELECT_DAILY_FOODS_AVAILABLE, response.data);
    return response.data;
   } catch (error) {
    throw error;
   }
  },
  async selectDailyFoodCategories ({commit}) {
   try {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH + '/categories'}`);
    commit(SELECT_DAILY_FOOD_CATEGORIES, response.data);
    return response.data;
   } catch (error) {
    throw error;
   }
  },
  async insertDailyFood ({commit}, payload) {
   try {
    const response = await axios.post(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH}`, payload);
    commit(INSERT_DAILY_FOOD, response.data);
    return response.data;
   } catch (error) {
    throw error;
   }
  },
  async updateDailyFood ({commit}, payload) {
   try {
    const response = await axios.put(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH + '/' + payload.id}`, payload);
    commit(UPDATE_DAILY_FOOD, response.data);
    return response.data;
   } catch (error) {
    throw error;
   }
  },
  async deleteDailyFood ({commit}, payload) {
   try {
    const response = await axios.delete(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH}` + '/' + payload.id);
    commit(DELETE_DAILY_FOOD, response.data);
    return response.data;
   } catch (error) {
    throw error;
   }
  }
 },
 getters: {
  dailyFoods: state => state.dailyFoods,
  dailyFood: state => state.dailyFood,
  dailyFoodCategories: state => state.dailyFoodCategories,
  dailyFoodsAvailable: state => state.dailyFoodsAvailable
 }
};
