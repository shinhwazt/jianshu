<template>
  <transition name="slide-fade">
      <div class="home-search">
      	
      </div>
    </transition>
</template>
<style>
.home-search{width:750px;background-color: red;position: fixed;top:0;left: 0;bottom: 0;z-index: 20}
.slide-fade-enter-active,.slide-fade-leave-active  {
  transition: transform .5s ease;
}
.slide-fade-enter,.slide-fade-leave-to{
  transform: translateX(750px);

}

</style>
<script>
export default{
  
  
}
</script>
