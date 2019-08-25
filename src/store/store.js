import Vue from 'vue';
import Vuex from 'vuex';
import medicineModule from './modules/medicine';
import vitaminModule from './modules/vitamin';
import userModule from './modules/user';
import nootropicModule from './modules/nootropic';
import foodModule from './modules/food';
import drinkModule from './modules/drink';
import diaryModule from './modules/diary';
import authModule from './modules/auth';
import bugModule from './modules/bug';
import tobaccoModule from './modules/tobacco';
import snackModule from './modules/snackbar';

Vue.use(Vuex);

export default new Vuex.Store({
 strict: process.env.NODE_ENV !== 'production',
 modules: {
  medicine: medicineModule,
  vitamin: vitaminModule,
  user: userModule,
  nootropic: nootropicModule,
  food: foodModule,
  drink: drinkModule,
  diary: diaryModule,
  auth: authModule,
  bug: bugModule,
  tobacco: tobaccoModule,
  snack: snackModule
 },
 state: {}
});
