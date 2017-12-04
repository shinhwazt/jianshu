# VueRouter基本使用

vue-router需要两个基本的组件\<router-link\>和\<router-view\>

基本使用步骤为：


1.导入基本组件(import componentX from "xx/xx.vue")


2.制定路由匹配规则({path:"/xx",component:componentX})


3.实例化路由(new VueRouter())


4.绑定到vue实例(new Vue({router:routerX}))


## router.js
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
## index.js
//绑定到vue实例
```js
import Vue from "vue"
import VueRouter from "vue-router"
import router frm "router.js"
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

## 一级路由实现


在vue中路由的实现离不开\<router-link\>和\<router-view\>

```js
import home from "../components/home/home.vue"
import explor from "../components/explor/explor.vue"
import message from "../components/message/message.vue"
import profile from "../components/profile/profile.vue"
```
```js
const routes = [
  {
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
    path: '/profile',
    component: profile
  },
  {
    path: '/',
    redirect: '/home'
  },
];
```

在路由产生变化之后，vue会根据配置的路由规则来找到对应的组件渲染在\<router-link\>中

{path: '/',redirect: '/home'}可以执行初始加载的时候默认显示home组件

## 一级路由下的子路由

如果需要路由的嵌套，则一级路由下面要使用children属性来执行自路由的对应规则，同时一级路由对应的组件中也要添加一个\<router-view\>组件用来指定自子路由的显示位置

```
const routes = [
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
];
```

一级路由中的\<router-link\>组件的to属性值前面不要加上"/"因为"/"表示在根路径下

## vue-router获取路径中的参数及常用函数

如果在路由配置中指定了带参数的路由，如上面的代码所示'/topicDetails/:id'则在topicDetailsComment组件的js中可以通过this.$route.params.id来获取参数值

在js中我们可以通过vue-router暴露出的一些api来实现路由之间的跳转

_this.$router.push("/home") 则路由会变为http:xx.yy.com/home 显示"/home"对应的组件 


_this.$router.go(-1) 回退到上个页面

## vue-router生命周期

vue-router的生命周期有三种，一种是对vue-router的全局配置（全局生效），一种在组件内生效，一种在router配置中生效

### vue-router全局生命周期

vue-router全局生命周期包括router.beforeEach，router.afterEach，router.beforeResolve（2.5新增）

router.beforeEach周期包含三个参数to、from、next，在路由改变之前被调用，from表示从哪个路由开始切换是一个对象包含原始路由的一些信息，to表示切换到哪个路由包含目标路由的一些基本信息，next是一个函数，vue-router的每一个生命周期如果参数包括next，那么一定一定一定要调用next()来 resolve 这个钩子(不调用的话路由将不能跳转)


