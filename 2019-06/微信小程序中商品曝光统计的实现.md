## 什么"商品曝光率"？

在电商运营的工作中，运营人员需要关心很多数字，除了简单的PV和UV外，还有商品曝光量、商品浏览量、加入购物车、支付量，基于这些数字可以构建漏斗模型，帮助优化各个环节的转化，如下图。

![image](https://zens-pic.oss-cn-shenzhen.aliyuncs.com/static/gift/msc/funnel.png)

商品曝光量其实就是商品被用户看到的次数，换做程序员能听懂的话就是——商品组件滚入屏幕内，如下图

![image](https://zens-pic.oss-cn-shenzhen.aliyuncs.com/static/gift/msc/exposure.png)



## 如何统计商品曝光量

想要统计曝光量，其实只需要做两件事：

* 判断商品组件是否在屏幕（**Viewport**）内部
* 如果在屏幕内部，则将包含商品信息的曝光事件（Event）发送到日志服务器

在原生App和web中都有相应成熟的解决方案。但是今天要讨论的是**微信小程序**中的统计方式。



在web中统计曝光的话，可以监听滚动事件，然后根据元素的offset().top 和 body元素的scrollTop进行计算元素相对于Viewport的位置，从而判断当前页面中有哪些商品组件在屏幕内。但是微信小程序与web不同的是，他并没有**dom**，也就无法拿到你想要的元素。所以必须另寻其他解决方案。



## 微信小程序的IntersectionObserver接口

官方文档的解释是

```IntersectionObserver对象，用于推断某些节点是否可以被用户看见、有多大比例可以被用户看见。```

这个解释听上去刚好满足了"商品曝光量"统计的需求，但是事情并没那么顺利。

先看看官方示例：

```javascript
Page({
  onLoad: function(){
    wx.createIntersectionObserver()
      .relativeToViewport({bottom: 100})
      .observe('.target-class', (res) => {
        res.intersectionRatio // 相交区域占目标节点的布局区域的比例
        res.intersectionRect // 相交区域
        res.intersectionRect.left // 相交区域的左边界坐标
        res.intersectionRect.top // 相交区域的上边界坐标
        res.intersectionRect.width // 相交区域的宽度
        res.intersectionRect.height // 相交区域的高度
      })
  }
})
```

顺着这个思路，我们似乎只需要做两\件事就接近任务完成了：

* 给"商品组件"定义个`className`用与替换上面代码`.observe()`方法中的第一个参数，以便作为"被观察"节点。比如我们可以为"商品组件"追加一个`.product-exp`的class
* 在"商品组件"的节点上追加`dataset`，用于将商品信息事先埋好，以便`observe()`的第二个参数——回调中可以拿到，最终发送给日志服务器

![image](https://zens-pic.oss-cn-shenzhen.aliyuncs.com/static/gift/msc/code-class.png)

*商品组件伪代码示意图*

如果一切顺利，每个具有`.product-exp`的"商品组件"滚入屏幕内时，`observe()`方法的回调将被调用。可是。。。。事与愿违

最终的实验结果是，只有**第一个**`.product-exp`节点滚入屏幕内时，才会触发`observe()`的回调，也就是说在`.observer()`方法中的"选择器"并不是我们熟悉的Web中的选择器，无论是什么选择器，一次只能选择一个元素。



### 换用id选择器

之所以想用`class选择器`，是因为我们想用一个`IntersectionObserver`对象解决所有"商品组件"的问题。我们可以换个思路，为每个"商品组件"创建一个唯一的id（最好是随机数），然后将`id选择器`传入`.observer()`方法。

![image](https://zens-pic.oss-cn-shenzhen.aliyuncs.com/static/gift/msc/code-id.png)

*以上是示例伪代码*

### 何时创建IntersectionObserver对象

如果你使用**原生小程序**进行开发，应该在组件内部的`ready`生命周期内创建`IntersectionObserver`对象，组件内部的创建方法有些不同。```在自定义组件或包含自定义组件的页面中，应使用 `this.createIntersectionObserver([options])` 来代替。```

但是如果使用的是`Mpvue`框架进行开发的话，就会有点小麻烦。



### 在Mpvue中的特殊处理

**`Mpvue`中的组件并没有`ready`生命周期**，

原因是`Mpvue`通过模板`<template>`来实现组件，这个在绝大情况下是没有问题的，但是在使用`IntersectionObserver`对象的前提条件是选择器对应的节点已经存在，即组件已经`挂载`。

Mpvue中就会遇到几个问题：

* 无法知道"组件"是否已经`挂载`
* 如果在组件`挂载`之前创建`IntersectionObserver`对应的话，只会有警告并没有报错![image](https://zens-pic.oss-cn-shenzhen.aliyuncs.com/static/gift/msc/warning-intersection.png)
* `IntersectionObserver`对象在未找到节点时，返回值也并没有不同。最终结果就是在代码中，你无法获得失败的状态，也就无法进行重试。```失败状态被IntersectionObserver吞掉了```

需要换个思路。

微信小程序还提供了`SelectorQuery`对象，类似浏览器中的`document.querySelector`。用法有所不同，如下：

```javascript
// 创建SelectorQuery对象
const query = wx.createSelectorQuery()
// 选择节点
const nodeRef = query.select('#the-id')
// 添加节点的布局位置的查询请求。
nodeRef.boundingClientRect()
// 执行查询
query.exec(function(res){
  // 回调中可以拿到相关查询信息
})
```

在`SelectorQuery.exec()`的回调中，我们可以判断当前节点是否存在。

当节点存在时，回调中返回的数组第一位就是我们要的节点。

当节点不存在时，回调中返回的数组第一位是`null`。

于是可以基于`SelectorQuery`设定一套`IntersectionObserver`的重试机制，即当节点不存在时，各一定时间(如200ms)进行一次重试，这样就会保证`IntersectionObserver`一定可以找到"商品组件"了。



## 总结

`IntersectionObserver`可以用来检查某个节点是否已经滚入屏幕，但是如果节点不存在时，`IntersectionObserver`会吞掉失败状态，所以在此之前利用`SelectorQuery`对象来确定节点是否已经存在。

