<template>
   <div> <ul>
   
      <li v-for="product in products" :key="product.id" className="ma-20">  
        <v-row>
          <v-col>
            
           <router-link :to="{ name: 'ProductDetails', params: { id: product.id }}">
          <div>{{ product.title }}</div>
        </router-link>
            <div class="text-black">Description : {{ product.description }}</div> 

          </v-col>
        </v-row>
        
      </li>
    </ul></div>
   
</template>
<script>

export default {
  name: 'ProductList',
  components: {
    
   
  }, created() {
    this.$store.dispatch('fetchProducts');
  },
  computed: {
    products() {
      return this.$store.getters.products;
    }},
    methods:{
      goToDetails(id) {
      this.$router.push({ name: 'ProductDetails', params: { id } });
    }
    }
}

</script>


