<template>
<div class="home-main">
  <div class="home-articles">
    <v-topic></v-topic>
    <div class="article-wrapper">
      <ul>
        <li v-for="article in articles">
          <div class="single-article">
            <div class="article-related">
              <div class="related-avator">
                <img :src="article.related?article.related.avator:article.avator">
              </div>
              <div class="related-show">
                <p class="related-text">{{article.related?article.related.username:article.username}}<i class="divider"></i>{{article.related?'喜欢':'发表'}}了文章</p>
                <p class="related-time">5小时前</p>
              </div>
              <div class="author-fllow" @click="showHandlerPanel(article,$event)">
                <span class="icon-ctrl rotateX"></span>
              </div>
            </div>
            <div class="article-cover">
              <img :src="article.cover">
            </div>
            <div class="article-title">
              {{article.title}}
            </div>
            <div class="article-digest">
              {{article.digest}}
            </div>
            <div class="article-tags">
              <div class="article-tags-ahthor" v-show="article.related">{{article.username}}</div>
              <div class="article-tags-number">{{article.comment}}评论·{{article.love}}喜欢</div>
            </div>
          </div>

        </li>

      </ul>
    </div>
    <div class="handlerPanel" ref="panel" v-show="panelShow" @click="removeSingleArticle">不感兴趣</div>
  </div>
</div>
</template>
<style>
.handlerPanel{height:70px;width:200px;text-align: center;line-height: 70px;box-shadow: 1px 1px 15px 1px #ccc;position: fixed;top:300px;left:300px;background-color: white;z-index: 15;
font-size: 29px;border-radius: 5px}
.divider{margin:0 10px}
.rotateX{display: block;transform: rotateX(180deg);font-size: 35px;height:100%;width:100%}
.home-main{width:750px;position: fixed;top:90px;bottom: 90px;left: 50%;margin-left: -375px;overflow-y: auto;background-color: white;overflow-x: hidden;}
.home-articles{width:750px;margin:0 auto;}
.single-article{width:690px;margin:0 auto}
.article-wrapper{width:750px;margin:0 auto}
.article-wrapper li{border-bottom: 1px solid #ccc}
.article-related{height:150px;width:690px;overflow: hidden;box-sizing: border-box;padding-top: 40px}
.related-avator{height:70px;width:70px;border-radius: 50%;overflow: hidden;float: left}
.related-avator img{height:70px;width:70px;}
.related-show{width:537px;height:70px;float:left;margin-left: 30px}
.related-text{width: 537px;height:45px;text-align: left;line-height: 45px;font-size: 26px;color:#4b4b4b}
.related-time{width: 537px;height: 25px;text-align: left;line-height: 25px;color:#8f8f8f;font-size: 18px}
.author-fllow{height:70px;width:40px;float: right;}

.article-cover{height:250px;width: 690px;margin:0 auto}
.article-cover img{height:250px;width: 690px}
.article-title{height:auto;width: 690px;box-sizing: border-box;padding: 35px 0;font-size: 30px;color:#2e2e2e}
.article-digest{height:auto;width: 690px;font-size: 28px;display:-webkit-box;text-overflow:ellipsis;-webkit-line-clamp:2;overflow:hidden;
-webkit-box-orient:vertical;}
.article-tags{height:100px;width:690px;box-sizing: border-box;padding-bottom: 35px;font-size: 28px;color:#979797}
.article-tags-ahthor{height:65px;line-height: 65px;width:auto;text-align: left;float:left;color:#7ca1b1}
.article-tags-number{height:65px;line-height: 65px;width:auto;text-align: left;float:right}
</style>
<script>
import vTopic from "./topics.vue"
import articles from "../../../../mock/articles.js"
export default{
  data(){
    return {
      articles:[],
      panelShow:false,
      currentArticle:0
    }
  },
  beforeCreate:function(){
    console.log("beforeMount周期执行");
  },
  created:function(){
    console.log("created周期执行");
    this.scrollHandler();
    this.articles = articles.articles;
  },
  beforeMount:function(){
    console.log("beforeMount周期执行");
  },
  mounted:function(){
    console.log("mounted周期执行");
  },
  beforeUpdate:function(){
    console.log("beforeUpdate周期执行");
  },
  updated:function(){
    console.log("updated周期执行");
  },
  components:{
    vTopic:vTopic
  },
  methods:{
    scrollHandler:function(){
      var _this = this;
      window.addEventListener("touchmove",function(){
        if(_this.panelShow){
          return _this.panelShow = false;
        }
      })
    },
    removeSingleArticle:function(){
      var currentId = this.currentArticle;
      for(var i=0,il=this.articles.length;i<il;i++){
        var current = this.articles[i];
        if(current.id==currentId){
          this.articles.splice(i,1);
          this.panelShow = false;
          break;
        }
      }
    },
    showHandlerPanel:function(obj,ev){
      var oriId = this.currentArticle;
      var currentId = obj.id;
      var target = ev.target;
      var position = this.getPosition(target);
      var targetX = position.left;
      var targetY = position.top;
      var panel = this.$refs.panel;
      var domWidth = 200;
      var domHeight = 70;
      if(oriId==currentId){
        if(this.panelShow){
          this.panelShow = false;
        }else{
          panel.style.left = targetX-domWidth+"px";
          panel.style.top = targetY+domHeight+"px";
          this.panelShow = true;
        }

      }else{
        panel.style.left = targetX-domWidth+"px";
        panel.style.top = targetY+domHeight+"px";
        this.panelShow = true;
        this.currentArticle=currentId;
      }




    },

    getPosition:function(el){
      var obj = el.getBoundingClientRect();
      return {
        top:obj.top,
        left:obj.left
      }
    }
  }
}
</script>
