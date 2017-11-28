<template>
  <div>
    <homeHeader :headerText="headText" :headerUrl="handlerUrl" :headerImg="handlerImg" @parentfn="handler"></homeHeader>
    <home-content></home-content>
  </div>
</template>
<style>
#app{background-color: #f6f6f6}
</style>
<script>
import homeHeader from "../common/header.vue"
import homeContent from "./content.vue"
import { mapMutations } from 'vuex'
export default{
  data(){
    return {
      headText:"首页",
      handlerUrl:"recommendFollow",
      handlerImg:"../../images/header/home.png"
    }
  },
  components:{
    homeContent:homeContent,
    homeHeader:homeHeader,

  },
  beforeRouteLeave :function(to,from,next){
    var top = document.querySelector(".home-main").scrollTop;
    this.RECORD_SCROLL({name:"home",height:top});
    next();
  },
  beforeCreate:function(){
    console.log("parent beforeCreate run");
  },
  created:function(){
    console.log("parent created run");
  },
  beforeMount:function(){
    console.log("parent beforeMount run");
  },
  mounted:function(){
    console.log("parent mounted run");
    document.querySelector(".home-main").scrollTop = this.scroll;
  },
  methods:{
    ...mapMutations(["RECORD_SCROLL"]),
    handler:function(){
      console.log("子组件通知父组件");
    }
  },
  computed:{
    scroll(){
      return this.$store.state.homeScroll
    }
  }


}
</script>
