<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="mx-auto">
                <v-card class="pa-5">
                    <v-card-title>Add New Topic</v-card-title>
                    <v-divider></v-divider>
                    <v-form ref="form"  @submit.prevent="submitForm" class="pa-5" enctype="multipart/form-data">
                    <v-text-field label="Title" v-model="topic.title" prepend-icon="mdi-note" :rules="rules"></v-text-field>
                    <v-text-field label="Category" v-model="topic.category" prepend-icon="mdi-view-list" :rules="rules"></v-text-field>
                    <v-textarea label="Description" v-model="topic.description" prepend-icon="mdi-note-plus" :rules="rules"></v-textarea>
                    <v-file-input @change="selectFile" :rules="rules" show-size counter multiple label="select image"></v-file-input>
                    <v-btn type="submit" class="mt-3" color="primary"> Add Topic</v-btn>


                    </v-form>
                </v-card>
            </v-col>
        </v-row>

    </v-container>
</template>
<script>
import API from "../api";

export default {
    data() {
        return{
            rules:[(value) =>!!value || "This field is required!"],
            topic:{
                title:"",
                category:"",
                description:"",
                photo:""
            },
            photo:"",            
        };        
    },
    methods:{
        selectFile(file){
            this.photo = file[0];
        },
        async submitForm(){
            const formData = new FormData();
            formData.append('photo', this.photo);
            formData.append('title', this.topic.title);
            formData.append('category', this.topic.category);
            formData.append('description', this.topic.description);
            if(this.$refs.form.validate()){
                const response = await API.addTopic(formData);
                this.$router.push({name: 'home', params:{message: response.message}});
            }



        }
    }
}
</script>
