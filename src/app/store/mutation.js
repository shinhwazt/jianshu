import {RECORD_SCROLL,LOAD_TOPIC_DETAILS} from "./mutation-type"
export default{
  /*
  *记录首页的滚动条位置
  *param:name 哪个页面
  *param:height 滚动条位置
  */
  [RECORD_SCROLL](state,{name,height}){
    if(name=="home"){
      state.homeScroll = height;
    }else if(name=="explor"){
      state.explorScroll = height;
    }else if(name=="person"){
      state.personScroll = height;
    }
  },
  /*
  *加载评论热门最新发布内容
  *param:name 执行哪个模块
  *param:data 数据源
  */
  [LOAD_TOPIC_DETAILS](state,{name,data}){
    if(name=="public"){
      state.topicPublic = data;
    }else if(name=="comment"){
      state.topicComment = data;
    }else if(name=="hot"){
      state.topicHot = data;
    }
  }
}
