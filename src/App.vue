<template> 
  <v-app id="inspire" >
    <v-navigation-drawer
      v-model="drawer"
      app color="brown lighten-4"
    >
      <v-list-item>
      <v-list-item-content>
        <v-list-item-title id="listTitle" >
          KiwiByte
        </v-list-item-title>
        <v-list-item-subtitle id="listsub" >
          A Technology blog
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider>
    </v-divider>
    <v-list dense>
      <v-list-item-group
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i" :to="item.link" link
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon" color="brown darken-3"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="brown lighten-5">
      <v-app-bar-nav-icon @click="drawer = !drawer" id="toolTitle"  ></v-app-bar-nav-icon>

      <v-toolbar-title id="toolTitle" >KiwiByte</v-toolbar-title>
    </v-app-bar>

    <v-main>
<router-view>
  </router-view>  
    </v-main>
  </v-app>
</template>
<style scoped>
#inspire{
  background-color: #ECEFF1;
}
#toolTitle{
  color: #3E2723;
  font-weight: 500;
}
#listTitle{
  color:#880E4F;
  
}
#listsub{
  color:#B71C1C;
}
</style>

<script>
  export default {
    data: () => ({ drawer: null ,
    items: [
        { title: 'Home', icon: 'mdi-home', link:"/home"  },
        { title: 'Add Topic', icon: 'mdi-clipboard-edit', link:"/add-topic" },
        { title: 'About Me', icon: 'mdi-badge-account-horizontal', link:"/about" },
        
      ],}),
  }
</script>
