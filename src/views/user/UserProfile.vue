<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md6>
      <v-card class="elevation-12">
        <v-card-text>
          <v-form>
            <v-text-field v-model="user.username" label="Username" name="username" type="text"></v-text-field>
            <v-text-field label="First name" name="firstName" type="text"></v-text-field>
            <v-text-field label="Last name" name="lastName" type="text"></v-text-field>
            <v-text-field></v-text-field>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
 import { mapGetters } from 'vuex';

 export default {

  data: () => ({}),

  computed: {
   ...mapGetters([
    'username',
    'user'
   ])
  },

  created () {
   this.$store.dispatch('selectUser', this.username);
  },

  methods: {
   update() {
    
   }
  }

 };
</script>
<style scoped>
</style>
