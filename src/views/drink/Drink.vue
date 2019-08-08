<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md6>
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Available Drinks</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-text-field v-model="search" append-icon="mdi-search" label="Search" single-line hide-details></v-text-field>
        </v-toolbar>
        <v-card-text>
          <v-data-table
              :headers="headers"
              :items="foods"
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
    {text: 'Category', value: 'category'},
    {text: 'Contains', value: 'contains'},
    {text: 'Calories', value: 'calories'},
   ],
   foods: [
    {name: 'Gröt', manufacturer: 'ABBA', ingredients: 'blåbär, gröt, havremjölk', category: 'breakfast', contains: 'gluten-free', calories: '200 cal'},
    {name: 'Gröt', manufacturer: 'ABBA', ingredients: 'blåbär, gröt, havremjölk', category: 'breakfast', contains: 'gluten-free', calories: '200 cal'},
    {name: 'Gröt', manufacturer: 'ABBA', ingredients: 'blåbär, gröt, havremjölk', category: 'breakfast', contains: 'gluten-free', calories: '200 cal'},
    {name: 'Gröt', manufacturer: 'ABBA', ingredients: 'blåbär, gröt, havremjölk', category: 'breakfast', contains: 'gluten-free', calories: '200 cal'},
    {name: 'Gröt', manufacturer: 'ABBA', ingredients: 'blåbär, gröt, havremjölk', category: 'breakfast', contains: 'gluten-free', calories: '200 cal'},
   ]
  })
 };
</script>
<style scoped>
</style>
