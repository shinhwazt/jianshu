<template>
  <feature-header :featureText="featureText"></feature-header>
</template>

<script>
import featureHeader from "../common/featureHeader.vue"
export default{
  data(){
    return{
      featureText:"推荐关注",
    }
  },
  components:{
    featureHeader:featureHeader
  }
}
</script>
<style>
</style>
