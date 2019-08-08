import axios from 'axios';
import { SELECT_DIARIES, SELECT_DIARY } from './types';

const BASE_PATH = '/api/diaries';

export default {
 namespaced: false,
 state: {
  diary: {},
  diaries: []
 },
 mutations: {
  [SELECT_DIARY] (state, payload) {
   state.diary = payload;
  },
  [SELECT_DIARIES] (state, payload) {
   state.diaries = payload;
  }
 },
 actions: {
  async selectDiary ({commit}, id) {
   try {

   } catch (error) {

   }
  },
  async selectDiaries ({commit}) {
   try {

   } catch (error) {

   }
  },
  async insertDiary ({commit}, payload) {
   try {

   } catch (error) {

   }
  },
  async updateDiary ({commit}, payload) {
   try {

   } catch (error) {

   }
  },
  async deleteDiary ({commit}, payload) {
   try {

   } catch (error) {

   }
  }
 },
 getters: {
  diaries: state => state.diaries,
  diary: state => state.diary
 }
};
