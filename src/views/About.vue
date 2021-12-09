<template>
  <v-container>

    <v-row no-gutters>
      <v-col xs="10" class="mx-auto"  >
        <v-card max-width="300" class="justify-center">  
          <v-layout align-center>
          <img  class="pl-15 pr-15 pt-10 pb-5 " height ="250" width="320" :src="myImage" />
            
            </v-layout>        
          <v-card-text class="black--text"> <p class="font-weight-bold pl-5 font-weight-black"> Charitha Sree Jayaramireddy</p>
          <p class="pl-5"> MS in CS, University of New Haven<br>
          Research Assistant, UNH<br>
          charithareddy13@gmail.com<br>
          <a href="https://www.linkedin.com/in/charitha-sree-jayaramireddy-851237163/" style="text-decoration: none">
          <v-icon large color=" indigo" class="pl-10 pt-3">
      mdi-linkedin
    </v-icon>
          </a>&emsp;
          
          <a href="https://github.com/Charitha13/" style="text-decoration: none"><v-icon large color="black" class="pl-5 pt-3">
      mdi-github
    </v-icon>  </a>
          </p></v-card-text>
          <v-card-text></v-card-text>


        </v-card>
        
      </v-col>
    </v-row>
  </v-container>

</template>
<script>
import myImage from "../myimage/myimage3.png"

export default {
 data () {
        return {
            myImage: myImage
        }
  }
  
}
</script>
