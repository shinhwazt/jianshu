import VueRouter from "vue-router"
import home from "../components/home/home.vue"
import explor from "../components/explor/explor.vue"
import message from "../components/message/message.vue"
import person from "../components/person/person.vue"
import recommendFollow from "../components/recommendFollow/follow.vue"
const routes = [{
    path: "/home",
    component: home
  },
  {
    path: '/recommendFollow',
    component: recommendFollow
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
