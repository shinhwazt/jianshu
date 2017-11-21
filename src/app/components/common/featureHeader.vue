<template>
  
    <div class="feature-header">
      <div class="feature-back" @click="backHandler">
        <img src="../../../../images/header/back.png">
      </div>
      <div class="feature-text">
        {{featureText}}
      </div>
    </div>
  

</template>
<style>
.feature-header{height:90px;width:750px;box-sizing: border-box;font-size: 35px;position: fixed;top:0;left:0;background-color: white;z-index: 10;
border-bottom: 1px solid #ccc;color: #2c2c2c;font-weight: 600}
.feature-back{height: 90px;width: 110px;float: left;box-sizing: border-box;padding:28px 38px 28px 38px}
.feature-back img{height: 34px;width: 34px}
.feature-text{height: 90px;width: 640px;line-height: 90px;text-align: left;font-size: 30px}

</style>
<script>
export default{

  props:["featureText"],
  methods:{
    backHandler:function(){
      this.$router.go(-1);
    }

  }

}
</script>
