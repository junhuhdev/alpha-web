<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md8>
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Available Nootropics</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-text-field v-model="search" append-icon="mdi-search" label="Search" single-line hide-details></v-text-field>
        </v-toolbar>
        <v-card-text>
          <v-data-table
              :headers="headers"
              :items="nootropics"
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
    {text: 'Name', value: 'name'},
    {text: 'Manufacturer', value: 'manufacturer'},
    {text: 'Ingredients', value: 'ingredients'},
    {text: 'Link', value: 'link'},
   ]
  }),

  computed: {
   nootropics () {
    return this.$store.getters.nootropics;
   }
  },

  created () {
   this.$store.dispatch('selectNootropics');
  }
 };
</script>
<style scoped>
</style>
