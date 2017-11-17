<template>
  <div>
    <home-header></home-header>
    <home-content></home-content>
  </div>

</template>
<style>
</style>
<script>
import homeHeader from "./header.vue"
import homeContent from "./content.vue"
export default{

  components:{
    homeHeader:homeHeader,
    homeContent:homeContent
  },
  

}
</script>
