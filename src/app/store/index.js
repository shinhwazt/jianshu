import Vue from "vue"
import Vuex from "vuex"
import mutations from "./mutation.js"
import actions from "./action.js"
import getters from "./getter.js"
Vue.use(Vuex)

const state = {
  author:"Shinhwa",
  version:"1.0.0",
  homeScroll:0,
  explorScroll:0,
  personScroll:0,
  topicComment:{},
  topicHot:{},
  topicPublic:{}
}

export default new Vuex.Store({
  state,mutations,actions,getters,
  strict: true
});
