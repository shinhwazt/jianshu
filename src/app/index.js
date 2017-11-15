var phoneScale = parseInt(window.screen.width) / 750;
var meta = document.createElement("meta");
meta.setAttribute("name", "viewport");
meta.setAttribute("content", "width=750, initial-scale = " + phoneScale + ", maximum-scale = " + phoneScale + ", maximum-scale =" + phoneScale)
document.querySelector("head").appendChild(meta);

import Vue from "vue"
import vFooter from "./footer/index.vue"
import homeHeader from "./components/home/header.vue"
import homeContent from "./components/home/content.vue"

new Vue({
  el:"#app",
  components:{
    vFooter:vFooter,
    homeHeader:homeHeader,
    homeContent:homeContent,
  }
})
