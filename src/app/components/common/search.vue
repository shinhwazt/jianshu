<template>
  <transition name="slide">
      <div class="feature-search">
        <div class="feature-back" @click="backHandler">
          <img src="../../../../images/header/back.png">
        </div>
        <div class="feature-search-input">
          <input placeholder="搜索文章、专题、用户、文集"/>
          <span class="feature-search-icon">
            <img src="../../../../images/header/search.png">
          </span>
        </div>
      </div>
    </transition>
</template>
<style>
.feature-search{width:750px;background-color: white;position: fixed;top:0;left: 50%;margin-left: -375px;bottom: 0;z-index: 20}
.feature-back{height: 90px;width: 110px;float: left;box-sizing: border-box;padding:28px 38px 28px 38px;float: left}
.feature-back img{height: 34px;width: 34px}

.feature-search-input{height: 60px;width:600px;float: left;margin-top: 15px;border: 1px solid #ccc;border-radius: 30px;overflow: hidden;}
.feature-search-input input{height: 60px;width: 500px;border: 0;outline: none;display: inline-block;float: left;font-size: 27px;
    line-height: 60px;
    box-sizing: border-box;
    padding-left: 15px;}
.feature-search-icon{height: 60px;width: 100px;display: inline-block;;float: left;text-align: center;padding-top: 8px}
.feature-search-icon img{height: 44px;width: auto}
.slide-enter-active,.slide-leave-active  {
  transition: transform .5s ease;
}
.slide-enter,.slide-leave-to{
  transform: translateX(750px);

}

</style>
<script>
import xhr from "axios"
export default{

  methods:{
    backHandler:function(){
      this.$router.go(-1);
    }

  },
  mounted:function(){
    console.log("xhr next")
    xhr.get("http://webapi.efftravel.com/api/service/getproductlist?second_value=392").then(function(data){

    },function(){

    })
  },

}
</script>
