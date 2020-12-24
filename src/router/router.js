import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import About from '../views/About';
import Login from '../views/Login';
import Profile from '../views/Profile';
import Product from '../views/Product';
import ProductDetails from '../views/ProductDetails.vue';
import Cart from '../views/Cart.vue'


Vue.use(VueRouter);


const routes = [
    {
        path: '/',
        name: "home",
        component: Home,
    },
    {
        path: '/product',
        name: "product",
        component: Product,
    },
    {
        path: '/about',
        name: "about",
        component: About,
    },
    {
        path: '/profile',
        name: "profile",
        component: Profile,
        beforeEnter: (to, from, next) => {
            const auht = sessionStorage.getItem('auth');
            if (auht) {
                next();
            } else {
                next('/login');
            }
        }
    },
    {
        path: '/login',
        name: "login",
        component: Login,
    },
    {
        path: '/product/:id',
        // name : "product",
        component: ProductDetails,
    },
    {
        path: '/cart',
        name: "cart",
        component: Cart,
    }

];



const router = new VueRouter({
    mode: "history",
    routes
});

// router.beforeEach((to, from, next) => {
//     console.log('Hweadsdll');
//     next();
// });
export default router;