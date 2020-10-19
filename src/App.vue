<template>
 
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <v-bottom-navigation app grow >
    <v-btn to="/">
      <span>Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn to="/cart">
      <span>Cart (2)</span>
      <v-icon>mdi-cart</v-icon>
    </v-btn>

    <v-btn to="/favorites">
      <span>Favorites</span>
      <v-icon>mdi-heart</v-icon>
    </v-btn>
  </v-bottom-navigation>
  </v-app>
</template>

<script>

export default {
  name: "App",


  data: () => ({
    //
  })
};
</script>
