var phoneScale = parseInt(window.screen.width) / 750;
var meta = document.createElement("meta");
meta.setAttribute("name", "viewport");
meta.setAttribute("content", "width=750, initial-scale = " + phoneScale + ", maximum-scale = " + phoneScale + ", maximum-scale =" + phoneScale)
document.querySelector("head").appendChild(meta);

import Vue from "vue"
import vFooter from "./footer/index.vue"
import vHome from "./components/home/home.vue"
import router from "./config/route.js"
import VueRouter from "vue-router"
import store from './store/'
Vue.use(VueRouter)

new Vue({
  el:"#app",
  components:{
    vFooter:vFooter,
    vHome:vHome,
  },
  router,
  store,
  methods:{

  },
  created:function(){
    
  }

})
