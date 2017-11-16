<template>
  <div class="footer">
    <ul>
      <li>
        <router-link to="/home">
          <span class="icon icon-home2"></span>
          <span class="text">{{home}}</span>
        </router-link>
      </li>
      <li>
        <router-link to="/explor">
          <span class="icon icon-compass2"></span>
          <span class="text">{{explor}}</span>
        </router-link>
      </li>
      <li>
        <router-link to="/public">
          <div class="middle">
            <span class="icon-plus"></span>
          </div>
        </router-link>

      </li>
      <li>
        <router-link to="/message">
          <span class="icon icon-bubble2"></span>
          <span class="text">{{message}}</span>
        </router-link>
      </li>
      <li>
        <router-link to="/person">
          <span class="icon icon-user"></span>
          <span class="text">{{person}}</span>
        </router-link>
      </li>

    </ul>
  </div>
</template>
<style>
ul li{list-style:none}
*{margin:0;padding:0}
.footer{height:90px;width:750px;position:fixed;bottom:0;border-top:1px solid #ccc;background-color:white;left:50%;margin-left:-375px;display: -webkit-flex;display: flex;}
.footer ul{height:90px;width:750px;display: -webkit-flex;display: flex;}
ul > li{flex:1}

ul > li a{display: inline-block;height: 100%;width: 100%;overflow: hidden;color: #929292}
.router-link-active{color:#e6816f}
.footer span{display: inline-block;}
.footer .middle{height:90px;width:100%;text-align: center;overflow: hidden;}
.footer .middle span{height:50px;width:50px;border-radius: 50%;background-color: red;color:white;margin-top:20px;line-height: 50px;text-align: center;font-size:25px}
.footer .icon{height:60px;width:100%;text-align: center;line-height: 80px;font-size: 35px;}
.footer .text{height:30px;width:100%;text-align: center;line-height: 30px;font-size: 16px;}


</style>
<script>
export default{
  data(){
    return {
      home:"首页",
      explor:"发现",
      message:"消息",
      person:"我的"
    }
  },
  methods:{

  }
}
</script>
