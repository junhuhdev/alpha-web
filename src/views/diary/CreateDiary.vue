<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Create diary</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field label="Total sleep hours" name="sleep" type="number"></v-text-field>
            <v-select :items="severity" label="Sharpness" type="text"></v-select>
            <v-select :items="severity" label="Mood" type="text"></v-select>
            <v-select :items="severity" label="Energy" type="text"></v-select>
            <v-select :items="severity" label="Productivity" type="text"></v-select>
            <v-combobox :items="medicineOptions" label="Medicines" multiple chips></v-combobox>
            <v-combobox :items="vitaminOptions" label="Vitamins" multiple chips></v-combobox>
            <v-combobox :items="nootropicOptions" label="Nootropics" multiple chips></v-combobox>
            <v-combobox :items="drinkOptions" label="Drinks" multiple chips></v-combobox>
            <v-combobox :items="tobaccoOptions" label="Tobaccos" multiple chips></v-combobox>
            <v-combobox :items="bugOptions" label="Bugs" multiple chips></v-combobox>
            <v-combobox :items="activityOptions" label="Activities" multiple chips></v-combobox>
            <v-textarea label="Comment" auto-grow rows="3" row-height="15"></v-textarea>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="create" color="primary">Create</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
 export default {
  data: () => ({
   severity: [1, 2, 3, 4, 5]
  }),

  computed: {
   medicines () {
    return this.$store.getters.medicines;
   },
   medicineOptions () {
    return this.$store.getters.medicineOptions;
   },
   vitamins () {
    return this.$store.getters.vitamins;
   },
   vitaminOptions () {
    return this.$store.getters.vitaminOptions;
   },
   nootropics () {
    return this.$store.getters.nootropics;
   },
   nootropicOptions () {
    return this.$store.getters.nootropicOptions;
   },
   drinks () {
    return this.$store.getters.drinks;
   },
   drinkOptions () {
    return this.$store.getters.drinkOptions;
   },
   tobaccos () {
    return this.$store.getters.tobaccos;
   },
   tobaccoOptions () {
    return this.$store.getters.tobaccoOptions;
   },
   bugs () {
    return this.$store.getters.bugs;
   },
   bugOptions () {
    return this.$store.getters.bugOptions;
   },
   activityOptions () {
    return this.$store.getters.activityOptions;
   }
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

  methods: {
   create () {
    this.$store.dispatch('insertDiary');

   }
  }
 };
</script>
<style scoped>
</style>
