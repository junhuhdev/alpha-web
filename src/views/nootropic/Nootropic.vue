<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md8>
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Available Nootropics</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-text-field v-model="search" append-icon="mdi-search" label="Search" single-line hide-details></v-text-field>
        </v-toolbar>
        <v-card-text>
          <v-data-table
              :headers="headers"
              :items="nootropics"
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
                  <EditNootropic
                      v-bind:nootropic="editedItem"
                      v-bind:title="formTitle"
                      v-bind:createMode="createMode"
                      v-bind:closeParent="close"
                  ></EditNootropic>
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
 import { mapGetters } from 'vuex';
 import EditNootropic from './EditNootropic';

 export default {
  components: {EditNootropic},
  data: () => ({
   dialog: false,
   search: '',
   headers: [
    {text: 'Name', value: 'name'},
    {text: 'Manufacturer', value: 'manufacturer'},
    {text: 'Ingredients', value: 'ingredients'},
    {text: 'Link', value: 'link'},
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
    'nootropics'
   ]),

   formTitle () {
    return this.editedIndex === -1 ? 'Create nootropic' : 'Edit nootropic';
   },

   createMode () {
    return this.editedIndex === -1;
   }
  },

  created () {
   this.$store.dispatch('selectNootropics');
  },

  methods: {
   editItem (item) {
    this.editedIndex = this.nootropics.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialog = true;
   },

   deleteItem (item) {
    confirm('Are you sure you want to delete?') && this.$store.dispatch('deleteNootropic', item);
   },

   close () {
    this.dialog = false;
    setTimeout(() => {
     this.editedItem = Object.assign({}, this.defaultItem);
     this.editedIndex = -1;
    }, 300);
   }
  }
 };
</script>
<style scoped>
</style>
