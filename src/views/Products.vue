<template>
<div class="glob">
  <div class="productHeader">
    <v-container>
       
    <v-layout row wrap >
      <v-layout justify-start>
        <div>
          <v-btn text to="/" class="btn">
      <v-icon>mdi-heart</v-icon>
    </v-btn>
        </div>
    </v-layout>
    <v-layout justify-end>
        <div>
          <v-btn text to="/" class="btn">
      <v-icon>mdi-heart</v-icon>
    </v-btn>
        </div>
    </v-layout>
    </v-layout>
    </v-container>
  </div>
  <div class="productDetails">
      <v-container>
        <v-row>
          <v-col  md="8">
        <h2>Produt name</h2>

          </v-col >
          <v-col  md="4">
        <h3 class="price">MWK 12,000</h3>

          </v-col >
        </v-row>
        <h4><b>Shop:</b> game</h4>
        <h4><b>Shop:</b> game</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus sed repellendus odit ipsa debitis consequuntur quibusdam ratione, dolore neque similique molestiae aperiam quo, commodi itaque blanditiis sapiente, recusandae aliquid tempore hic non deserunt! Id inventore nobis iste, nisi consequuntur dignissimos hic delectus doloribus dicta. Illum, itaque ipsa. Possimus, eos tempora?
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus sed repellendus odit ipsa debitis consequuntur quibusdam ratione, dolore neque similique molestiae aperiam quo, commodi itaque blanditiis sapiente, recusandae aliquid tempore hic non deserunt! Id inventore nobis iste, nisi consequuntur dignissimos hic delectus doloribus dicta. Illum, itaque ipsa. Possimus, eos tempora?

          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus sed repellendus odit ipsa debitis consequuntur quibusdam ratione, dolore neque similique molestiae aperiam quo, commodi itaque blanditiis sapiente, recusandae aliquid tempore hic non deserunt! Id inventore nobis iste, nisi consequuntur dignissimos hic delectus doloribus dicta. Illum, itaque ipsa. Possimus, eos tempora?

        </p>
        <br>
        <br>
       
      </v-container>
  </div>
</div>
</template>
<script>

export default {
  name: "Products",
 
 
};
</script>

<style scoped >
.glob{
  height: 100%;
}
.productHeader {
 padding: 0;
  margin: 0;
  width: 100%;
  height: 50%;
  background: url('https://cdn.vuetifyjs.com/images/cards/docks.jpg');
  background-size: cover;
  /* border-radius: 0% 0% 30% 30%; */
}
.productDetails {
 padding: 0;
  margin-top: -15%;
  border-radius: 10% 10% 0% 0%;
  background-color: white;
  height: 100%;
}
.price{
  background-color: rgb(255, 165, 0,0.3);
  border-radius: 10%;
  text-align: center;
  color: orange;
}
.btn{
  background-color: rgb(255, 165, 0,0.3);
  border-radius: 100%;
  text-align: center;
}
</style>
