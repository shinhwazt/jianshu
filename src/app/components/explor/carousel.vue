<template>
  <div class="explor-carousel">
    <ul class="carousel-wrapper" ref="carousel">

      <li v-for="carousel in carouselsUse">
        <img :src="carousel">
      </li>
    </ul>
    <ul class="carousel-ticket">
      <li v-for="(carousel,index) in carousels" :class="carouselIndex-1==index?'active-ticket':''">
      </li>
    </ul>

  </div>
</template>
<style>
.explor-carousel{height:320px;width:750px;overflow: hidden;position: relative;margin:0 auto}
.carousel-wrapper{height:320px;white-space: nowrap;position: relative;top:0;left:0;font-size: 0;transform:translate(-750px)}
.carousel-wrapper li{display: inline-block;letter-spacing: normal;word-spacing: normal;*display: inline;zoom:1;height:320px;width:750px;overflow: hidden;}
.carousel-wrapper li img{height:320px;width:750px}

.carousel-ticket{height:20px;width:750px;font-size: 0;text-align: center;position: absolute;bottom: 25px}
.carousel-ticket li{height:15px;width:15px;display: inline-block;border-radius: 50%;background-color: #353533;margin:5px 10px}
.carousel-ticket li.active-ticket{background-color: white}
</style>
<script>
import carousels from "../../../../mock/carousel.js"
export default{
  data(){
    return {
      carousels:[],
      carouselsUse:[],
      carouselIndex:0,
      touchDetails:{},
      timer:"",
      sport:false
    }
  },
  mounted:function(){

      this.carousels = carousels.carousels;
      this.carouselsUse = JSON.parse(JSON.stringify(carousels.carousels));
      this.carouselsUse.push(this.carousels[0]);
      this.carouselsUse.unshift(this.carousels[this.carousels.length-1]);
      this.carouselHandler();
      this.timer = setInterval(this.carouselHandler,5000);
      this.bindTouchHandler();


  },
  destroyed:function(){
    this.timer&&clearInterval(this.timer)
    console.log("轮播组件销毁");
  },
  methods:{
    carouselHandler:function(){
      this.$nextTick(function(){
        var ul = this.$refs.carousel;
        var max = this.carousels.length;
        var domWidth = 750;
        if(this.carouselIndex>=max){
          this.carouselIndex = 0;
          var domWidth = 750;
          var sportLeft = 750*(max-1);
          ul.style.transition = "none";
          ul.style.transform = "translate("+sportLeft+"px)";

        }
        var carouselIndex = this.carouselIndex;
        var sportLeft = -750*(carouselIndex+1);//1表示额外添加的第一个元素
        var oriLeft = ul.getBoundingClientRect().left;
        ul.style.transform = "translate("+sportLeft+"px)";
        ul.style.transition = "transform .2s ease-out";
        this.carouselIndex++;
      })

    },
    touchStartHandler:function(event){
      this.timer&&clearInterval(this.timer);

      var e = event.changedTouches[0];
      var ul = this.$refs.carousel;
      var touch = this.touchDetails;
      var oriLeft = ul.getBoundingClientRect().left;

      touch.startX = e.pageX;
      touch.domLeft = oriLeft;
    },
    touchMoveHandler:function(event){
      var max = this.carousels.length;
      if(this.sport){
        return;
      }

      var fexLength = 300;//固定触发事件的移动标准
      var e = event.changedTouches[0];
      var ul = this.$refs.carousel;
      var domWidth = 750;


      var touch = this.touchDetails;
      var startX = touch.startX;
      var domLeft = touch.domLeft;

      var moveX = e.pageX-startX

      ul.style.transform = "translate("+(domLeft+moveX)+"px)";

      if(moveX>0&&moveX>fexLength){
        if(this.carouselIndex==1){
          ul.style.transition = "transform .2s ease-out";
          ul.style.transform = "translate(0px)";
          this.carouselIndex = max;
          this.sport = true;

          setTimeout(function(){
            ul.style.transition = "none";
            ul.style.transform = "translate("+(-750*max)+"px)";
          },50);


          return;
        }
        ul.style.transform = "translate("+(domLeft+domWidth)+"px)";
        ul.style.transition = "transform .2s ease-out";
        this.carouselIndex--;

        this.sport = true;
      }

      if(moveX<0&&moveX<-fexLength){
        if(this.carouselIndex==this.carousels.length){
          ul.style.transition = "transform .2s ease-out";
          ul.style.transform = "translate("+(domLeft-domWidth)+"px)";
          this.carouselIndex = 1;
          this.sport = true;

          setTimeout(function(){
            ul.style.transition = "none";
            ul.style.transform = "translate(-750px)";
          },50);


          return;
        }
        ul.style.transform = "translate("+(domLeft-domWidth)+"px)";
        ul.style.transition = "transform .2s ease-out";
        this.carouselIndex++;
        this.sport = true;
      }


    },
    touchEndHandler:function(){
      if(this.sport){
        this.sport = false;
      }else{
        var ul = this.$refs.carousel;
        var touch = this.touchDetails;
        var domLeft = touch.domLeft;
        ul.style.transform = "translate("+domLeft+"px)";
        ul.style.transition = "transform .2s ease-out";
      }

      this.timer = setInterval(this.carouselHandler,5000);
    },
    bindTouchHandler:function(){
      var ul = this.$refs.carousel;
      ul.addEventListener('touchstart', this.touchStartHandler);
      ul.addEventListener('touchmove', this.touchMoveHandler);
      ul.addEventListener('touchend', this.touchEndHandler);
    }
  }
}
</script>
