<template>
  <div>
    <explor-carousel></explor-carousel>
    <explor-content></explor-content>
  </div>
</template>
<style>

</style>
<script>
import explorCarousel from "./carousel.vue"
import explorContent from "./content.vue"

export default{
  components:{
    explorCarousel:explorCarousel,
    explorContent:explorContent
  }
}
</script>
