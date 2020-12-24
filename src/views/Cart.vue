<template>
  <div class="container mt-5">
    <div v-if="loading" class="centered spinner-grow text-dark"></div>
    <table v-else class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Photo</th>
          <th>Price</th>
          <th>Qty</th>
          <th>+ -</th>
          <th>Total</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(p, i) in cart" :key="i">
          <th>{{ p.title }}</th>
          <th><img :src="p.image" alt="" width="100px" height="100px" /></th>
          <th>${{ p.price }}</th>
          <th>{{ p.qty }}</th>
          <th>
            <button @click="increase(p)" class="btn btn-succes btn-sm">
              +
            </button>
            <br />
            <button @click="decrease(p)" class="btn btn-danger btn-sm">
              -
            </button>
          </th>
          <th>
            {{ p.price * p.qty }}
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      cart: [],
      loading: false,
    };
  },
  methods: {
    increase(p) {
      p.qty++;
    },
    decrease(p) {
      p.qty--;
    },
  },
  created() {
    this.loading = true;
    if (this.$root.cart) {
      this.cart = this.$root.cart;
    }
    this.loading = false;
  },
};
</script>

<style>
</style>