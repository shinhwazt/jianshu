<template>
  <div class="new-comment-content">
    <ul>
      <li>
        <div class="conmment-details">
          <div class="conmment-details-text">
            <div class="conmment-details-text-time">15小时前</div>
            <div class="conmment-details-text-title">这部电影用独特的视角讲述了每个人的初恋</div>
            <div class="conmment-details-text-tags">560阅读·11评论·11喜欢</div>
          </div>
          <div class="conmment-details-cover">
            <img src="http://upload.jianshu.io/collections/images/61/0__15815600_401_00.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64">
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script></script>
<style>
.new-comment-content,.new-comment-content ul{height: auto;width: 750px}
.new-comment-content li{height: 220px;width: 750px;border-bottom: 1px solid #ccc;box-sizing: border-box;padding: 30px 0}
.conmment-details{width:690px;margin:0 auto}

.conmment-details-text{height: 160px;width: 500px;float: left;}
.conmment-details-text-title{height: 88px;width: 500px;font-size: 35px;}
.conmment-details-text-time,.conmment-details-text-tags{width: 500px;height: 36px;font-size: 26px;color: #a4a4a4;line-height: 36px;text-align: left;}



  .conmment-details-cover{height: 160px;width: 160px;float: left;border-radius: 5px;overflow: hidden;margin-left: 30px}
  .conmment-details-cover img{height: 160px;width: 160px;}
</style>
