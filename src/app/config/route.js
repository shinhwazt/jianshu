import VueRouter from "vue-router"
import home from "../components/home/home.vue"
import explor from "../components/explor/explor.vue"
const routes = [{
    path: "/home",
    component: home
  },
  {
    path: '/explor',
    component: explor
  },
  {
    path: '/',
    redirect: '/home'
  },


];
const router = new VueRouter({
  routes,
  
});
export default router;
