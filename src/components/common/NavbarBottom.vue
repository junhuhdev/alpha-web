<template>
  <v-bottom-navigation>
    <v-btn v-for="item in items" :key="item.title" :value="item.title">
      <span>{{item.title}}</span>
      <v-icon>{{item.icon}}</v-icon>
    </v-btn>

<!--    <v-btn value="recent">-->
<!--      <span>Recent</span>-->
<!--      <v-icon>history</v-icon>-->
<!--    </v-btn>-->
  </v-bottom-navigation>
</template>
<script>
 export default {

  data: () => ({
   bottomNav: 'recent',
   items: [
    {title: 'Feed', link: '/login', icon: 'history'},
    {title: 'Matches', link: '/login', icon: 'favorite'},
    {title: 'Nearby', link: '/login', icon: 'place'},
   ]
  })

 };
</script>
<style scoped>
</style>
