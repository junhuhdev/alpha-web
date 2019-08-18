<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Create medicine</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field v-model="name" label="Name" name="name" type="text"></v-text-field>
            <v-text-field v-model="manufacturer" label="Manufacturer" name="manufacturer" type="text"></v-text-field>
            <v-text-field v-model="dosage" label="Dosage" name="dosage" type="text"></v-text-field>
            <v-textarea v-model="description" label="Description" auto-grow rows="2" row-height="15"></v-textarea>
            <v-text-field v-model="link" label="Link" name="link" type="text"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="create" color="primary">Create</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
 export default {
  data: () => ({
   name: '',
   manufacturer: '',
   dosage: '',
   description: '',
   link: '',
  }),

  computed: {},

  created () {

  },

  methods: {
   create () {
    const payload = {
     name: this.name,
     manufacturer: this.manufacturer,
     dosage: this.dosage,
     description: this.description,
     link: this.link
    };

    this.$store.dispatch('insertMedicine', payload)
     .then(() => this.$router.push('/medicine'));
   }
  },

 };
</script>
<style scoped>
</style>
