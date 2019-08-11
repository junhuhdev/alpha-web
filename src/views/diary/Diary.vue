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
            <template v-slot:item.action="{item}">
              <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
              <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
 export default {
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
  }),

  computed: {
   diaries () {
    return this.$store.getters.diaries;
   }
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

   editItem () {

   },

   deleteItem () {

   }
  }
 };
</script>
<style scoped>
</style>
