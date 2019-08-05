<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Create food</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field label="Meal name" name="meal" type="text"></v-text-field>
            <v-textarea label="Ingredients" auto-grow rows="3" row-height="15"></v-textarea>
            <v-combobox :items="category" label="Category" chips></v-combobox>
            <v-combobox :items="allergies" label="Contains" multiple chips></v-combobox>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary">Create</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
 export default {
  data: () => ({
   category: ['breakfast', 'lunch', 'dinner', 'snack'],
   allergies: ['gluten', 'high-sugar', 'lactose']
  })
 };
</script>
<style scoped>
</style>
