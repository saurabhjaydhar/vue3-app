
import axios from 'axios';
import {createStore} from 'vuex';

// Vue.use(Vuex);


export const store = createStore({
  state: {
    // Define your state properties here
    count: 0,
    products: [],
    product:{}
  },
  mutations: {
    // Define your mutations here
    increment(state) {
     state.count<0?0: state.count++;
    },
    decrement(state) {
       state.count<=0?0:state.count--;
    },
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_PRODUCT(state, product) {
      state.product = product;
    }
    
  },
  actions: {
    // Define your actions here
    increment({ commit }) {
      commit('increment');
    }
,
    async fetchProducts({commit}){
      try {
        const response = await axios.get('https://dummyjson.com/products').then(res => res.data);
        console.info('response',response)
        commit('SET_PRODUCTS', response.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
  ,
  async fetchProductById({commit},{id}){
    try {
      console.info('product',id);
      // id=2;
      const response = await fetch(`https://dummyjson.com/products/${id}`).then(res => res.json());
      console.info('response',response)
      commit('SET_PRODUCT', response);
    } catch (error) {
      console.error('Error fetching product:', error);
    
  }}
},
  getters: {
    // Define your getters here
    getCount: state => state.count,
    products: state => state.products,
    product: state => state.product
  }
  
});

