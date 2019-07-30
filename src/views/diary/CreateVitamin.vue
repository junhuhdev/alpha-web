<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card>
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Create vitamin</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-file-input label="Image"></v-file-input>
            <v-text-field label="Name" name="name" type="text"></v-text-field>
            <v-text-field label="Brand" name="brand" type="text"></v-text-field>
            <v-text-field label="Dosage" name="dosage" type="text"></v-text-field>
            <v-textarea label="Description" auto-grow rows="2" row-height="15"></v-textarea>
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
  name: 'CreateVitamin'
 };
</script>
<style scoped>
</style>
