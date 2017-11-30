<template>
  <div class="new-hot-content">
    <ul>
      <li v-for="item in $store.state.topicHot">
        <div class="hot-details">
          <div class="hot-details-text">
            <div class="hot-details-text-time">{{item.time}}</div>
            <div class="hot-details-text-title">{{item.text}}</div>
            <div class="hot-details-text-tags">{{item.read}}阅读·{{item.comment}}评论·{{item.love}}喜欢</div>
          </div>
          <div class="hot-details-cover">
            <img :src="item.url">
          </div>
        </div>
      </li>

    </ul>
  </div>
</template>
<script>
export default{
  
}
</script>
<style>
.new-hot-content{width: 750px;position: fixed;margin-left: -375px;left: 50%;bottom: 0;top:180px;overflow-y: auto;}
.new-hot-content ul{height: auto;width: 750px}
.new-hot-content li{height: 220px;width: 750px;border-bottom: 1px solid #ccc;box-sizing: border-box;padding: 30px 0}
.hot-details{width:690px;margin:0 auto}

.hot-details-text{height: 160px;width: 500px;float: left;}
.hot-details-text-title{height: 88px;width: 500px;font-size: 35px;}
.hot-details-text-time,.hot-details-text-tags{width: 500px;height: 36px;font-size: 26px;color: #a4a4a4;line-height: 36px;text-align: left;}



  .hot-details-cover{height: 160px;width: 160px;float: left;border-radius: 5px;overflow: hidden;margin-left: 30px}
  .hot-details-cover img{height: 160px;width: 160px;}
</style>
