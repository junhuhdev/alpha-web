<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card>
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Create diary</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-select :items="severity" label="Sharpness" type="text"></v-select>
            <v-select :items="severity" label="Mood" type="text"></v-select>
            <v-select :items="severity" label="Energy" type="text"></v-select>
            <v-combobox :items="medicines" label="Medicines" multiple chips></v-combobox>
            <v-combobox :items="vitamins" label="Vitamins" multiple chips></v-combobox>
            <v-textarea label="Comment" auto-grow rows="3" row-height="15"></v-textarea>
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
   severity: [1, 2, 3, 4, 5],
   medicines: ['attentin 10mg', 'alvedon'],
   vitamins: ['vitamin-d 5000UI', 'omega-3'],
  })
 };
</script>
<style scoped>
</style>
