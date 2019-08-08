<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md8>
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Available Drinks</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-text-field v-model="search" append-icon="mdi-search" label="Search" single-line hide-details></v-text-field>
        </v-toolbar>
        <v-card-text>
          <v-data-table
              :headers="headers"
              :items="drinks"
              :search="search"
          ></v-data-table>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
 export default {
  data: () => ({
   search: '',
   headers: [
    {text: 'Name', value: 'name', width: '200'},
    {text: 'Size', value: 'size', width: '100'},
    {text: 'Manufacturer', value: 'manufacturer'},
    {text: 'Caffeine', value: 'caffeine'},
    {text: 'Ingredients', value: 'ingredients'},
   ],
  }),

  computed: {
   drinks () {
    return this.$store.getters.drinks;
   }
  },

  created () {
   this.$store.dispatch('selectDrinks');
  }
 };
</script>
<style scoped>
</style>
