<template>
  <transition name="slide">
    <div class="topic-details-content">
      <div class="topicDetails-header">
        <div class="feature-back" @click="backHandler">

            <img src="../../../../images/header/back.png">

        </div>
        <div class="topic-author-avator">
          <img :src="topicDetails.avator">
        </div>
        <div class="topic-author-name">{{topicDetails.name}}</div>
      </div>
      <div class="toppic-details-nav">

        <div class="public">
          <router-link to="public">
            最新发布
          </router-link>
        </div>
        <div class="comment">
          <router-link to="comment">
            最新评论
          </router-link>
        </div>
        <div class="hot">
          <router-link to="hot">
            热门
          </router-link>
        </div>
        <span class="toppic-details-nav-active" ref="activeLine"></span>
      </div>
      <router-view></router-view>
    </div>

  </transition>

</template>
<style>
.topic-details-content{position: fixed;top:0;left:50%;margin-left: -375px;width: 750px;bottom: 0;background: white;z-index: 20}
.topicDetails-header{height:90px;width:750px;box-sizing: border-box;font-size: 35px;position: relative;top:0;left:0;background-color: white;
border-bottom: 1px solid #ccc;color: #2c2c2c;font-weight: 600}
.feature-back{height: 90px;width: 110px;float: left;box-sizing: border-box;padding:28px 38px 28px 38px}
.feature-back img{height: 34px;width: 34px}
.topic-author-avator{height: 70px;width: 70px;border-radius: 50%;float: left;margin-top: 10px;overflow: hidden;}
.topic-author-avator img{height: 70px;width: 70px}
.topic-author-name{height: 90px;width: auto;font-size: 30px;float: left;margin-left: 15px;line-height: 90px}
.toppic-details-nav{height: 90px;width: 750px;display: flex;box-sizing: border-box;border-bottom: 1px solid #ccc;
position:relative;}
.toppic-details-nav-active{display: inline-block;;height: 0;width: 33.3%;border-top: 2px solid #e6816f;position: absolute;left: 33.3%;bottom: 0;transition: left .5s}
.toppic-details-nav div{flex: 1;text-align: center;line-height: 90px}
.toppic-details-nav a{display: inline-block;height: 100%;width: 100%;color: #8f8f8f;text-decoration: none}
.toppic-details-nav .router-link-active{color:#e6816f}
.slide-enter-active,.slide-leave-active  {
  transition: transform .5s ease;
}
.slide-enter,.slide-leave-to{
  transform: translateX(750px);
}
</style>
<script>
import axios from "axios"
import { mapMutations } from 'vuex'
export default{
  data(){
    return {
      topicDetails:{
        name:"",
        avator:""
      },
      hashRoute:"",
    }
  },
  created:function(){

    var _this = this;
    var id = this.$route.params.id;
    axios.get("http://localhost:8888/topicDetails/"+id).then(function(data){
      _this.topicDetails = data.data.info;
      _this.LOAD_TOPIC_DETAILS({name:"public", data:data.data.tags.public});
      _this.LOAD_TOPIC_DETAILS({name:"comment", data:data.data.tags.comment});
      _this.LOAD_TOPIC_DETAILS({name:"hot", data:data.data.tags.hot});
    },function(){})
  },
  mounted:function(){
    var _this = this;
    console.log(this.$route.params.id)
    window.addEventListener("popstate",function(e){
      var hash = window.location.pathname;
      var topicDetailsReg = /^\/topicDetails/;
      if(topicDetailsReg.test(hash)){
        _this.$router.push("/home");
      }
    });
    var hash = window.location.pathname.slice(1).split("/");
    var final = hash[hash.length-1];
    this.scrollActiveLine(final);
  },

  beforeRouteUpdate:function(to,from,next){

    var hash = to.path.split("/");
    var final = hash[hash.length-1];
    this.scrollActiveLine(final);

    next();
  },
  methods:{
    ...mapMutations(["LOAD_TOPIC_DETAILS"]),
    backHandler:function(){
      //window.location.hash = "#/home";
      this.$router.push("/home")
    },
    scrollActiveLine:function(hash){
      var dom = this.$refs.activeLine;

      switch(hash){
        case "public":
        dom.style.left = 0;
        break;
        case "comment":
        dom.style.left = (33.3/100)*750+"px";
        break;
        case "hot":
        dom.style.left = (66.6/100)*750+"px";
        break;

      }
    }
  },


}
</script>
