import Vue from 'vue'
import App from './App.vue'
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router/router';

Vue.config.productionTip = false

new Vue({
  data() {
    return {
      cart: [],
    }
  },
  router,
  render: h => h(App),
}).$mount('#app')
