<template>
  <div>
    <homeHeader :headerText="headText" :handlerUrl="handlerUrl" :handlerImg="handlerImg" @fafn="handler"></homeHeader>
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
    homeHeader:homeHeader,
    homeContent:homeContent
  },
  beforeRouteLeave :function(to,from,next){
    var top = document.querySelector(".home-main").scrollTop;
    this.RECORD_SCROLL({name:"home",height:top});
    next();
  },
  mounted:function(){
    document.querySelector(".home-main").scrollTop = this.scroll;
  },
  methods:{
    ...mapMutations(["RECORD_SCROLL"]),
    handler:function(){
      console.log(1);
      this.headText = "组件";
    }
  },
  computed:{
    scroll(){
      return this.$store.state.homeScroll
    }
  }


}
</script>
