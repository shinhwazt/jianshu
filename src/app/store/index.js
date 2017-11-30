import Vue from "vue"
import Vuex from "vuex"
import mutations from "./mutation.js"
Vue.use(Vuex)

const state = {
  author:"Shinhwa",
  version:"0.0.1",
  homeScroll:0,
  explorScroll:0,
  personScroll:0,
  topicComment:{},
  topicHot:{},
  topicPublic:{}


}


export default new Vuex.Store({state,mutations});
