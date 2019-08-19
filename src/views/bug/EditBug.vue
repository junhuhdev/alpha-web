<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md12>
      <v-card class="elevation-12">
        <v-toolbar color="deep-purple accent-4" dark flat>
          <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field v-model="bug.name" label="Name" name="name" type="text"></v-text-field>
            <v-select v-model="bug.severity" :items="severity" label="Severity" type="text"></v-select>
            <v-textarea v-model="bug.description" label="Description" auto-grow rows="3" row-height="15"></v-textarea>
            <v-textarea v-model="bug.reason" label="Reason" auto-grow rows="3" row-height="15"></v-textarea>
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

  data: () => ({
   severity: [1, 2, 3, 4, 5]
  }),

  props: {
   title: String,
   createMode: Boolean,
   bug: Object,
   closeParent: Function
  },

  methods: {
   insert () {
    this.$store.dispatch('insertBug', this.bug)
     .then(() => this.closeParent());
   },

   update () {
    this.$store.dispatch('updateBug', this.bug)
     .then(() => this.closeParent());
   }
  }

 });
</script>
<style scoped>
</style>
