<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md6>
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Available Vitamins</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-text-field v-model="search" append-icon="mdi-search" label="Search" single-line hide-details></v-text-field>
        </v-toolbar>
        <v-card-text>
          <v-data-table
              :headers="headers"
              :items="vitamins"
              :search="search"
          >
            <template v-slot:top>
              <v-toolbar flat color="white">
                <v-dialog v-model="dialog" max-width="800px">
                  <template v-slot:activator="{on}">
                    <v-btn v-on="on" absolute small dark fab right color="grey">
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                  </template>
                  <EditVitamin v-bind:vitamin="editedItem" v-bind:closeParent="close"></EditVitamin>
                </v-dialog>
              </v-toolbar>
            </template>
            <template v-slot:item.action="{item}">
              <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
              <v-icon small class="mr-2" @click="deleteItem(item)">mdi-delete</v-icon>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
 import Vue from 'vue';
 import { mapGetters } from 'vuex';
 import EditVitamin from './EditVitamin';

 export default Vue.extend({
  components: {EditVitamin},
  data: () => ({
   dialog: false,
   search: '',
   headers: [
    {text: 'Name', value: 'name', width: '200px'},
    {text: 'Manufacturer', value: 'manufacturer', width: '200px'},
    {text: 'Dosage', value: 'dosage', width: '200px'},
    {text: 'Price', value: 'amount', width: '200px'},
    {text: '', value: 'action', align: 'end'},
   ],
   editedIndex: -1,
   editedItem: {},
   defaultItem: {}
  }),

  watch: {
   dialog (val) {
    val || this.close();
   }
  },

  computed: {
   ...mapGetters([
    'vitamins'
   ])
  },

  created () {
   this.$store.dispatch('selectVitamins');
  },

  methods: {
   editItem (item) {
    this.editedIndex = this.vitamins.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialog = true;
   },

   deleteItem (item) {

   },

   close () {
    this.dialog = false;
    setTimeout(() => {
     this.editedItem = Object.assign({}, this.defaultItem);
     this.editedIndex = -1;
    }, 300);
   }

  },

 });
</script>
<style scoped>
</style>
