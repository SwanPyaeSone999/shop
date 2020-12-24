<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="card">
          <div v-if="show" class="alert alert-danger" role="alert">
            {{ msg }}
          </div>
          <div class="card-header"><h2>Login</h2></div>
          <div class="card-body">
            <form method="get">
              <label for="">Email</label>
              <input v-model="email" type="email" class="form-control" />
              <label for="">Password</label>
              <input v-model="password" type="password" class="form-control" />
            </form>
            <button @click="login()" type="submit" class="btn btn-primary mt-3">
              Login
            </button>
          </div>
          <div class="card-footer">
            <small class="text-center"
              >Do you have account?<span
                ><a href="">Register here</a></span
              ></small
            >
            <div class="text-center">
              Email: admin
              <br />
              Password : 12345
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login.vue",
  data() {
    return {
      email: "",
      password: "",
      msg: "",
      show: false,
    };
  },
  methods: {
    login() {
      this.show = true;
      if (this.email == "admin" && this.password == "12345") {
        sessionStorage.setItem("auth", this.email);
        this.$router.push("/profile");
      } else {
        this.msg = "Email and Password is incorrect";
      }
    },
  },
};
</script>

<style>
</style>