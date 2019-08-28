<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar color="grey" dark flat>
          <v-toolbar-title>Create daily food record</v-toolbar-title>
        </v-toolbar>
        <v-list-item three-line v-for="item in foodRecords" :key="item.category">
          <v-list-item-content>
            <v-list-item-title>{{item.category}}</v-list-item-title>
            <v-list-item-subtitle v-for="food in item.foods" :key="food">
              {{food}}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-card-text>
          <v-form>
            <v-select v-model="model.category" :items="categories" label="Category" type="text"></v-select>
            <v-combobox v-model="model.foods" :items="foods" label="Foods" multiple chips></v-combobox>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="add" color="primary">Add</v-btn>
          <v-btn @click="create" color="primary">Create</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
 export default {
  data: () => ({
   foodRecords: [],
   model: {
    category: '',
    foods: []
   },
   foods: ['Musli', 'Omelett', 'Pizza', 'Smoothie'],
   categories: ['Breakfast', 'Lunch', 'Dinner']
  }),

  created () {

  },

  methods: {
   add () {
    const exist = this.foodRecords.find(record => record.category === this.model.category);
    if (exist) {
     const index = this.foodRecords.findIndex(record => record.category === this.model.category);
     const newFoods = [...exist.foods, ...this.model.foods];
     const foodSet = new Set(newFoods);
     exist.foods = Array.from(foodSet);
     Object.assign(this.foodRecords[index], exist);
    } else {
     this.foodRecords.push(Object.assign({}, this.model));
    }
    this.model.category = '';
    this.model.foods = [];
   },

   create () {

   }
  }

 };
</script>
<style scoped>
</style>
