import {RECORD_SCROLL} from "./mutation-type"
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
  }
}
