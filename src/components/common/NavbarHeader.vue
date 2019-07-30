<template>
  <v-app-bar app dense color="deep-purple accent-4" dark>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <div class="mr-5">
      <v-toolbar-title>
        <router-link to="/" class="toolbar-title">Heartbeat</router-link>
      </v-toolbar-title>
    </div>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn text v-for="item in items" :key="item.title" :to="item.link">{{item.title}}</v-btn>
    </v-toolbar-items>
    <v-menu v-for="item in dropdownItems" :key="item.title">
      <template v-slot:activator="{ on }">
        <v-btn text v-on="on">{{item.title}}</v-btn>
      </template>
      <v-list>
        <v-list-item v-for="children in item.children" :key="children.title" @click="() => {}" :to="children.link">
          <v-list-item-title>{{children.title}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-menu left bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="dropdownIcon in dropdownIcons" :key="dropdownIcon.title" @click="() => {}" :to="dropdownIcon.link">
          <v-list-item-title>{{dropdownIcon.title}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script>
 export default {

  data: () => ({
   drawer: null,
   items: [
    {title: 'Login', link: '/login', icon: 'home'},
    {title: 'Register', link: '/register', icon: 'home'},
    {title: 'User', link: '/user', icon: 'home'},
    {title: 'Dashboard', link: '/dashboard', icon: 'home'},
   ],
   dropdownItems: [
    {
     title: 'Diary',
     children: [
      {title: 'My diary', link: '/diary'},
      {title: 'My stack', link: '/stack'},
      {title: 'Create diary', link: '/create-diary'},
      {title: 'Create food diary', link: '/create-food-diary'},
      {title: 'Create stack', link: '/create-stack'},
     ]
    },
    {
     title: 'Directory',
     children: [
      {title: 'All vitamins', link: '/vitamin'},
      {title: 'All medicines', link: '/medicine'},
      {title: 'All bugs', link: '/bug'},
      {title: 'Create vitamin', link: '/create-vitamin'},
      {title: 'Create medicine', link: '/create-medicine'},
      {title: 'Create bug', link: '/create-bug'},
     ]
    }
   ],
   dropdownIcons: [
    {title: 'Settings', link: '/settings'},
    {title: 'Profile', link: '/profile'},
    {title: 'Logout', link: '/logout'},
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
