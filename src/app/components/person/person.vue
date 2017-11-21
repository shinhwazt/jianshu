<template>
  <div>
    <person-header :header-text="headText" :handler-url="handlerUrl"></person-header>
    <person-content></person-content>
  </div>
</template>
<style>
</style>
<script>
import personContent from "./content.vue"
import personHeader from "../common/header.vue"
export default{
  data(){
    return {
      headText:"我的",
      handlerUrl:""

    }
  },
  components:{
    personHeader:personHeader,
    personContent:personContent
  }
}
</script>
