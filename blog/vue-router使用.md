# VueRouter使用
vue-router需要两个基本的组件<router-link>和<router-view>
```
import VueRouter from "vue-router"
const home = () => import("../components/home/home.vue")
const explor = () => import("../components/explor/explor.vue")
const message = () => import("../components/message/message.vue")
const person = () => import("../components/person/person.vue")
const recommendFollow = () => import("../components/recommendFollow/follow.vue")
const search = () => import("../components/common/search.vue")
const topicDetails = () => import("../components/topicDetails/topicDetails.vue")
const topicDetailsComment = () => import("../components/topicDetails/comment.vue")
const topicDetailsPublic = () => import("../components/topicDetails/public.vue")
const topicDetailsHot = () => import("../components/topicDetails/hot.vue")


const routes = [
  {
    path: "/home",
    component: home
  },
  {
    path: '/recommendFollow',
    component: recommendFollow
  },
  {
    path: '/topicDetails',
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
```
