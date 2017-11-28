# Vue生命周期
![](https://github.com/shinhwazt/jianshu/blob/master/blog/images/lifecycle.png)


## vue实例生命周期

在vue2中实例共有8个生命周期分别为：


beforeCreate,created,beforeMount,mounted,beforeUpdate,updated,beforeDestroy,destroyed


组件加载时的执行顺序为：beforeCreate->created->beforeMount->mounted


beforeUpdate,updated在data里面的数据发生变化时执行


beforeDestroy,destroyed在组件销毁时执行，如果组件被keep-alive声明则beforeDestroy,destroyed不会被调用

## 兄弟组件的生命周期先后顺序


组件被加载时被调用的生命周期为beforeCreate,created,beforeMount,mounted

假如在一个组件中包含两个组件(componentA,componentB)，详细代码如下：
```
<template>
  <div>
    <componentA></componentA>
    <componentB></componentB>
  </div>
</tempalte>
```
则componentA组件的beforeCreate,created,beforeMount优先被执行，之后componentB的beforeCreate,created,beforeMount被执行(在html模板中哪个组件在前哪个组件的生命周期先执行)

之后componentA的mounted执行然后componentB的mounted执行，mounted生命周期是最后才会执行的

## 父子组件的生命周期先后顺序

在父子组件中父组件的beforeCreate,created,beforeMount优先被执行，之后子组件的生命周期按照子组件的运行规则来运行，父组件的mounted一定是最后才被执行的



