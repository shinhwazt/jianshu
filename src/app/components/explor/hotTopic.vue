<template>
  <div class="explor-hot-topic">
    <div class="hot-topic-title">
      <span class="hot-topic-title-text">热门专题</span>
      <span class="hot-topic-title-refresh" @click="randomHandler">
        <span class="refresh-btn icon-spinner9" ref="refresh"></span>
        <span class="refresh-text">换一批</span>
      </span>
    </div>
    <div class="hot-topic-content">
      <ul>
        <li v-for="showTopic in showTopics">{{showTopic}}</li>



      </ul>
    </div>
  </div>
</template>
<style>
.explor-hot-topic{width:690px;height:260px;margin:0 auto;background-color: white}
.hot-topic-title{height:80px;width:690px;box-sizing: border-box;padding: 25px 0}
.hot-topic-title-text{display: inline-block;float: left;height: 30px;font-size: 28px;line-height: 30px;
width: 150px;box-sizing: border-box;border-left: 3px solid #e68c81;padding-left: 15px;color: #979797}
.hot-topic-title-refresh {height:30px;width: 150px;float: right;display: inline-block;}
.refresh-btn{height: 30px;width:50px;float: left;font-size: 30px;text-align: center;line-height: 30px;}
.refresh-text{height:30px;width: 100px;float: left;text-align: left;line-height: 30px;font-size: 28px;color: #979797}

.hot-topic-content,.hot-topic-content ul{height:180px;width:690px;overflow: hidden;}
.hot-topic-content li{height:55px;line-height: 55px;padding: 0 10px;box-sizing: border-box;border: 1px solid #e68c81;
display: inline-block;font-size: 30px;color:#e68c81;border-radius: 8px;margin:18px 20px 10px 0}
</style>
<script>
import hotTopics from "../../../../mock/hotTopics.js"
export default{
  data(){
    return{
      hotTopics:[],
      showTopics:[],
      allTopics:[],
    }
  },
  mounted:function(){
    this.hotTopics = JSON.parse(JSON.stringify(hotTopics.hotTopics));
    this.allTopics = JSON.stringify(this.hotTopics);

    this.getRandomHotTopic();
  },
  methods:{

    getRandomHotTopic:function(){
      var showTopics = [];
      while (true) {
        if(this.hotTopics.length==0){
          this.hotTopics = JSON.parse(this.allTopics);
        }
        var num = getRamdom(this.hotTopics.length);
        showTopics.push(this.hotTopics.splice(num,1)[0]);
        if(showTopics.length==8){
          this.showTopics = showTopics;
          break;
        }
      }

      function getRamdom(max){
        return Math.floor(Math.random()*max)
      }
    },
    randomHandler:function(){
      var btn = this.$refs.refresh;

      btn.style.transition = "transform .5s ease-out";
      btn.style.transform = "rotateZ(360deg)";
      setTimeout(function(){
        btn.style.transition = "none";
        btn.style.transform = "rotateZ(0deg)";
      },500);
      this.getRandomHotTopic();
    }
  },
}
</script>
