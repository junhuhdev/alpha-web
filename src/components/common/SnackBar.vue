<template>
  <div class="text-center ma-2">
    <v-snackbar v-model="show" multi-line>
      Path: {{snackText.path}} <br><br>
      Status: {{snackText.status}} <br><br>
      Message: {{snackText.message}}
      <v-btn color="pink" text @click="show = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>
<script>
 import { mapGetters } from 'vuex';

 export default {
  data: () => ({
   show: false
  }),

  computed: {
   ...mapGetters([
    'snackText',
   ])
  },

  watch: {
   snackText (val) {
    if (val !== '') {
     this.show = true;
    }
   },
   show (val) {
    if (!val) {
     this.$store.dispatch('insertSnack', '');
    }
   }
  },

  methods: {
   close () {
    this.$store.dispatch('deleteSnack');
   }
  }
 };
</script>
<style scoped>
</style>
