<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md6>
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Available Vitamins</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-text-field v-model="search" append-icon="mdi-search" label="Search" single-line hide-details></v-text-field>
        </v-toolbar>
        <v-card-text>
          <v-data-table
              :headers="headers"
              :items="vitamins"
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
    {text: 'Name', value: 'name', width: '200px'},
    {text: 'Manufacturer', value: 'manufacturer', width: '200px'},
    {text: 'Dosage', value: 'dosage', width: '200px'},
    {text: 'Price', value: 'amount', width: '200px'},
   ],
  }),

  computed: {
   vitamins () {
    return this.$store.getters.vitamins;
   }
  },

  created () {
   this.$store.dispatch('selectVitamins');
  }

 };
</script>
<style scoped>
</style>
