<template>
  <div>
    <home-header :header-text="headText" :handler-url="handlerUrl"></home-header>
    <home-content></home-content>
  </div>

</template>
<style>
#app{background-color: #f6f6f6}
</style>
<script>
import homeHeader from "../common/header.vue"
import homeContent from "./content.vue"
export default{
  data(){
    return {
      headText:"首页",
      handlerUrl:"homeTest"
    }
  },
  components:{
    homeHeader:homeHeader,
    homeContent:homeContent
  },


}
</script>
