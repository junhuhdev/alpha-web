<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Create bug</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field label="Name" name="name" type="text"></v-text-field>
            <v-select :items="severity" label="Severity" type="text"></v-select>
            <v-textarea label="Description" auto-grow rows="3" row-height="15"></v-textarea>
            <v-textarea label="Reason" auto-grow rows="3" row-height="15"></v-textarea>
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
   severity: [1, 2, 3, 4, 5]
  })

 };
</script>
<style scoped>
</style>
