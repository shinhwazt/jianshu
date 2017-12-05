export default{
  ["ACTIONS_HANDLER_TEST"]({commit,state},obj){
    
    setTimeout(function(){
      commit("HANDLER_TEST",obj);
    },1000)

  }
}
