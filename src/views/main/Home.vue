<template class="image-style">
  <div class="image-style">
    <v-row align-content="center" class="flex-column">
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
  body, html {
    color: black;
    background-color: black;
  }

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
    /*transform: scale(1.1);*/
  }
</style>
