<template>
  <div class="container mt-5">
    <div v-if="loading" class="centered spinner-grow text-dark"></div>
    <div v-else class="row">
      <div class="col-md-4">
        <img :src="product.image" alt="" width="300px" height="300px" />
      </div>
      <div class="col-md-8">
        <h1>{{ product.title }}</h1>
        <br />
        <br />
        <h4>${{ product.price }}</h4>
        <br />
        <h5>{{ product.description }}</h5>
        <div class="d-flex justify-content-between mt-5">
          <router-link to="/product"
            ><button class="btn btn-outline-dark">Go Back</button></router-link
          >
          <button @click="addToCart(product)" class="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ProductDetails",
  data() {
    return {
      loading: false,
      product: [],
    };
  },
  created() {
    this.loading = true;
    axios
      .get(`https://fakestoreapi.com/products/${this.$route.params.id}`)
      .then((res) => {
        this.product = res.data;
        this.loading = false;
      });
  },
  methods: {
    addToCart(product) {
      let cart = this.$root.cart;
      let isincart = cart.find((v) => {
        return v.title == product.title;
      });
      if (isincart) {
        isincart.qty++;
      } else {
        cart.push({ ...product, qty: 1 });
      }
    },
  },
};
</script>

<style>
.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  /* transform: translate(-50%, -50%); */
}
</style>