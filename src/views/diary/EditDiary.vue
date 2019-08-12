<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md12>
      <v-card class="elevation-12">
        <v-toolbar color="deep-purple accent-4" dark flat>
          <v-toolbar-title>Edit diary</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field v-model="diary.totalSleepHours" label="Total sleep hours" name="sleep" type="number"></v-text-field>
            <v-select v-model="diary.sharpness" :items="severity" label="Sharpness" type="text"></v-select>
            <v-select v-model="diary.mood" :items="severity" label="Mood" type="text"></v-select>
            <v-select v-model="diary.energy" :items="severity" label="Energy" type="text"></v-select>
            <v-select v-model="diary.productivity" :items="severity" label="Productivity" type="text"></v-select>
            <v-combobox v-model="diary.medicineTags" :items="medicineOptions" label="Medicines" multiple chips></v-combobox>
            <v-combobox v-model="diary.vitaminTags" :items="vitaminOptions" label="Vitamins" multiple chips></v-combobox>
            <v-combobox v-model="diary.nootropicTags" :items="nootropicOptions" label="Nootropics" multiple chips></v-combobox>
            <v-combobox v-model="diary.drinkTags" :items="drinkOptions" label="Drinks" multiple chips></v-combobox>
            <v-combobox v-model="diary.tobaccoTags" :items="tobaccoOptions" label="Tobaccos" multiple chips></v-combobox>
            <v-combobox v-model="diary.bugTags" :items="bugOptions" label="Bugs" multiple chips></v-combobox>
            <v-combobox v-model="diary.activities" :items="activityOptions" label="Activities" multiple chips></v-combobox>
            <v-textarea v-model="diary.comment" label="Comment" auto-grow rows="3" row-height="15"></v-textarea>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="warning">Cancel</v-btn>
          <v-btn color="primary">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
 import { mapGetters } from 'vuex';

 export default {
  data: () => ({
   severity: [1, 2, 3, 4, 5]
  }),

  props: ['diary'],

  computed: {
   ...mapGetters([
    'medicines',
    'medicineOptions',
    'vitamins',
    'vitaminOptions',
    'nootropics',
    'nootropicOptions',
    'drinks',
    'drinkOptions',
    'tobaccos',
    'tobaccoOptions',
    'bugs',
    'bugOptions',
    'activityOptions'
   ])
  },

  created () {
   this.$store.dispatch('selectMedicines');
   this.$store.dispatch('selectVitamins');
   this.$store.dispatch('selectNootropics');
   this.$store.dispatch('selectDrinks');
   this.$store.dispatch('selectTobaccos');
   this.$store.dispatch('selectBugs');
   this.$store.dispatch('selectActivities');
  },

 };
</script>
<style scoped>
</style>
