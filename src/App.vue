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

 export default {
  name: 'App',
  components: {
   NavbarBottom,
   NavbarHeader,
   HelloWorld,
  },
  data: () => ({
   //
  }),
 };
</script>
