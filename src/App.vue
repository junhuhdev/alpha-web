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

 export default {
  name: 'App',
  components: {
   NavbarHeader,
   HelloWorld,
  },
  data: () => ({
   //
  }),
 };
</script>
