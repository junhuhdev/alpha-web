import Vue from 'vue';
import Vuex from 'vuex';
import medicineModule from './modules/medicine';

Vue.use(Vuex);

export default new Vuex.Store({
 strict: process.env.NODE_ENV !== 'production',
 modules: {
  medicine: medicineModule
 },
 state: {}
});
