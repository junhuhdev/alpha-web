<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Login user</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form @submit.prevent="login">
            <v-text-field v-model="username" label="Login" name="login" prepend-icon="mdi-account" type="text"></v-text-field>
            <v-text-field v-model="password" label="Password" name="password" prepend-icon="mdi-lock" type="password"></v-text-field>
            <v-btn type="submit" color="primary">Login</v-btn>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
 export default {
  data: () => ({
   username: '',
   password: ''
  }),

  methods: {
   login () {
    const {username, password} = this;
    this.$store.dispatch('login', {username, password})
     .then(() => this.$router.push(this.$route.query.redirect || '/'))
     .catch(error => console.log('Could not redirect ', error));
   }
  }
 };
</script>
<style scoped>
</style>
