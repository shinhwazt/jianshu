<template>
  <div class="explor-hot-acticle">
    <div class="hot-category-title">
      <span class="hot-category-title-text">热门文章</span>
      <span class="hot-category-title-order">
        <span class="order-btn icon-spinner9" ref="refresh"></span>
        <span class="order-text">定制热门</span>
      </span>
    </div>
    <div class="hot-acticle-content">
      <ul>
        <li v-for="hotArticle in hotArticles">
          <div class="single-hot-acticle">
            <div class="hot-article-author">
              <span class="hot-article-author-avator">
                <img :src="hotArticle.avator">
              </span>
              <span class="hot-article-author-name">
                {{hotArticle.username}}
              </span>
              <span class="hot-article-author-time">
                11.09 18:21
              </span>

              <span class="hot-article-author-fllow" @click="showHandlerPanel(hotArticle,$event)">
                <span class="icon-ctrl rotateX"></span>
              </span>
            </div>

            <div class="hot-article-description">
              <div class="hot-article-title">
                {{hotArticle.title}}
              </div>
              <div class="hot-article-digest">
                {{hotArticle.digest}}
              </div>
            </div>
            <div class="hot-article-cover">
              <img :src="hotArticle.cover">
            </div>



            <div class="hot-article-tags">
              <span class="tags-category">{{hotArticle.category}}</span>
              <span class="hot-article-tags-count">{{hotArticle.read}}阅读·{{hotArticle.comment}}评论·{{hotArticle.love}}喜欢</span>
            </div>
          </div>
        </li>



      </ul>
      <div class="handlerPanel" ref="panel" v-show="panelShow" @click="removeSingleArticle">不感兴趣</div>
    </div>
  </div>
</template>
<style>
.explor-hot-acticle{width:750px;margin:0 auto;margin-bottom: 90px;background-color: white}
.hot-category-title{height:80px;width:690px;box-sizing: border-box;padding: 25px 0;margin:0 auto;overflow: hidden;}
.hot-category-title-text{display: inline-block;float: left;height: 30px;font-size: 28px;line-height: 30px;
width: 150px;box-sizing: border-box;border-left: 3px solid #e68c81;padding-left: 15px;color: #979797}
.hot-category-title-order {height:30px;width: 180px;float: right;display: inline-block;}
.order-btn{height: 30px;width:50px;float: left;font-size: 30px;text-align: center;line-height: 30px;}
.order-text{height:30px;width: 130px;float: left;text-align: left;line-height: 30px;font-size: 28px;color: #979797}

.hot-acticle-content,.hot-acticle-content ul{width:750px;overflow: hidden;}
.hot-acticle-content li{height:auto;width:750px;overflow: hidden;border-bottom: 1px solid #ccc;padding-bottom: 30px}
.single-hot-acticle{width:690px;margin:0 auto;overflow: hidden;}
.hot-article-author{height:75px;width:690px;box-sizing: border-box;padding:15px 0}
.hot-article-author > span{float:left}
.hot-article-author-avator{height:40px;width:40px;border-radius: 50%;overflow: hidden;}
.hot-article-author-avator img{height:40px;width:40px;}
.hot-article-author-name{height:40px;width:auto;text-align: left;line-height: 40px;margin-left:15px;font-size: 28px}
.hot-article-author-time{height:40px;width:auto;text-align: left;line-height: 40px;margin-left:15px;font-size: 20px}
.hot-article-author > span.hot-article-author-fllow{height:40px;width:40px;float: right;}
.rotateX{display: block;transform: rotateX(180deg);font-size: 35px;height:100%;width:100%}

.hot-article-description{height: 165px;width: 525px;float: left;overflow: hidden;}
.hot-article-cover{height: 165px;width: 165px;float: right;border-radius: 5px;overflow: hidden;}
.hot-article-cover img{height: 165px;width: 165px}
.hot-article-title{height:auto;width: 525px;font-size: 28px;display:-webkit-box;text-overflow:ellipsis;-webkit-line-clamp:2;overflow:hidden;
-webkit-box-orient:vertical;box-sizing: border-box;padding-right: 10px}
.hot-article-digest{
  height:auto;width: 525px;font-size: 25px;display:-webkit-box;text-overflow:ellipsis;-webkit-line-clamp:2;overflow:hidden;
  -webkit-box-orient:vertical;margin-top: 12px;color: #8f8f8f;box-sizing: border-box;padding-right: 30px
}
.hot-article-tags{height:45px;width:690px;margin-top: 10px}
.tags-category{box-sizing: border-box;height: 45px;display: inline-block;line-height: 45px;color: #e68c81;border: 1px solid #e68c81;padding:0 10px;float: left;font-size: 25px;border-radius: 5px}
.hot-article-tags-count{height: 45px;display: inline-block;line-height: 45px;font-size: 20px;margin-left: 20px;color: #8f8f8f}

.handlerPanel{height:70px;width:200px;text-align: center;line-height: 70px;box-shadow: 1px 1px 15px 1px #ccc;position: fixed;top:300px;left:300px;background-color: white;z-index: 15;
font-size: 29px;border-radius: 5px}
</style>
<script>
import axios from "axios"
import { mapMutations } from 'vuex'
export default{
  data(){
    return{
      hotArticles:[],
      panelShow:false,
      currentArticle:0
    }
  },
  created:function(){
    this.initData();
  },
  mounted:function(){

  },
  methods:{
    initData:function(){
      var _this = this;
      axios.get("http://localhost:8888/articles").then(function(data){
        _this.hotArticles = data.data;
        _this.$nextTick(function(){
          document.body.scrollTop = _this.scroll;
        })
      },function(){});
    },
    removeSingleArticle:function(){
      var currentId = this.currentArticle;
      for(var i=0,il=this.hotArticles.length;i<il;i++){
        var current = this.hotArticles[i];
        if(current.id==currentId){
          this.hotArticles.splice(i,1);
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
    },
    
  },
  computed:{
    scroll(){
      return this.$store.state.explorScroll
    }
  }


}
</script>
