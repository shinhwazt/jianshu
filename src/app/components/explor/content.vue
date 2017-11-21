<template>
  <div class="explor-type">
    <ul class="type-content">

      <li v-for="(category,index) in categorys" :class="'single-category'+(index+1)">{{category.text}}</li>


    </ul>
  </div>
</template>
<style>
.explor-type{height:160px;width:690px;margin:1px auto;overflow-x: auto;overflow-y: hidden}
.explor-type::-webkit-scrollbar{display: none}
.type-content{height:160px;font-size: 0;white-space: nowrap;}
.type-content li{width:200px;height: 90px;margin:35px 15px 35px 0;display: inline-block;border-radius: 5px;text-align: left;line-height: 90px;font-size: 35px;
box-sizing: border-box;padding-left: 30px;font-weight: bold;
    color: white;}
.single-category1{background-color:#469dfc;}
.single-category2{background-color:#ee8a72;}
.single-category3{background-color:#efbe62;}
.single-category4{background-color:#39c682;}

.single-category5{background-color:#69b1ca;}
.single-category6{background-color:#ffb951;}
.single-category7{background-color:#f89679;}
.single-category8{background-color:#d4b771;}

.single-category9{background-color:#6dcaf6;}
.single-category10{background-color:#4ecf8c;}
.single-category11{background-color:#c69efe;}
</style>
<script>
import categorys from "../../../../mock/categorys.js"
export default{
  data(){
    return {
      categorys:[]
    }
  },
  mounted:function(){
    this.categorys = categorys.categorys
  }
}
</script>
