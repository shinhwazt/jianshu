# VueRouter基本使用

vue-router需要两个基本的组件\<router-link\>和\<router-view\>

基本使用步骤为：
1.导入基本组件(import componentX from "xx/xx.vue")
2.制定路由匹配规则({path:"/xx",component:componentX})
3.实例化路由(new VueRouter())
4.绑定到vue实例(new Vue({router:routerX}))

```js
import VueRouter from "vue-router"
//导入基本组件
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
//制定路由匹配规则
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
//实例化路由
const router = new VueRouter({
  routes,
});
export default router;
```
//绑定到vue实例
```js
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
new Vue({
  el:"#app",
  components:{
    vFooter:vFooter,
    vHome:vHome,
  },
  router,
  store,
})
```
