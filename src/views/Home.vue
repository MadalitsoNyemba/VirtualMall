<template>
<div >
  <div class="header">
    <v-col cols="12" sm="12" md="12">
          <h1 class="text-center headingText">Virtual Mall</h1>
        </v-col>
<v-col cols="12" sm="12" md="12">
          <v-text-field
            placeholder="Search"
            solo
            append-icon="mdi-map-marker"
            
          ></v-text-field>
        </v-col>
  </div>
  <br>
  <v-container>
  <v-sheet
    class="mx-auto"
    max-width="100%"
  >
<v-slide-group center-active >
  <v-slide-item class="space">
  <v-card class="mx-auto" max-width="250">
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    
  </v-card>
  </v-slide-item>
  <v-slide-item class="space">
  <v-card class="mx-auto" max-width="250">
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    
  </v-card>
  </v-slide-item>
  <v-slide-item class="space"> 
   <v-card class="mx-auto" max-width="250">
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    
  </v-card>
  </v-slide-item>
  <v-slide-item class="space">
   <v-card class="mx-auto" max-width="250">
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    
  </v-card>
  </v-slide-item>
  <v-slide-item class="space">
   <v-card class="mx-auto" max-width="250">
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    
  </v-card>
  </v-slide-item>
  <v-slide-item class="space">
   <v-card class="mx-auto" max-width="250">
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    
  </v-card>
  </v-slide-item>
  
</v-slide-group>
  </v-sheet>
<br>
  <h2>Popular this week</h2>

  <v-row>
      <v-col cols="12" md="4" sm="12">
        <v-card class="mx-auto" max-width="100%" to='/products/tri1'>
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    
  </v-card>
      </v-col>
      <v-col cols="12" md="4" sm="12">
        <v-card class="mx-auto" max-width="100%" to='/products/tri2'>
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    
  </v-card>
      </v-col>
      <v-col cols="12" md="4" sm="12">
        <v-card class="mx-auto" max-width="100%" to='/products/tri3'>
    <v-img
      class="white--text align-start"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    
  </v-card>
      </v-col>
      <v-col cols="12" md="4" sm="12">
        <v-card class="mx-auto" max-width="100%" to='/products/tri4'>
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    
  </v-card>
      </v-col>
      <v-col cols="12" md="4" sm="12">
        <v-card class="mx-auto" max-width="100%" to='/products/tri5'>
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    
  </v-card>
      </v-col>
     
    </v-row>

  </v-container>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",

};
</script>

<style scoped >
.header {
 padding: 0;
  margin: 0;
  width: 100%;
  height: 30%;
  background: url('~@/assets/bg2.png');
  background-size: cover;
  border-radius: 0% 0% 30% 30%;
}
.headingText{
  color:white
}
.space{
  padding-right: 20px;
}
.global{
  padding: 10px;
}

</style>
