<template>
  <div class="new-public-content">
    <ul>
      <li v-for="item in $store.state.topicPublic">
        <div class="public-details">
          <div class="public-details-text">
            <div class="public-details-text-time">{{item.time}}</div>
            <div class="public-details-text-title">{{item.text}}</div>
            <div class="public-details-text-tags">{{item.read}}阅读·{{item.comment}}评论·{{item.love}}喜欢</div>
          </div>
          <div class="public-details-cover">
            <img :src="item.url">
          </div>
        </div>
      </li>

    </ul>
  </div>
</template>
<script>
export default{
  compute:{
    data:function(){
      return this.$store.state.topicPublic
    }
  }
}
</script>
<style>
.new-public-content{width: 750px;position: fixed;margin-left: -375px;left: 50%;top: 180px;bottom: 0;overflow-y: auto;}
.new-public-content ul{height: auto;width: 750px}
.new-public-content li{height: 220px;width: 750px;border-bottom: 1px solid #ccc;box-sizing: border-box;padding: 30px 0}
.public-details{width:690px;margin:0 auto}

.public-details-text{height: 160px;width: 500px;float: left;}
.public-details-text-title{height: 88px;width: 500px;font-size: 35px;}
.public-details-text-time,.public-details-text-tags{width: 500px;height: 36px;font-size: 26px;color: #a4a4a4;line-height: 36px;text-align: left;}



  .public-details-cover{height: 160px;width: 160px;float: left;border-radius: 5px;overflow: hidden;margin-left: 30px}
  .public-details-cover img{height: 160px;width: 160px;}
</style>
