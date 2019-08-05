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
 import HelloWorld from './components/HelloWorld';
 import NavbarHeader from './components/common/NavbarHeader';
 import NavbarBottom from './components/common/NavbarBottom';
 import NavigationDrawer from './components/common/NavigationDrawer';

 export default {
  name: 'App',
  components: {
   NavigationDrawer,
   NavbarBottom,
   NavbarHeader,
   HelloWorld,
  },
  data: () => ({
   //
  }),
 };
</script>
