<template>
<v-container>
  <v-alert border="left" close-text="close" color="green accent-4" dark dismissible v-if="this.$route.params.message">
    {{this.$route.params.message}}
  </v-alert>
  <v-row no-gutters>
    <v-col sm = "4" class= "pa-3" v-for="topic in topics" :key="topic._id">
      <v-card class="pa-1" :to="{name:'topic', params:{id: topic._id}}">
        <v-img height ="250" :src="`/${topic.photo}`"></v-img>

        <v-btn class="ml-4 mt-3" small outlined color="indigo">
          {{topic.category}}

        </v-btn>
        <v-card-title class="headline">
          {{topic.title}}

        </v-card-title>
        <v-card-text class="py-0">
          <p> {{topic.description.substring(0,100) +"..."}}</p>

        </v-card-text>
      </v-card>
    </v-col>
  </v-row>

</v-container>
</template>

<script>
import API from "../api";
  export default {
    name: 'Home',
    data(){
      return{
        topics:[]
      };
    },
    async created(){
      this.topics = await API.getAllTopics();
    }
   
}

  
</script>
