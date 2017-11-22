import VueRouter from "vue-router"
/*
import home from "../components/home/home.vue"
import explor from "../components/explor/explor.vue"
import message from "../components/message/message.vue"
import person from "../components/person/person.vue"
import recommendFollow from "../components/recommendFollow/follow.vue"
import search from "../components/common/search.vue"*/


const home = () => import("../components/home/home.vue")
const explor = () => import("../components/explor/explor.vue")
const message = () => import("../components/message/message.vue")
const person = () => import("../components/person/person.vue")
const recommendFollow = () => import("../components/recommendFollow/follow.vue")
const search = () => import("../components/common/search.vue")


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
    path: '/search',
    component: search
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
