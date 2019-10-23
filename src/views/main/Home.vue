<template>
  <v-row align-content="center" class="flex-column">
    <h1>Welcome to Bio-Trackify</h1>
    <a href="http://localhost:9000/login/oauth2/code/fitbit">Fitbit</a><br>
    <a href="http://localhost:9000/login/oauth2/code/oura">Oura</a>
    <v-btn v-on:click="getSleep">Get sleep</v-btn>
    <div>{{getSleepData}}</div>
  </v-row>
</template>
<script>
 export default {
  data: () => ({}),

  computed: {
   getSleepData () {
    return this.$store.getters.sleep;
   }
  },

  created () {
  },

  methods: {
   getSleep () {
    this.$store.dispatch('selectSleep');
   },

   test() {

   },

   pelle() {

   },


  }

 };
</script>
<style scoped>
</style>
