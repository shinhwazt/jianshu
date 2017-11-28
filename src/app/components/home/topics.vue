<template>
  <div class="topic-wrapper">
    <div class="home-topics">
      <ul>
        <li v-for="topic in topics">
          <router-link to="/topicDetails/111">
            <img :src="topic">
            <span class="topic-icon"></span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>

</template>
<style>
.topic-wrapper{height: 140px;width: 750px;border-top:1px solid #ccc;border-bottom:1px solid #ccc}
.home-topics{height:140px;width:690px;overflow-y: hidden;;overflow-x: scroll;margin:0 auto;}
.home-topics::-webkit-scrollbar{display: none}
.home-topics ul{height:140px;white-space: nowrap;}

.home-topics li{height:90px;width:90px;border-radius: 10px;display: inline-block;margin:25px 15px;overflow: hidden;position: relative;}
.home-topics li img{height:90px;width:90px;}
.topic-icon{display: inline-block;height:18px;width:18px;box-sizing: border-box;border:2px solid white;background-color: blue;position: absolute;bottom: 0;
right: 0;border-radius: 50%}
</style>
<script>
import topicData from "../../../../mock/topics.js"
export default{
  data(){
    return {
      topics:[]
    }
  },
  mounted:function(){
    this.topics = topicData.authors
  }
}
</script>
