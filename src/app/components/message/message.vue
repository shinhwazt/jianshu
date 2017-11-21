<template>
  <div class="">
    <message-header :header-text="headText" :handler-url="handlerUrl"></message-header>
    <message-content></message-content>
  </div>
</template>
<style></style>
<script>
import messageContent from "./content.vue"
import messageHeader from "../common/header.vue"
export default{
  data(){
    return {
      headText:"消息",
      handlerUrl:""

    }
  },
  components:{
    messageContent:messageContent,
    messageHeader:messageHeader
  }
}
</script>
