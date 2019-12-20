<template>
  <v-app>
    <NavbarHeader/>
    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <SnackBar></SnackBar>
        <!-- If using vue-router -->
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
 import SnackBar from './components/common/SnackBar';

 export default {
  name: 'App',
  components: {
   SnackBar,
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
    let originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest.__retry) {
     this.$store.dispatch('logout').then(() => this.$router.push('/'));
    } else if (error.response.status === 400 && !originalRequest.__retry) {
     this.$store.dispatch('insertSnack', error.response.data);
    } else if (error.response.status === 409 && !originalRequest.__retry) {
     this.$store.dispatch('insertSnack', error.response.data);
    }
    return Promise.reject(error);
   });
  }
 };
</script>
