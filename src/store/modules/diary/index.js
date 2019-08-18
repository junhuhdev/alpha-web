import { DELETE_DIARY, INSERT_DIARY, SELECT_ACTIVITIES, SELECT_DIARIES, SELECT_DIARY, SELECT_DIARY_DETAILS, UPDATE_DIARY } from './types';
import axios from 'axios';

const BASE_PATH = '/api/diaries';

export default {
 namespaced: false,
 state: {
  diary: {},
  diaryDetails: {},
  diaries: [],
  activities: []
 },
 mutations: {
  [SELECT_DIARY] (state, payload) {
   state.diary = payload;
  },
  [SELECT_DIARY_DETAILS] (state, payload) {
   state.diaryDetails = payload;
  },
  [SELECT_DIARIES] (state, payload) {
   state.diaries = payload;
  },
  [SELECT_ACTIVITIES] (state, payload) {
   state.activities = payload;
  },
  [INSERT_DIARY] (state, payload) {
   state.diaries.push(payload);
  },
  [UPDATE_DIARY] (state, payload) {
   const index = state.diaries.findIndex(existing => existing.id === payload.id);
   Object.assign(state.diaries[index], payload);
  }
 },
 actions: {
  async selectDiary ({commit}, id) {
   try {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH + '/' + id}`);
    commit(SELECT_DIARY, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async selectDiaryDetails ({commit}, id) {
   try {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH + '/' + id + '/details'}`);
    commit(SELECT_DIARY_DETAILS, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async selectDiaries ({commit}) {
   try {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH}`);
    commit(SELECT_DIARIES, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async selectActivities ({commit}) {
   try {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH + '/activities'}`);
    commit(SELECT_ACTIVITIES, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async insertDiary ({commit}, payload) {
   try {
    const response = await axios.post(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH}`, payload);
    commit(INSERT_DIARY, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async updateDiary ({commit}, payload) {
   try {
    const response = await axios.put(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH + '/' + payload.id}`, payload);
    commit(UPDATE_DIARY, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  },
  async deleteDiary ({commit}, payload) {
   try {
    const response = await axios.delete(`${process.env.VUE_APP_BACKEND_URL + BASE_PATH}` + '/' + payload.id);
    commit(DELETE_DIARY, response.data);
    return response.data;
   } catch (error) {
    console.log(error);
   }
  }
 },
 getters: {
  diaries: state => state.diaries,
  diary: state => state.diary,
  diaryDetails: state => state.diaryDetails,
  activityOptions: state => state.activities
 }
};
