# VueRouter基本使用

vue-router需要两个基本的组件`<router-link>`和`<router-view>`

基本使用步骤为：


1.导入基本组件(import componentX from "xx/xx.vue")


2.制定路由和组件的匹配规则({path:"/xx",component:componentX})


3.实例化路由(new VueRouter())


4.绑定到vue实例(new Vue({router:routerX}))


## router.js
```js
import VueRouter from "vue-router"
//导入基本组件
const home = () => import("../components/home/home.vue")
const explor = () => import("../components/explor/explor.vue")
const message = () => import("../components/message/message.vue")
const profile = () => import("../components/profile/profile.vue")

//制定路由匹配规则
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
//实例化路由
const router = new VueRouter({
  routes,//routes等价于routes:routes，如果上一步的路由规则的变量名为routesA,则再次应为routes:routesA
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
  router,//router等价于router:router
  store,
})
```

{path: '/',redirect: '/home'}表示在初始加载的时候默认显示home组件

## 一级路由下的子路由

如果需要路由的嵌套，则一级路由下面要使用children属性来配置子路由的对应规则，同时在一级路由对应的组件中也要添加一个\<router-view\>组件用来指定自子路由对应组件的显示位置

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

## vue-router获取动态路由路径中的参数及vue-router常用函数

如果在路由配置中指定了带参数的路由（动态路由），如上面的代码所示'/topicDetails/:id'则在topicDetailsComment组件的js中可以通过this.$route.params.id来获取参数值，在html模板中可以通过$route.params.id来获取

在js中我们可以通过vue-router暴露出的一些api来实现路由之间的跳转:

this.$router.push("/home") 则路由会变为http:xx.yy.com/home 显示"/home"对应的组件 

this.$router.go(-1) 回退到上个页面

## vue-router生命周期

vue-router的生命周期有三种，一种是对vue-router的全局配置（全局生效），一种在组件中配置（组件内生效），一种在routes中配置（针对当前路由生效）

### vue-router全局生命周期

vue-router全局生命周期包括router.beforeEach，router.afterEach，router.beforeResolve（2.5新增）

```js
const router = new VueRoute({});
router.beforeEach((to,from,next)=>{});
router.beforeResolve((to,from,next)=>{});
router.afterEach((to,from,next)=>{});
```

router.beforeEach周期包含三个参数to、from、next，在路由改变之前被调用，from表示从哪个路由开始切换是一个对象包含原始路由的一些信息，to表示切换到哪个路由,包含目标路由的一些基本信息，next是一个函数，在vue-router的每一个生命周期中如果参数包括next，那么一定一定一定要调用next()来 resolve 这个钩子(不调用的话路由将不能实现跳转)

router.beforeEach在每一次切换路由时首先被调用，通常来对用户进行一些权限上的控制。

router.beforeResolve与router.beforeEach基本类似，只不过router.beforeResolve是在路由改变之前，异步组件被解析之后调用

router.afterEach表示在路由切换完成之后开始调用，回调函数包括两个参数:to和from

### vue-router组件内生命周期

vue-router包含三个组件内生命周期包括：beforeRouteEnter（组件进入之前）、beforeRouteUpdate (2.2 新增)（组件更新之前）、beforeRouteLeave（组件离开之前）

```js
<script>
import homeHeader from "../common/header.vue"
import homeContent from "./content.vue"
import { mapMutations } from 'vuex'
export default{
  data(){
    return {
    }
  },
  components:{
  },
  beforeRouteLeave :function(to,from,next){
    console.log("components-router-lifecycle-beforeRouteLeave-runing");
    var top = document.querySelector(".home-main").scrollTop;
    this.RECORD_SCROLL({name:"home",height:top});
    next();
  },
  beforeRouteEnter :function(to,from,next){
    console.log("components-router-lifecycle-beforeRouteEnter-runing");
    next();
  },
  beforeRouteUpdate :function(to,from,next){
    console.log("components-router-lifecycle-beforeRouteUpdate-runing");
    next();
  },
  methods:{
  },
  computed:{
  }
}
</script>

```

这三个生命周期在组件内使用（使用方式和组件的生命周期使用方式一样），回调函数都包含三个参数to、from、next

### router配置中的生命周期

beforeEnter，在当前路由改变之前被调用

```
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})
```

## vue-router生命周期执行顺序

在进入一个路由时的生命周期的执行顺序为：router.beforeEach(全局)->beforeEnter(路由中)->beforeRouteEnter(组件中)->router.beforeResolve（全局）->router.afterEach(全局)

在离开路由时只会调用beforeRouteLeave(组件中)



