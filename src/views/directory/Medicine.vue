<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>All Medicine</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-text-field v-model="search" append-icon="mdi-search" label="Search" single-line hide-details></v-text-field>
        </v-toolbar>
        <v-card-text>
          <v-data-table
              :headers="headers"
              :items="medicines"
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
    {text: 'Dosage', value: 'dosage'},
   ],
   medicines: [
    {name: 'Attentin|10mg', manufacturer: 'omarious', dosage: '10mg'},
    {name: 'Attentin|15mg', manufacturer: 'omarious', dosage: '10mg'},
    {name: 'Attentin|20mg', manufacturer: 'omarious', dosage: '10mg'},
    {name: 'Attentin|20mg', manufacturer: 'omarious', dosage: '10mg'},
    {name: 'Attentin|20mg', manufacturer: 'omarious', dosage: '10mg'},
    {name: 'Attentin|20mg', manufacturer: 'omarious', dosage: '10mg'},
    {name: 'Attentin|20mg', manufacturer: 'omarious', dosage: '10mg'},
    {name: 'Attentin|20mg', manufacturer: 'omarious', dosage: '10mg'},
    {name: 'Attentin|20mg', manufacturer: 'omarious', dosage: '10mg'},
    {name: 'Attentin|20mg', manufacturer: 'omarious', dosage: '10mg'},
    {name: 'Attentin|20mg', manufacturer: 'omarious', dosage: '10mg'},
    {name: 'Attentin|20mg', manufacturer: 'omarious', dosage: '10mg'},
    {name: 'Attentin|20mg', manufacturer: 'omarious', dosage: '10mg'},
    {name: 'Attentin|20mg', manufacturer: 'omarious', dosage: '10mg'},
    {name: 'Attentin|20mg', manufacturer: 'omarious', dosage: '10mg'},
    {name: 'Attentin|20mg', manufacturer: 'omarious', dosage: '10mg'},
    {name: 'Attentin|20mg', manufacturer: 'omarious', dosage: '10mg'},
    {name: 'Attentin|20mg', manufacturer: 'omarious', dosage: '10mg'},
    {name: 'Attentin|20mg', manufacturer: 'omarious', dosage: '10mg'},
    {name: 'Attentin|20mg', manufacturer: 'omarious', dosage: '10mg'},
    {name: 'Attentin|20mg', manufacturer: 'omarious', dosage: '10mg'},
    {name: 'Attentin|20mg', manufacturer: 'omarious', dosage: '10mg'},
    {name: 'Attentin|20mg', manufacturer: 'omarious', dosage: '10mg'},
    {name: 'Attentin|20mg', manufacturer: 'omarious', dosage: '10mg'},
    {name: 'Attentin|20mg', manufacturer: 'omarious', dosage: '10mg'},
    {name: 'Attentin|20mg', manufacturer: 'omarious', dosage: '10mg'},
    {name: 'Attentin|20mg', manufacturer: 'omarious', dosage: '10mg'},
   ]
  })
 };
</script>
<style scoped>
</style>
