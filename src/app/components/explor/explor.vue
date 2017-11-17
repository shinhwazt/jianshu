<template>
  <div>
    <explor-carousel></explor-carousel>
    <explor-content></explor-content>
    <explor-hot-topic></explor-hot-topic>
    <explor-hot-article></explor-hot-article>
  </div>
</template>
<style>

</style>
<script>
import explorCarousel from "./carousel.vue"
import explorContent from "./content.vue"
import explorHotTopic from "./hotTopic.vue"
import explorHotArticle from "./hotArticle.vue"

export default{
  components:{
    explorCarousel:explorCarousel,
    explorContent:explorContent,
    explorHotTopic:explorHotTopic,
    explorHotArticle:explorHotArticle
  },
  mounted:function(){
    console.log("explor mounted run");
  }
}
</script>
