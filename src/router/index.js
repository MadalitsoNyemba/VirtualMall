import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/cart",
    name: "Cart",
    // route level code-splitting
    // this generates a separate chunk (cart.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "cart" */ "../views/Cart.vue")
  },
  {
    path: "/favorites",
    name: "Favorites",
  
    component: () =>
      import(/* webpackChunkName: "cart" */ "../views/Favorites.vue")
  }
  ,
  {
    path: "/products/:slug",
    name: "Products",
  
    component: () =>
      import(/* webpackChunkName: "cart" */ "../views/Products.vue")
  }
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
