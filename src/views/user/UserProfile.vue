<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md6>
      <v-card class="elevation-12">
        <v-card-text>
          <v-form>
            <v-text-field readonly disabled v-model="user.username" label="Username" name="username" type="text"></v-text-field>
            <v-text-field v-model="user.firstName" label="First name" name="firstName" type="text"></v-text-field>
            <v-text-field v-model="user.lastName" label="Last name" name="lastName" type="text"></v-text-field>
            <v-select v-model="user.gender" :items="gender" label="Gender" type="text"></v-select>
            <v-text-field v-model="user.height" label="Height (cm)" name="height" type="number"></v-text-field>
            <v-text-field v-model="user.weight" label="Weight (kg)" name="weight" type="number"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="update" color="primary">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
 import { mapGetters } from 'vuex';

 export default {

  data: () => ({
   gender: ['MALE', 'FEMALE']

  }),

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
   update () {

    this.$store.dispatch('updateUser', this.user)
     .then(() => this.$router.push('/user'));
   }
  }

 };
</script>
<style scoped>
</style>
