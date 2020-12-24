<template>
  <div class="container mt-5">
    <div v-if="loading" class="centered spinner-grow text-dark"></div>
    <div class="row">
      <div class="col-md-4" v-for="(p, i) in products" :key="i">
        <div class="card mb-5 p-1 m-1">
          <div class="card-body text-center mb-5">
            <img :src="p.image" alt="" width="200px" height="200px" />
            <h3 class="mb-4">{{ p.title }}</h3>
            <h5>
              Price: <small>${{ p.price }}</small>
            </h5>
          </div>
          <router-link :to="`/product/${p.id}`"
            ><div class="card-footer">
              <button class="btn btn-primary mr-auto btn-block">
                More Details
              </button>
            </div></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "Product.vue",
  data() {
    return {
      loading: true,
      products: [],
    };
  },

  created() {
    axios.get("https://fakestoreapi.com/products/?_limit=10").then((res) => {
      this.products = res.data;
      this.loading = false;
    });
  },
};
</script>

<style>
</style>