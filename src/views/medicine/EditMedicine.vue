<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md12>
      <v-card class="elevation-12">
        <v-toolbar color="deep-purple accent-4" dark flat>
          <v-toolbar-title>{{title}}</v-toolbar-title>
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
          <v-btn v-if="createMode" color="primary" @click="insert">Create</v-btn>
          <v-btn v-if="!createMode" color="primary" @click="update">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
 import Vue from 'vue';

 export default Vue.extend({

  props: {
   title: String,
   createMode: Boolean,
   medicine: Object,
   closeParent: Function
  },

  methods: {
   insert () {
    this.$store.dispatch('insertMedicine', this.medicine)
     .then(() => this.closeParent());
   },

   update () {
    this.$store.dispatch('updateMedicine', this.medicine)
     .then(() => this.closeParent());
   }
  }
 });
</script>
<style scoped>
</style>
