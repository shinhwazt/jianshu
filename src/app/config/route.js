import VueRouter from "vue-router"
import home from "../components/home/home.vue"
import explor from "../components/explor/explor.vue"
import message from "../components/message/message.vue"
import person from "../components/person/person.vue"
const routes = [{
    path: "/home",
    component: home
  },
  {
    path: '/explor',
    component: explor
  },
  {
    path: '/message',
    component: message
  },
  {
    path: '/person',
    component: person
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
