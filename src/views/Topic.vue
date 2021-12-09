<template>
  <v-container>
      <v-row no-gutters>
          <v-col sm="10" class="pa-4 mx-auto">
              <v-card class="pa-2">
                  <v-img height ="350" :src="`/${topic.photo}`"></v-img>
                  <v-card-actions class="pb-0">
                      <v-row class="mt-1 mx-1">
                          <v-col sm="10">
                              <v-btn class="ml-4 mt-3" small outlined color="primary">
                                  {{topic.category}}
                              </v-btn>
                          </v-col>
                          <v-col sm="10" class="d-flex justify-end">
                              <v-btn color="success"  :to="{name:'edit-topic', params:{id: topic._id}}" text>Edit</v-btn>
                              <v-btn color="red" @click="removeTopic(topic._id)" text>Delete</v-btn>

                          </v-col>
                      </v-row>

                  </v-card-actions>
                  <v-card-subtitle class="headline">
                      <h3>{{topic.title}}</h3>
                  </v-card-subtitle>
                  <v-card-text class="grey--text">
                     <p> {{topic.description}}</p>
                     <p> Topic Posted on - {{topic.created.substring(0,7)}}</p>
                  </v-card-text>

              </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>
<script>
    import API from "../api";

export default {
    name:'Topic',
    data(){
        return{
            topic: {},            
        };
    },
    async created(){
        const response = await API.getTopicById(this.$route.params.id);
        this.topic = response;
    
    },
    methods:{
        async removeTopic(id){
            let al = confirm("Press OK to delete the topic");
            if(al){
            const response = await API.deleteTopic(id);
            this.$router.push({name:'home', params:{message: response.message}});
            }
        }
    }
}
</script>
