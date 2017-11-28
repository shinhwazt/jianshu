<template>
  <div class="">
    <message-header :headerText="headText" :headerUrl="handlerUrl" :headerImg="handlerImg"></message-header>
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
      handlerUrl:"",
      handlerImg:"../../images/header/notify.png"

    }
  },
  components:{
    messageContent:messageContent,
    messageHeader:messageHeader
  }
}
</script>
