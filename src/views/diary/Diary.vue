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
              v-on:item-expanded="selectDiaryDetails"
          >
            <template v-slot:top>
              <v-toolbar flat color="white">
                <v-dialog v-model="dialog" max-width="800px">
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" absolute small dark fab right color="grey">
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                  </template>
                  <EditDiary
                      v-bind:diary="editedItem"
                      v-bind:title="formTitle"
                      v-bind:createMode="createMode"
                      v-bind:closeParent="close"
                  ></EditDiary>
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
            <template v-slot:item.createdDate="{item}">
              {{item.createdDate + ' ' + '(' + getDay(item.created) + ')'}}
            </template>
            <template v-slot:item.totalSleepHours="{item}">
              <v-chip class="elevation-1" :color="getSleepColor(item.totalSleepHours)" pill dark small>{{item.totalSleepHours}}</v-chip>
            </template>
            <template v-slot:item.sharpness="{item}">
              <v-chip class="elevation-1" :color="getColor(item.sharpness)" dark small>{{item.sharpness}}</v-chip>
            </template>
            <template v-slot:item.mood="{item}">
              <v-chip class="elevation-1" :color="getColor(item.mood)" dark small>{{item.mood}}</v-chip>
            </template>
            <template v-slot:item.energy="{item}">
              <v-chip class="elevation-1" :color="getColor(item.energy)" dark small>{{item.energy}}</v-chip>
            </template>
            <template v-slot:item.productivity="{item}">
              <v-chip class="elevation-1" :color="getColor(item.productivity)" dark small>{{item.productivity}}</v-chip>
            </template>
            <template v-slot:expanded-item="{item}">
              <!--              <td :colspan="headers.length">Comment: {{item.comment}}</td>-->
              <!--              <td :colspan="headers.length">{{diaryDetails}} </td>-->
              <td :colspan="headers.length">
                <!--                <Food></Food>-->
                <FoodDetailsTable></FoodDetailsTable>
              </td>
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
 import { mapGetters } from 'vuex';
 import FoodDetailsTable from '../food/FoodDetailsTable';
 import Food from '../food/Food';

 const moment = require('moment');

 export default {
  components: {Food, FoodDetailsTable, EditDiary},
  data: () => ({
   dialog: false,
   search: '',
   headers: [
    {text: 'DATE', value: 'createdDate', width: '130px', align: 'start'},
    {text: 'SL', value: 'totalSleepHours', width: '80px', align: 'start'},
    {text: 'SHARP', value: 'sharpness', width: '110px', align: 'start'},
    {text: 'PROD.', value: 'productivity', width: '110px', align: 'start'},
    {text: 'MOOD', value: 'mood', width: '110px', align: 'start'},
    {text: 'ENERGY', value: 'energy', width: '110px', align: 'start'},
    {text: 'BU', value: 'bugTags', width: '150px', align: 'start'},
    {text: 'AT', value: 'activities', width: '150px', align: 'start'},
    {text: 'ME', value: 'medicineTags', width: '150px', align: 'start'},
    {text: 'VI', value: 'vitaminTags', width: '200px', align: 'start'},
    {text: 'NO', value: 'nootropicTags', width: '150px', align: 'start'},
    {text: 'DR', value: 'drinkTags', width: '170px', align: 'start'},
    {text: 'TO', value: 'tobaccoTags', width: '50px', align: 'start'},
    {text: '', value: 'action', sortable: false, width: '70px', align: 'start'},
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
   ...mapGetters([
    'diaries',
    'diaryDetails'
   ]),

   formTitle () {
    return this.editedIndex === -1 ? 'Create diary' : 'Edit diary';
   },

   createMode () {
    return this.editedIndex === -1;
   }
  },

  created () {
   this.$store.dispatch('selectDiaries');
  },

  methods: {
   getDay (date) {
    return moment(date).format('ddd');
   },

   getSleepColor (severity) {
    if (severity <= 5) return 'red';
    else if (severity <= 6) return 'orange';
    else return 'green';
   },

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

   selectDiaryDetails (event) {
    if (event.value) {
     this.$store.dispatch('selectDiaryDetails', event.item.id);
    }
   },

   deleteItem (item) {
    confirm('Are you sure you want to delete?') && this.$store.dispatch('deleteDiary', item);
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
