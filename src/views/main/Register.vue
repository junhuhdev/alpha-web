<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Create user</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field label="Email" name="email" prepend-icon="mdi-email" type="text"></v-text-field>
            <v-text-field label="Password" name="password" prepend-icon="mdi-lock" type="password"></v-text-field>
            <v-text-field label="First name" name="firstname" prepend-icon="mdi-account" type="text"></v-text-field>
            <v-text-field label="Last name" name="lastname" prepend-icon="mdi-account" type="text"></v-text-field>
            <v-select :items="gender" label="Gender" prepend-icon="mdi-account" type="text"></v-select>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary">Create</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
 export default {

  data: () => ({
   gender: ['MALE', 'FEMALE']
  })

 };
</script>
<style scoped>
</style>
