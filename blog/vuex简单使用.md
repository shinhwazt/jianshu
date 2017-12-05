# Vuex简单使用

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化

我们可以把vuex当做一个中央数据集合，任何一个组件都可以使用并修改里面的数据，所以vuex的核心就是数据。

vuex包括5部分：State、Getter、Mutation(同步操作)、Action、Module


State：用来保存数据

Getter：用来整合过滤State中的数据

Mutation：用来修改State中的数据

Action：用来触发Mutation继而修改State中的数据

Module：对于一个复杂应用来用对State、Getter、Mutation、Action进行整合

使用vuex包括下步骤：

1.定义State

2.定义Getter

3.定义Mutation

4.定义Action

5.定义Module

6.实例化一个Vuex对象（new Vuex.Store()）

7.将Vuex实例挂载在Vue实例中（new Vue({store})）

## 声明一个vuex

一个最简单的vuex可以由State、Mutation这两个部分组成

1.定义State、Mutation

### State使用

State就是json以键值对的方式来存储数据

定义一个State：

state.js

```js
const state = {
  author:"Shinhwa",
  version:"1.0.0"
}
```
### Mutation使用

Mutation也是一个json是一个存储函数的集合

定义一个Mutation

mutation.js

```js
const mutations = {
  handlerA:function(state,obj){
    if(obj.xx==yy){
      state.author = "update"
    }
  },
  handlerB:function(state,obj){
  }
}
```
Mutation的唯一作用就是用来修改State中的数据，Mutation中的每一个函数的第一个参数都是state，代指定义的State对象（即上一步中的state）

vuex禁止我们直接修改State中的对象，但是在非严格模式下即使直接修改State中的值，也可以正常使用，但是为了对数据流更好的管理，如果需要修改State中的数据
还是要通过Mutation

2.实例化Vuex对象

index.js

```
import Vue from "vue"
import Vuex from "vuex"
import mutations from "./mutation.js"
import state from "./state.js"
Vue.use(Vuex)
export default new Vuex.Store({
  state,mutations,
  strict: true
});
```
3.Vuex对象挂载到vue对象上

```
new Vue({
  el:"#app",
  components:{
  },
  router,
  store,
  methods:{
  },
})
```
## 在组件中使用vuex中的数据

在html模板中可以直接通过$store.state.author来使用，或者在js通过computed来声明一个计算属性更方便的来使用

```js
computed:{
  author(){
    return this.$store.state.author
  }
}
```
## 组件中修改vuex中的数据

修改vuex中的数据要要通过Mutation，提交Mutation有两种方式：

1.在组件中直接通过this.$store.commit('handlerA')来提交Mutation从而改变数据

2.使用mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用（需要在根节点注入 store）

操作步骤为：

1.从vuex中引入mapMutations 辅助函数

```js
import { mapMutations } from 'vuex'
```

2.在methods通过mapMutations配置映射

```js
...mapMutations([
  'handlerA','handlerB'
]),
```

3.通过this.handlerA直接使用

### Getter使用

Getter是在State的基础上对State中的数据整合派生出一些新的属性，来让我们更方便的使用。

[官网详细介绍](https://vuex.vuejs.org/zh-cn/getters.html)

### Action使用






