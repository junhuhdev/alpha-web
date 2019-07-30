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
    <v-menu left bottom v-for="item in dropdownItems" :key="item.title">
      <template v-slot:activator="{ on }">
        <v-btn text v-on="on">{{item.title}}</v-btn>
      </template>
      <v-list>
        <v-list-item v-for="children in item.children" :key="children.title" @click="() => {}" :to="children.link">
          <v-list-item-title>{{children.title}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <!--    <v-btn text v-for="item in items" :key="item.title" :to="item.link">{{item.title}}</v-btn>-->
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
    {title: 'Diary', link: '/diary', icon: 'home'},
   ],
   dropdownItems: [
    {
     title: 'Directory',
     children: [
      {title: 'Create vitamin', link: '/create-vitamin'},
      {title: 'Create medicine', link: '/create-medicine'},
      {title: 'Create bug', link: '/create-bug'},
     ]
    }
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
