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
    {text: 'Created', value: 'created'},
    {text: 'Sharpness', value: 'sharpness'},
    {text: 'Mood', value: 'mood'},
    {text: 'Energy', value: 'energy'},
    {text: 'Productivity', value: 'productivity'},
    {text: 'Medicines', value: 'medicines'},
    {text: 'Vitamins', value: 'vitamins', width: '400'},
    {text: 'Nootropics', value: 'nootropics'},
    {text: 'Bugs', value: 'bugs'},
   ],
   diaries: [
    {created: '2019-08-12', sharpness: 5, mood: 4, energy: 5, productivity: 1, medicines: 'attentin(10mg),alvedon(100mg)', vitamins: 'omega-3,vitamin-d,vitamin-c,melatonin', nootropics: '', bugs: ''},
    {created: '2019-07-12', sharpness: 5, mood: 4, energy: 5, productivity: 1, medicines: 'attentin(10mg),alvedon(100mg)', vitamins: 'omega-3,vitamin-d,vitamin-c,melatonin', nootropics: '', bugs: ''},
    {created: '2019-03-02', sharpness: 5, mood: 4, energy: 5, productivity: 1, medicines: 'attentin(10mg),alvedon(100mg)', vitamins: 'omega-3,vitamin-d,vitamin-c,melatonin', nootropics: '', bugs: 'sluggishness'},
    {created: '2019-01-01', sharpness: 5, mood: 4, energy: 5, productivity: 1, medicines: 'attentin(10mg),alvedon(100mg)', vitamins: 'omega-3,vitamin-d,vitamin-c,melatonin', nootropics: '', bugs: ''},
   ]
  })
 };
</script>
<style scoped>
</style>
