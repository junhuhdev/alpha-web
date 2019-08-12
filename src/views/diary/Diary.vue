<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md12>
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
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
                    <v-btn v-on="on" absolute small dark fab right color="pink">
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                  </template>
                  <EditDiary v-bind:diary="editedItem"></EditDiary>
                </v-dialog>
              </v-toolbar>
            </template>
            <template v-slot:item.sharpness="{item}">
              <v-chip :color="getColor(item.sharpness)" dark>{{item.sharpness}}</v-chip>
            </template>
            <template v-slot:item.mood="{item}">
              <v-chip :color="getColor(item.mood)" dark>{{item.mood}}</v-chip>
            </template>
            <template v-slot:item.energy="{item}">
              <v-chip :color="getColor(item.energy)" dark>{{item.energy}}</v-chip>
            </template>
            <template v-slot:item.productivity="{item}">
              <v-chip :color="getColor(item.productivity)" dark>{{item.productivity}}</v-chip>
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
    {text: 'Sleep hours', value: 'totalSleepHours'},
    {text: 'Sharpness', value: 'sharpness', width: '10'},
    {text: 'Mood', value: 'mood', width: '10'},
    {text: 'Energy', value: 'energy', width: '10'},
    {text: 'Productivity', value: 'productivity', width: '10'},
    {text: 'Medicines', value: 'medicineTags', width: '200'},
    {text: 'Vitamins', value: 'vitaminTags', width: '200'},
    {text: 'Nootropics', value: 'nootropicTags'},
    {text: 'Drinks', value: 'drinkTags'},
    {text: 'Tobaccos', value: 'tobaccoTags'},
    {text: 'Bugs', value: 'bugTags'},
    {text: 'Activities', value: 'activities'},
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
   },
   defaultItem: {
    totalSleepHours: 0,
    sharpness: 0,
    mood: 0,
    energy: 0,
    productivity: 0,
    medicineTags: [],
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
