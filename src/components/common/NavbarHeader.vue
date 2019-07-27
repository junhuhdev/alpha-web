<template>
  <div>
    <v-toolbar color="white" clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" class="toolbar-title">CATERYOU</router-link>
      </v-toolbar-title>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="item in items" :key="item.title" :to="item.link">{{item.title}}</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute temporary id="drawer" width="200">
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
 export default {

  data: () => ({
   drawer: null,
   items: [
    {title: 'Login', link: '/login', icon: 'home'},
    {title: 'Register', link: '/register', icon: 'home'},
    {title: 'About us', link: '/login', icon: 'home'},
    {title: 'Latest', link: '/login', icon: 'home'},
    {title: 'News', link: '/login', icon: 'home'},
    {title: 'News', link: '/login', icon: 'home'},
    {title: 'News', link: '/login', icon: 'home'},
    {title: 'News', link: '/login', icon: 'home'},
   ]
  })

 };
</script>
