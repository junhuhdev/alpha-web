<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md12>
      <v-data-table
          :headers="headers"
          :items="foods"
          item-key="name"
          group-by="category"
          class="elevation-1"
          :items-per-page=30
          hide-default-footer
          dense
          show-group-by
      >
      </v-data-table>
    </v-flex>
  </v-layout>
</template>
<script>
 export default {
  data: () => ({
   headers: [
    {text: 'Food', value: 'name', align: 'left'},
    {text: 'Category', value: 'category'},
   ],
   foods: [
    {name: 'Frozen yoghurt', category: 'Breakfast'},
    {name: 'Musli', category: 'Breakfast'},
    {name: 'Chicken with rice', category: 'Lunch'},
    {name: 'rice', category: 'Lunch'},
    {name: 'hamburger', category: 'Lunch'},
    {name: 'Meat soup', category: 'Dinner'},
   ]
  })
 };
</script>
<style scoped>
</style>
