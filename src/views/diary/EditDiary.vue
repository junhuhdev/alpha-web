<template>
  <v-card>
    <v-card-title>
      <span class="headline">{{formTitle}}</span>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex xs12 sm6 md4>
            <v-text-field v-model="editedItem.totalSleepHours" label="totalSleepHours"></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md4>
            <v-text-field v-model="editedItem.sharpness" label="Sharpness"></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text>Cancel</v-btn>
      <v-btn color="blue darken-1" text>Save</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
 export default {
  props: ['editedItem', 'formTitle']
 };
</script>
<style scoped>
</style>
