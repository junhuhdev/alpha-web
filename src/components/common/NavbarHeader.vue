<template>
  <v-app-bar color="deep-purple accent-4" dark>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>Alpha</v-toolbar-title>
    <v-spacer></v-spacer>

  </v-app-bar>
</template>
<script>
 export default {

  data: () => ({
   drawer: null,
   items: [
    {title: 'News', link: '/login', icon: 'home'},
    {title: 'Latest', link: '/login', icon: 'home'},
    {title: 'Login', link: '/login', icon: 'home'},
    {title: 'Register', link: '/register', icon: 'home'},
    {title: 'About us', link: '/login', icon: 'home'},
   ]
  })

 };
</script>
