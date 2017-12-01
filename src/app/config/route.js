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
const profile = () => import("../components/profile/profile.vue")
const recommendFollow = () => import("../components/recommendFollow/follow.vue")
const search = () => import("../components/common/search.vue")
const topicDetails = () => import("../components/topicDetails/topicDetails.vue")

const topicDetailsComment = () => import("../components/topicDetails/comment.vue")
const topicDetailsPublic = () => import("../components/topicDetails/public.vue")
const topicDetailsHot = () => import("../components/topicDetails/hot.vue")


const routes = [{
    path: "/home",
    component: home
  },
  {
    path: '/recommendFollow',
    component: recommendFollow
  },
  {
    path: '/topicDetails/:id',
    component: topicDetails,
    children: [
        {
          path: 'comment',
          component: topicDetailsComment
        },
        {
          path: 'public',
          component: topicDetailsPublic
        },
        {
          path: 'hot',
          component: topicDetailsHot
        },
        {
          path: '/',
          redirect: 'comment'
        },
    ]
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
    path: '/profile',
    component: profile
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
  mode: 'history',
  routes,

});
export default router;
