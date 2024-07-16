<template>
<div>
  <h1>Product Details</h1>
   
     <p>Title: {{ product.title }}</p>
     <p>Description: {{ product.description }}</p>
     <p>Category:{{ product.category }}</p>
     <p>Email: {{ product.reviewerEmail||"N/A" }}</p>
</div>
</template>
<script>
export default {

  name: 'ProductDetails',
  
  created() {
    this.$store.dispatch('fetchProductById',{id:this.$route.params.id});
  },
  components: {
    
   
  },
  computed: {
    productId() {
      return this.$route.params.id;
    },
  
 
  product() {
      return this.$store.getters.product;
    }
  
}}

</script>


