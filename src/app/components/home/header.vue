<template>
  <div class="home-header">
    <div class="home-header-left">首页</div>
    <div class="home-header-right">
      <div class="home-heaader-function">
        <span class="icon-user-plus"></span>
      </div>
      <div class="home-heaader-function" @click="showSearchHandler">
        <span class="icon-search"></span>
      </div>
    </div>
    <transition name="slide-fade">
      <div class="home-search" v-show="search" @click="showSearchHandler"></div>
    </transition>

  </div>
</template>
<style>
.home-header{height:90px;width:750px;box-sizing: border-box;padding:0 30px;font-size: 35px;position: fixed;top:0;left:0;background-color: white;z-index: 10}
.home-header-left{height:90px;width:100px;text-align: left;line-height: 90px;float: left;}
.home-header-right{height:90px;width: 160px;float: right;}
.home-heaader-function{height:90px;width:80px;float:left;text-align: center;line-height: 90px}

.home-search{width:750px;background-color: red;position: fixed;top:0;left: 0;bottom: 90px;}
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-enter
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(750px);

}
.slide-fade-leave-active {
  transition: none;
}
.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {


}
</style>
<script>
export default{
  data(){
    return {
      search:false,
    }
  },
  methods:{
    showSearchHandler:function(){
      if(this.search){
        this.search = false
      }else{
      
        this.search = true;
      }
    }
  }
}
</script>
