<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md8>
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Available Bugs</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-text-field v-model="search" append-icon="mdi-search" label="Search" single-line hide-details></v-text-field>
        </v-toolbar>
        <v-card-text>
          <v-data-table
              :headers="headers"
              :items="bugs"
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
    {text: 'Severity', value: 'severity', width: '200px'},
    {text: 'Description', value: 'description', width: '200px'},
    {text: 'Reason', value: 'reason', width: '200px'},
   ],
  }),

  computed: {
   bugs () {
    return this.$store.getters.bugs;
   }
  },

  created () {
   this.$store.dispatch('selectBugs');
  }
 };
</script>
<style scoped>
</style>
