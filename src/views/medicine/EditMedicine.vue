<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md12>
      <v-card class="elevation-12">
        <v-toolbar color="deep-purple accent-4" dark flat>
          <v-toolbar-title>Edit medicine</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field v-model="medicine.name" label="Name" name="name" type="text"></v-text-field>
            <v-text-field v-model="medicine.manufacturer" label="Manufacturer" name="manufacturer" type="text"></v-text-field>
            <v-text-field v-model="medicine.dosage" label="Dosage" name="dosage" type="text"></v-text-field>
            <v-textarea v-model="medicine.description" label="Description" auto-grow rows="2" row-height="15"></v-textarea>
            <v-text-field v-model="medicine.link" label="Link" name="link" type="text"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="warning">Cancel</v-btn>
          <v-btn color="primary" @click="update">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
 export default {

  props: ['medicine'],

  methods: {
   update () {
    this.$store.dispatch('updateMedicine', this.medicine);
   }
  }
 };
</script>
<style scoped>
</style>
