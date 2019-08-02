<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
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
    {text: 'Name', value: 'name'},
    {text: 'Brand', value: 'brand'},
    {text: 'Dosage', value: 'dosage'},
    {text: 'Price', value: 'price'},
   ],
   vitamins: [
    {name: 'Vitamin-D|5000UI', brand: 'Now Foods', dosage: '5000UI', price: '100 SEK'},
    {name: 'Vitamin-A|5000UI', brand: 'Now Foods', dosage: '5000UI', price: '200 SEK'},
    {name: 'Curcumin|100mg', brand: 'Now Foods', dosage: '5000UI', price: '450 SEK'},
    {name: 'Omega-3|600mg', brand: 'Now Foods', dosage: '5000UI', price: '100 SEK'},
    {name: 'Vitamin-D|5000UI', brand: 'Now Foods', dosage: '5000UI', price: '100 SEK'},
    {name: 'Vitamin-D|5000UI', brand: 'Now Foods', dosage: '5000UI', price: '100 SEK'},
    {name: 'Vitamin-D|5000UI', brand: 'Now Foods', dosage: '5000UI', price: '200 SEK'},
    {name: 'Vitamin-D|5000UI', brand: 'Now Foods', dosage: '5000UI', price: '300 SEK'},
    {name: 'Vitamin-D|5000UI', brand: 'Now Foods', dosage: '5000UI', price: '100 SEK'},
    {name: 'Vitamin-D|5000UI', brand: 'Now Foods', dosage: '5000UI', price: '100 SEK'},
    {name: 'Vitamin-D|5000UI', brand: 'Now Foods', dosage: '5000UI', price: '100 SEK'},
   ]

  })
 };
</script>
<style scoped>
</style>
