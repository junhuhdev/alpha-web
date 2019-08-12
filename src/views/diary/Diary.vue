<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md12>
      <v-card class="elevation-12">
        <v-toolbar color="grey" dark flat>
          <v-toolbar-title>Daily Records</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-text-field v-model="search" append-icon="mdi-search" label="Search" single-line hide-details></v-text-field>
        </v-toolbar>
        <v-card-text>
          <v-data-table
              :headers="headers"
              :items="diaries"
              :search="search"
              show-expand
          >
            <template v-slot:top>
              <v-toolbar flat color="white">
                <v-dialog v-model="dialog" max-width="800px">
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" absolute small dark fab right color="red lighten-1">
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                  </template>
                  <EditDiary v-bind:diary="editedItem"></EditDiary>
                </v-dialog>
              </v-toolbar>
            </template>
            <template v-slot:item.medicineTags="{item}">
              <v-chip-group multiple column>
                <v-chip class="elevation-1" small v-for="medicine in item.medicineTags" :key="medicine">{{medicine}}</v-chip>
              </v-chip-group>
            </template>
            <template v-slot:item.vitaminTags="{item}">
              <v-chip-group multiple column>
                <v-chip class="elevation-1" small v-for="vitamin in item.vitaminTags" :key="vitamin">{{vitamin}}</v-chip>
              </v-chip-group>
            </template>
            <template v-slot:item.nootropicTags="{item}">
              <v-chip-group multiple column>
                <v-chip class="elevation-1" small v-for="nootropic in item.nootropicTags" :key="nootropic">{{nootropic}}</v-chip>
              </v-chip-group>
            </template>
            <template v-slot:item.drinkTags="{item}">
              <v-chip-group multiple column>
                <v-chip class="elevation-1" small v-for="drink in item.drinkTags" :key="drink">{{drink}}</v-chip>
              </v-chip-group>
            </template>
            <template v-slot:item.tobaccoTags="{item}">
              <v-chip-group>
                <v-chip class="elevation-1" small v-for="tobacco in item.tobaccoTags" :key="tobacco">{{tobacco}}</v-chip>
              </v-chip-group>
            </template>
            <template v-slot:item.bugTags="{item}">
              <v-chip-group column dark>
                <v-chip class="elevation-1" color="red" small v-for="bug in item.bugTags" :key="bug">{{bug}}</v-chip>
              </v-chip-group>
            </template>
            <template v-slot:item.activities="{item}">
              <v-chip-group multiple column>
                <v-chip class="elevation-1" small v-for="activity in item.activities" :key="activity">{{activity}}</v-chip>
              </v-chip-group>
            </template>
            <template v-slot:item.sharpness="{item}">
              <v-chip class="elevation-1" :color="getColor(item.sharpness)" dark>{{item.sharpness}}</v-chip>
            </template>
            <template v-slot:item.mood="{item}">
              <v-chip class="elevation-1" :color="getColor(item.mood)" dark>{{item.mood}}</v-chip>
            </template>
            <template v-slot:item.energy="{item}">
              <v-chip class="elevation-1" :color="getColor(item.energy)" dark>{{item.energy}}</v-chip>
            </template>
            <template v-slot:item.productivity="{item}">
              <v-chip class="elevation-1" :color="getColor(item.productivity)" dark>{{item.productivity}}</v-chip>
            </template>
            <template v-slot:expanded-item="{item}">
              <td :colspan="headers.length">Comment: {{item.comment}}</td>
            </template>
            <template v-slot:item.action="{ item }">
              <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
              <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
            </template>
            <template v-slot:no-data>
              <v-btn color="primary">Reset</v-btn>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
 import EditDiary from './EditDiary';

 export default {
  components: {EditDiary},
  data: () => ({
   dialog: false,
   search: '',
   headers: [
    {text: 'Created', value: 'createdDate', width: '110'},
    {text: 'Sleep', value: 'totalSleepHours'},
    {text: 'Sharp.', value: 'sharpness'},
    {text: 'Mood', value: 'mood'},
    {text: 'Energy', value: 'energy'},
    {text: 'Prod.', value: 'productivity'},
    {text: 'Med.', value: 'medicineTags', width: '170'},
    {text: 'Vit.', value: 'vitaminTags', width: '200'},
    {text: 'Noo.', value: 'nootropicTags', width: '170'},
    {text: 'Drinks', value: 'drinkTags', width: '170'},
    {text: 'Tob.', value: 'tobaccoTags', width: '100'},
    {text: 'Bugs', value: 'bugTags', width: '170'},
    {text: 'Act.', value: 'activities'},
    {text: 'Actions', value: 'action', sortable: false},
   ],
   editedIndex: -1,
   editedItem: {
    totalSleepHours: 0,
    sharpness: 0,
    mood: 0,
    energy: 0,
    productivity: 0,
    medicineTags: [],
    vitaminTags: [],
    nootropicTags: [],
    drinkTags: [],
    tobaccoTags: [],
    bugTags: [],
   },
   defaultItem: {
    totalSleepHours: 0,
    sharpness: 0,
    mood: 0,
    energy: 0,
    productivity: 0,
    medicineTags: [],
    vitaminTags: [],
    nootropicTags: [],
    drinkTags: [],
    tobaccoTags: [],
    bugTags: [],
   }
  }),

  watch: {
   dialog (val) {
    val || this.close();
   }
  },

  computed: {
   diaries () {
    return this.$store.getters.diaries;
   },
   formTitle () {
    return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
   },
  },

  created () {
   this.$store.dispatch('selectDiaries');
  },

  methods: {
   getColor (severity) {
    if (severity < 3) return 'red';
    else if (severity === 3) return 'orange';
    else return 'green';
   },

   editItem (item) {
    this.editedIndex = this.diaries.indexOf(item);
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
  }
 };
</script>
<style scoped>
</style>
