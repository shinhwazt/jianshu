<template>
  <div>
    <person-header :headerText="headText" :headerUrl="handlerUrl" :headerImg="handlerImg"></person-header>
    <person-content></person-content>
  </div>
</template>
<style>
</style>
<script>
import personContent from "./content.vue"
import personHeader from "../common/header.vue"
import { mapMutations } from 'vuex'

export default{
  data(){
    return {
      headText:"我的",
      handlerUrl:"",
      handlerImg:"../../images/header/setting.png"
    }
  },
  beforeRouteLeave :function(to,from,next){
    var top = document.body.scrollTop;
    this.RECORD_SCROLL({name:"person",height:top});
    next();
  },
  mounted:function(){
    document.body.scrollTop = this.scroll;
  },
  methods:{
    ...mapMutations(["RECORD_SCROLL"]),
  },
  computed:{
    scroll(){
      return this.$store.state.personScroll
    }
  },
  activated:function(){
    document.body.scrollTop = this.scroll;
  },
  components:{
    personHeader:personHeader,
    personContent:personContent
  }
}
</script>
