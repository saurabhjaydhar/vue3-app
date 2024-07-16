

// import Vue from "vue";

// import VueRouter from "vue-router";
import { createRouter, createWebHistory } from 'vue-router';
import ProductDetails from "@/views/ProductDetails.vue";
import ProductList from "@/views/ProductList.vue";
import Home from "@/views/Home.vue";


// Vue.use(VueRouter);


const routes=[
  {
    path:'/',
    name:'Home',
    component:Home
  },
  {
    path:'/products',
    name:'ProductList',
    component:ProductList
  },
  {
    path:'/product-details/:id',
    name:'ProductDetails',
    component:ProductDetails
  }
];

const router=
createRouter({
  history: createWebHistory(),
  routes
});
//  new VueRouter({
//   mode:'history',
//   routes

// });
export default router