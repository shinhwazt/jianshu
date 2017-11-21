<template>
	<transition name="slide">
		<div class="feature">
			<feature-header :featureText="featureText"></feature-header>
		</div>
	</transition>
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
.feature{width: 750px;position: fixed;top: 0;left: 0;bottom: 0;z-index: 20}
.slide-enter-active,.slide-leave-active  {
  transition: transform .5s ease;
}
.slide-enter,.slide-leave-to{
  transform: translateX(750px);

}
</style>
