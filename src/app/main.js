var phoneScale = parseInt(window.screen.width) / 750;
var meta = document.createElement("meta");
meta.setAttribute("name", "viewport");
meta.setAttribute("content", "width=750, initial-scale = " + phoneScale + ", maximum-scale = " + phoneScale + ", maximum-scale =" + phoneScale)
document.querySelector("head").appendChild(meta);

window.onresize = function(){
  var meta = document.querySelector("meta[name='viewport']");
  if(meta){
    var phoneScale = parseInt(window.screen.width) / 750;
    var content ="width=750, initial-scale = " + phoneScale + ", maximum-scale = " + phoneScale + ", maximum-scale =" + phoneScale;
    meta.setAttribute("content",content);
  }
}

import Vue from "vue"
import VueRouter from "vue-router"
import vFooter from "./components/common/footer.vue"
import router from "./config/route.js"
import store from './store/index.js'
Vue.use(VueRouter)

new Vue({
  el:"#app",
  components:{
    vFooter:vFooter,
  },
  router,
  store,
})
