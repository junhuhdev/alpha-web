<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Available Tobacco</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-text-field v-model="search" append-icon="mdi-search" label="Search" single-line hide-details></v-text-field>
        </v-toolbar>
        <v-card-text>
          <v-data-table
              :headers="headers"
              :items="tobaccos"
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
    {text: 'Nicotine', value: 'nicotine'},
   ],
  }),

  computed: {
   tobaccos () {
    return this.$store.getters.tobaccos;
   }
  },

  created () {
   this.$store.dispatch('selectTobaccos');
  }
 };
</script>
<style scoped>
</style>
