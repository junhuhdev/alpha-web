<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md8>
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Available Bugs</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-text-field v-model="search" append-icon="mdi-search" label="Search" single-line hide-details></v-text-field>
        </v-toolbar>
        <v-card-text>
          <v-data-table
              :headers="headers"
              :items="bugs"
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
                  <EditBug v-bind:bug="editedItem"
                           v-bind:title="formTitle"
                           v-bind:createMode="createMode"
                           v-bind:closeParent="close"
                  ></EditBug>
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
 import EditBug from './EditBug';

 export default {
  components: {EditBug},
  data: () => ({
   dialog: false,
   search: '',
   headers: [
    {text: 'Name', value: 'name', width: '200px'},
    {text: 'Severity', value: 'severity', width: '150px'},
    {text: 'Description', value: 'description', width: '300px'},
    {text: 'Reason', value: 'reason', width: '400px'},
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
    'bugs'
   ]),

   formTitle () {
    return this.editedIndex === -1 ? 'Create bug' : 'Edit bug';
   },

   createMode () {
    return this.editedIndex === -1;
   }
  },

  created () {
   this.$store.dispatch('selectBugs');
  },

  methods: {
   editItem (item) {
    this.editedIndex = this.bugs.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialog = true;
   },

   deleteItem (item) {
    confirm('Are you sure you want to delete?') && this.$store.dispatch('deleteBug', item);
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
