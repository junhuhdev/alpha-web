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
          ></v-data-table>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
 export default {
  data: () => ({
   search: '',
   headers: [
    {text: 'Created', value: 'createdDate'},
    {text: 'Sleep hours', value: 'totalSleepHours'},
    {text: 'Sharpness', value: 'sharpness'},
    {text: 'Mood', value: 'mood'},
    {text: 'Energy', value: 'energy'},
    {text: 'Productivity', value: 'productivity'},
    {text: 'Medicines', value: 'medicineTags'},
    {text: 'Vitamins', value: 'vitaminTags', width: '400'},
    {text: 'Nootropics', value: 'nootropicTags'},
    {text: 'Drinks', value: 'drinkTags'},
    {text: 'Tobaccos', value: 'tobaccoTags'},
    {text: 'Bugs', value: 'bugTags'},
    {text: 'Activities', value: 'activities'},
   ],
  }),

  computed: {
   diaries () {
    return this.$store.getters.diaries;
   }
  },

  created () {
   this.$store.dispatch('selectDiaries');
  }
 };
</script>
<style scoped>
</style>
