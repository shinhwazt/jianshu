<template>
  <div class="home-header">
    <div class="home-header-left">{{headerText}}</div>
    <div class="home-header-right">
      <router-link :to="'/'+handlerUrl">
        <div class="home-heaader-function">
          <span class="header-feature">
            <img :src="handlerImg">
          </span>
        </div>
      </router-link>

      <router-link to="/search">
        <div class="home-heaader-function">
          <span class="header-search">
            <img src="../../../../images/header/search.png">
          </span>
        </div>
      </router-link>

    </div>


  </div>
</template>
<style>
.home-header{height:90px;width:750px;box-sizing: border-box;padding:0 30px;font-size: 35px;position: fixed;top:0;left:0;background-color: white;z-index: 10;
border-bottom: 1px solid #ccc;color: #2c2c2c;font-weight: 600}
.home-header-left{height:90px;width:100px;text-align: left;line-height: 90px;float: left;}
.home-header-right{height:90px;width: 160px;float: right;}
.home-heaader-function{height:90px;width:80px;float:left;text-align: center;overflow: hidden;}
.header-search,.header-feature{height: 43px;width: auto;display: inline-block;margin-top: 23px}
.header-search img,.header-feature img{height: 43px;width: 100%}
.home-search{width:750px;background-color: red;position: fixed;top:0;left: 0;bottom: 90px;}

</style>
<script>
export default{

  props:["headerText","handlerImg","handlerUrl"],
  
}
</script>
