<template>
  <v-app>
    <NavbarHeader/>
    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
 import NavbarHeader from './components/common/NavbarHeader';
 import NavbarBottom from './components/common/NavbarBottom';
 import NavigationDrawer from './components/common/NavigationDrawer';
 import axios from 'axios';

 export default {
  name: 'App',
  components: {
   NavigationDrawer,
   NavbarBottom,
   NavbarHeader,
  },
  data: () => ({
   //
  }),

  created () {
   axios.interceptors.response.use((response) => {
    return response;
   }, (error) => {
    console.log('error', error);
    let originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest.__retry) {
     this.$store.dispatch('logout').then(() => this.$router.push('/'));
    }
    return Promise.reject(error);
   });
  }
 };
</script>
