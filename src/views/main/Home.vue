<template>
  <div class="image-style">
    <v-row align-content="center" class="flex-column mt-12">
      <h1>Welcome to STEM</h1>
    </v-row>
  </div>
</template>
<script>
 export default {
  data: () => ({}),

  computed: {
   getSleepData () {
    return this.$store.getters.sleep;
   }
  },

  created () {
  },

  methods: {
   getSleep () {
    this.$store.dispatch('selectSleep');
   },

  }

 };
</script>
<style scoped>
  h1 {
    color: white;
  }

  .image-style {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: #ffffff url("../../assets/background-image.jpg") no-repeat center center;
    background-size: cover;
  }
</style>
