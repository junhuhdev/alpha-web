<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Create diary</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field v-model="selectedSleepHours" label="Total sleep hours" name="sleep" type="number"></v-text-field>
            <v-select v-model="selectedSharpness" :items="severity" label="Sharpness" type="text"></v-select>
            <v-select v-model="selectedMood" :items="severity" label="Mood" type="text"></v-select>
            <v-select v-model="selectedEnergy" :items="severity" label="Energy" type="text"></v-select>
            <v-select v-model="selectedProductivity" :items="severity" label="Productivity" type="text"></v-select>
            <v-combobox v-model="selectedMedicines" :items="medicineOptions" label="Medicines" multiple chips></v-combobox>
            <v-combobox v-model="selectedVitamins" :items="vitaminOptions" label="Vitamins" multiple chips></v-combobox>
            <v-combobox v-model="selectedNootropics" :items="nootropicOptions" label="Nootropics" multiple chips></v-combobox>
            <v-combobox v-model="selectedDrinks" :items="drinkOptions" label="Drinks" multiple chips></v-combobox>
            <v-combobox v-model="selectedTobaccos" :items="tobaccoOptions" label="Tobaccos" multiple chips></v-combobox>
            <v-combobox v-model="selectedBugs" :items="bugOptions" label="Bugs" multiple chips></v-combobox>
            <v-combobox v-model="selectedActivities" :items="activityOptions" label="Activities" multiple chips></v-combobox>
            <v-textarea v-model="comment" label="Comment" auto-grow rows="3" row-height="15"></v-textarea>
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
 import { mapGetters } from 'vuex';

 export default {
  data: () => ({
   selectedSleepHours: 0,
   selectedSharpness: 0,
   selectedMood: 0,
   selectedEnergy: 0,
   selectedProductivity: 0,
   selectedMedicines: [],
   selectedVitamins: [],
   selectedNootropics: [],
   selectedDrinks: [],
   selectedTobaccos: [],
   selectedBugs: [],
   selectedActivities: [],
   comment: '',
   severity: [1, 2, 3, 4, 5]
  }),

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

  methods: {

   create () {
    const selectedMedicines = [];
    this.medicines.map(medicine => {
     const found = this.$data.selectedMedicines.find(e => e === medicine.name);
     if (found) {
      selectedMedicines.push(medicine);
     }
    });

    const selectedVitamins = [];
    this.vitamins.map(vitamin => {
     const found = this.$data.selectedVitamins.find(e => e === vitamin.name);
     if (found) {
      selectedVitamins.push(vitamin);
     }
    });

    const selectedNootropics = [];
    this.nootropics.map(nootropic => {
     const found = this.$data.selectedNootropics.find(e => e === nootropic.name);
     if (found) {
      selectedNootropics.push(nootropic);
     }
    });

    const selectedDrinks = [];
    this.drinks.map(drink => {
     const found = this.$data.selectedDrinks.find(e => e === drink.name);
     if (found) {
      selectedDrinks.push(drink);
     }
    });

    const selectedTobaccos = [];
    this.tobaccos.map(tobacco => {
     const found = this.$data.selectedTobaccos.find(e => e === tobacco.name);
     if (found) {
      selectedTobaccos.push(tobacco);
     }
    });

    const selectedBugs = [];
    this.bugs.map(bug => {
     const found = this.$data.selectedBugs.find(e => e === bug.name);
     if (found) {
      selectedBugs.push(bug);
     }
    });

    const payload = {
     totalSleepHours: this.$data.selectedSleepHours,
     sharpness: this.$data.selectedSharpness,
     mood: this.$data.selectedMood,
     energy: this.$data.selectedEnergy,
     productivity: this.$data.selectedProductivity,
     medicines: selectedMedicines,
     vitamins: selectedVitamins,
     nootropics: selectedNootropics,
     drinks: selectedDrinks,
     tobaccos: selectedTobaccos,
     bugs: selectedBugs,
     activities: this.$data.selectedActivities,
     comment: this.$data.comment
    };

    this.$store.dispatch('insertDiary', payload);

   }
  }
 };
</script>
<style scoped>
</style>
