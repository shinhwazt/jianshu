<template>
  <div class="home-header">
    <div class="home-header-left">{{headerText}}</div>
    <div class="home-header-right">
      <router-link :to="'/'+handlerUrl">
        <div class="home-heaader-function">
          <span class="icon-user-plus"></span>
        </div>
      </router-link>

      <router-link to="/homeSearch">
        <div class="home-heaader-function">
          <span class="icon-search"></span>
        </div>
      </router-link>

    </div>


  </div>
</template>
<style>
.home-header{height:90px;width:750px;box-sizing: border-box;padding:0 30px;font-size: 35px;position: fixed;top:0;left:0;background-color: white;z-index: 10;
border-bottom: 1px solid #ccc}
.home-header-left{height:90px;width:100px;text-align: left;line-height: 90px;float: left;}
.home-header-right{height:90px;width: 160px;float: right;}
.home-heaader-function{height:90px;width:80px;float:left;text-align: center;line-height: 90px}

.home-search{width:750px;background-color: red;position: fixed;top:0;left: 0;bottom: 90px;}

</style>
<script>
export default{
  data(){
    return {
      search:false,
    }
  },
  props:["headerText","handlerImg","handlerUrl"],
  methods:{
    showSearchHandler:function(){
      if(this.search){
        this.search = false
      }else{

        this.search = true;
      }
    },

  },
  computed:{
    author(){
      return this.$store.state.author;
    }
  }
}
</script>
