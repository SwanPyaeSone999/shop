<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <a class="navbar-brand" href="#"><h1 class="text-white">Shop</h1></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link class="nav-link text-white" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/product"
              >Product</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/about"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/profile"
              >Profile</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/login"
              >Login</router-link
            >
          </li>
          <li class="nav-item">
            <a href="" class="nav-link text-white" @click="logout()">Logout</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart"
              ><i class="fas fa-shopping-cart text-white fa-2x"></i
              ><span class="badge badge-danger mr-2">{{
                this.$root.cart.length
              }}</span></router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Menubar",
  data() {
    return {
      //     logout1: false,
      cart: [],
    };
  },
  methods: {
    logout() {
      sessionStorage.removeItem("auth");
      this.$router.push("/login");
    },
  },
  created() {
    console.log(this.$root.cart.title);
  },
};
</script>

<style>
</style>