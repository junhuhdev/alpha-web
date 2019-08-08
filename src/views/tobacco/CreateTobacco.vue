<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Create tobacco</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field label="Name" name="name" type="text"></v-text-field>
            <v-text-field label="Manufacturer" name="manufacturer" type="text"></v-text-field>
            <v-text-field label="Nicotine" name="nicotine" type="text"></v-text-field>
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
  name: 'CreateTobacco'
 };
</script>
<style scoped>
</style>
