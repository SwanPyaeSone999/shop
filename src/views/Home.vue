<template>
  <div>
    <div class="jumbotron">
      <h1 class="display-4">Hello Shop</h1>
      <p class="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr class="my-4" />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <p class="lead">
        <a @click="go()" class="btn btn-primary btn-lg" href="#" role="button"
          >Learn more</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home.vue",
  methods: {
    go() {
      this.$router.push("/login");
    },
  },
};
</script>

<style>
</style>