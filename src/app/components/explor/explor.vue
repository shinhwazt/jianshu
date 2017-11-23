<template>
  <div class="explor-content">
    <explor-carousel></explor-carousel>
    <explor-content></explor-content>
    <explor-hot-topic></explor-hot-topic>
    <explor-hot-article></explor-hot-article>
  </div>
</template>
<style>
.explor-content{background-color: white}
</style>
<script>
import explorCarousel from "./carousel.vue"
import explorContent from "./content.vue"
import explorHotTopic from "./hotTopic.vue"
import explorHotArticle from "./hotArticle.vue"
import { mapMutations } from 'vuex'

export default{
  components:{
    explorCarousel:explorCarousel,
    explorContent:explorContent,
    explorHotTopic:explorHotTopic,
    explorHotArticle:explorHotArticle
  },


  beforeRouteLeave :function(to,from,next){
    var top = document.body.scrollTop;
    this.RECORD_SCROLL({name:"explor",height:top});
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
      return this.$store.state.explorScroll
    }
  }
}
</script>
