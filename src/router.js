import Vue from 'vue';
import Router from 'vue-router';
import AboutUs from './views/main/AboutUs';
import Home from './views/main/Home';
import Diary from './views/diary/Diary';
import Login from './views/main/Login';
import Register from './views/main/Register';
import Dashboard from './views/statistic/Dashboard';
import UserProfile from './views/user/UserProfile';
import CreateVitamin from './views/diary/CreateVitamin';
import CreateMedicine from './views/diary/CreateMedicine';
import CreateBug from './views/diary/CreateBug';
import CreateDiary from './views/diary/CreateDiary';
import CreateStack from './views/stack/CreateStack';
import Stack from './views/stack/Stack';
import UserSetting from './views/user/UserSetting';

Vue.use(Router);

export default new Router({
 mode: 'history',
 base: process.env.BASE_URL,
 routes: [
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
  {path: '/create-vitamin', name: 'create-vitamin', component: CreateVitamin},
  {path: '/create-medicine', name: 'create-medicine', component: CreateMedicine},
  {path: '/create-bug', name: 'create-bug', component: CreateBug},
  /** User routes */
  {path: '/user-profile', name: 'user-profile', component: UserProfile},
  {path: '/user-setting', name: 'user-setting', component: UserSetting},
  {path: '/about', name: 'about', component: AboutUs},
 ]
});
