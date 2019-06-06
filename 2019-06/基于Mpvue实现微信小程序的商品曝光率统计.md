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

如果一切顺利，每个具有`.product-exp`className的"商品组件"滚入屏幕内时，`observe()`方法的回调将被调用。可是。。。。事与愿违

最终的实验结果是，只有第一个`.product-exp`节点滚入屏幕内时，才会触发`observe()`的回调，这样是不能完成需求的。

