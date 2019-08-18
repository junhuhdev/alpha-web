<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Create user</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field v-model="email" label="Email" name="email" prepend-icon="mdi-email" type="text"></v-text-field>
            <v-text-field v-model="firstName" label="First name" name="firstName" prepend-icon="mdi-account" type="text"></v-text-field>
            <v-text-field v-model="lastName" label="Last name" name="lastName" prepend-icon="mdi-account" type="text"></v-text-field>
            <v-combobox v-model="selectedGender" :items="gender" label="Gender" prepend-icon="mdi-account" chips></v-combobox>
            <v-text-field v-model="password" label="Password" name="password" prepend-icon="mdi-lock" type="password"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="register" color="primary">Create</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
 export default {
  data: () => ({
   email: '',
   firstName: '',
   lastName: '',
   gender: ['MALE', 'FEMALE'],
   selectedGender: '',
   password: '',
  }),

  methods: {
   register () {
    const user = {
     username: this.email,
     firstName: this.firstName,
     lastName: this.lastName,
     gender: this.selectedGender,
     password: this.password
    };
    this.$store.dispatch('insertUser', user)
     .then(() => this.$router.push('/'));
   }
  }

 };
</script>
<style scoped>
</style>
