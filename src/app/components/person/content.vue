<template>
  <div class="person-content">
    <div class="basic-message">
      <div class="user-message">
        <div class="user-message-content">
          <span class="user-message-content-avator">
            <img src="../../../../images/message/upload.png">
          </span>
          <span class="user-message-content-name">feShinhwa</span>
        </div>
      </div>
      <div class="user-tags">
        <div>
          <span class="tags-count">11</span>
          <span class="tags-text">公开文章</span>

        </div>
        <div>
          <span class="tags-count">11</span>
          <span class="tags-text">关注</span>
        </div>
        <div>
          <span class="tags-count">11</span>
          <span class="tags-text">粉丝</span>
        </div>
      </div>
    </div>
    <div class="second-items">
      <ul>
        <li>
          <span class="person-item-icon">
            <img src="../../../../images/person/private.png">
          </span>
          <span class="person-item-text">私密文章</span>
          <span class="person-item-count">555</span>
        </li>
        <li>
          <span class="person-item-icon">
            <img src="../../../../images/person/collection.png">
          </span>
          <span class="person-item-text">收藏的文章</span>
          <span class="person-item-count">55</span>
        </li>
        <li>
          <span class="person-item-icon">
            <img src="../../../../images/person/love.png">
          </span>
          <span class="person-item-text">喜欢的文章</span>
          <span class="person-item-count">55</span>
        </li>
        <li>
          <span class="person-item-icon">
            <img src="../../../../images/person/topic.png">
          </span>
          <span class="person-item-text">我的专题</span>
          <span class="person-item-count">55</span>
        </li>
        <li>
          <span class="person-item-icon">
            <img src="../../../../images/person/articles.png">
          </span>
          <span class="person-item-text">我的文集</span>
          <span class="person-item-count">55</span>
        </li>
        <li>
          <span class="person-item-icon">
            <img src="../../../../images/person/fllow.png">
          </span>
          <span class="person-item-text">关注的专题/文集</span>
          <span class="person-item-count">55</span>
        </li>
        <li>
          <span class="person-item-icon">
            <img src="../../../../images/person/money.png">
          </span>
          <span class="person-item-text">我的钱包</span>
          <span class="person-item-count">55</span>
        </li>

      </ul>
    </div>
    <div class="third-items">
      <ul>
        <li>
          <span class="person-item-icon">
            <img src="../../../../images/person/nightStyle.png">
          </span>
          <span class="person-item-text">夜间模式</span>
          <span class="person-item-count">55</span>
        </li>
        <li>
          <span class="person-item-icon">
            <img src="../../../../images/person/record.png">
          </span>
          <span class="person-item-text">浏览记录</span>
          <span class="person-item-count">55</span>
        </li>
      </ul>
    </div>

    <div class="last-items">
      <ul>
        <li>
          <span class="person-item-icon">
            <img src="../../../../images/person/share.png">
          </span>
          <span class="person-item-text">分享简书</span>
          <span class="person-item-count">555</span>
        </li>
        <li>
          <span class="person-item-icon">
            <img src="../../../../images/person/help.png">
          </span>
          <span class="person-item-text">帮助与反馈</span>
          <span class="person-item-count">55</span>
        </li>
        <li>
          <span class="person-item-icon">
            <img src="../../../../images/person/star.png">
          </span>
          <span class="person-item-text">给简书评分</span>
          <span class="person-item-count">555</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<style>
.person-content{margin-bottom: 126px}
.basic-message{height:295px;width:750px;margin:0 auto;margin-top:126px;border-top: 2px solid #ccc;border-bottom: 2px solid #ccc;background-color: white}
.user-message{height: 175px;width:690px;margin:0 auto;overflow: hidden;}
.user-message-content{height: 105px;width: 690px;margin-top:35px }
.user-message-content-avator{height:105px;width:105px;border-radius: 50%;overflow: hidden;display: inline-block;float: left;margin-left: 15px}
.user-message-content-avator img{height:105px;width:105px}
.user-message-content-name{height:105px;width:auto;line-height: 105px;font-size: 30px;margin-left: 40px;display: inline-block;float: left;}
.user-tags{height: 120px;width:690px;margin:0 auto;display: flex;color: #9c9c9c}
.tags-text{height:60px;width:100%;display: inline-block;line-height: 60px;text-align: center;font-size: 30px}
.tags-count{height:60px;width:100%;display: inline-block;line-height: 60px;text-align: center;font-size: 30px}
.user-tags div{flex:1}

.second-items,.third-items,.last-items{width: 750px;margin:0 auto;border-top: 2px solid #ccc;border-bottom: 2px solid #ccc;background-color: white}
.third-items,.last-items{margin-top:36px}
.second-items ul,.third-items ul,.last-items ul{width: 750px}
.second-items li,.third-items li,.last-items li{height:90px;width: 690px;margin: 0 auto;border-bottom: 1px solid #ccc}

.person-item-icon{height: 90px;width: 54px;display: inline-block;float: left;}
.person-item-text{height: 90px;width: 500px;display: inline-block;float: left;line-height: 90px;text-align: left;font-size: 30px;color: #525252}
.person-item-count{height: 90px;width: 136px;display: inline-block;float: left;text-align: right;;line-height: 90px;color: #525252;font-size: 30px}
</style>
<script></script>
