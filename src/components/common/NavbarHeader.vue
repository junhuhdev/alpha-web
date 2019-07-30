<template>
  <v-app-bar app color="deep-purple accent-4" dark>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>
      <router-link to="/" class="toolbar-title">Heartbeat</router-link>
    </v-toolbar-title>
    <v-btn text v-for="item in items" :key="item.title" :to="item.link">{{item.title}}</v-btn>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>
<script>
 export default {

  data: () => ({
   drawer: null,
   items: [
    {title: 'Login', link: '/login', icon: 'home'},
    {title: 'Register', link: '/register', icon: 'home'},
    {title: 'Dashboard', link: '/dashboard', icon: 'home'},
    {title: 'Diary', link: '/diary', icon: 'home'},
    {title: 'User', link: '/user', icon: 'home'},
   ]
  })

 };
</script>
<style scoped>
  .toolbar-title {
    color: white;
    text-decoration: none;
  }
</style>
