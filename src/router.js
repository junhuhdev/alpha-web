import Vue from 'vue';
import Router from 'vue-router';
import AboutUs from './views/main/AboutUs';
import Home from './views/main/Home';
import Diary from './views/diary/Diary';
import Login from './views/main/Login';
import Register from './views/main/Register';
import Dashboard from './views/statistic/Dashboard';
import UserProfile from './views/user/UserProfile';
import CreateVitamin from './views/vitamin/CreateVitamin';
import CreateMedicine from './views/medicine/CreateMedicine';
import CreateBug from './views/directory/CreateBug';
import CreateDiary from './views/diary/CreateDiary';
import CreateStack from './views/stack/CreateStack';
import Stack from './views/stack/Stack';
import UserSetting from './views/user/UserSetting';
import CreateFood from './views/food/CreateFood';
import Vitamin from './views/vitamin/Vitamin';
import Medicine from './views/medicine/Medicine';
import Bug from './views/directory/Bug';
import Food from './views/food/Food';
import CreateTobacco from './views/directory/CreateTobacco';
import Oura from './views/integration/oura/Oura';
import SmartScale from './views/integration/nokia/SmartScale';
import Fitbit from './views/integration/fitbit/Fitbit';

Vue.use(Router);

export default new Router({
 mode: 'history',
 base: process.env.BASE_URL,
 routes: [
  /** Main routes */
  {path: '/', name: 'home', component: Home},
  {path: '/login', name: 'login', component: Login},
  {path: '/register', name: 'register', component: Register},
  {path: '/dashboard', name: 'dashboard', component: Dashboard},
  /** Diary routes */
  {path: '/diary', name: 'diary', component: Diary},
  {path: '/stack', name: 'stack', component: Stack},
  {path: '/create-diary', name: 'create-diary', component: CreateDiary},
  {path: '/create-stack', name: 'create-stack', component: CreateStack},
  /** Directory routes */
  {path: '/vitamin', name: 'vitamin', component: Vitamin},
  {path: '/medicine', name: 'medicine', component: Medicine},
  {path: '/bug', name: 'bug', component: Bug},
  {path: '/food', name: 'food', component: Food},
  {path: '/create-vitamin', name: 'create-vitamin', component: CreateVitamin},
  {path: '/create-medicine', name: 'create-medicine', component: CreateMedicine},
  {path: '/create-bug', name: 'create-bug', component: CreateBug},
  {path: '/create-food', name: 'create-food', component: CreateFood},
  {path: '/create-tobacco', name: 'create-tobacco', component: CreateTobacco},
  /** User routes */
  {path: '/user-profile', name: 'user-profile', component: UserProfile},
  {path: '/user-setting', name: 'user-setting', component: UserSetting},
  {path: '/about', name: 'about', component: AboutUs},
  /** Integrations */
  {path: '/oura', name: 'oura', component: Oura},
  {path: '/smart-scale', name: 'smart-scale', component: SmartScale},
  {path: '/fitbit', name: 'fitbit', component: Fitbit},

 ]
});
