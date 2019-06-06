## 什么"商品曝光率"？

在电商运营的工作中，运营人员需要关心很多数字，除了简单的PV和UV外，还有商品曝光量、商品浏览量、加入购物车、支付量，基于这些数字可以构建漏斗模型，帮助优化各个环节的转化，如下图。

![image](https://zens-pic.oss-cn-shenzhen.aliyuncs.com/static/gift/msc/funnel.png)

商品曝光量其实就是商品被用户看到的次数，换做程序员能听懂的话就是——商品组件滚入屏幕内，如下图

![image](https://zens-pic.oss-cn-shenzhen.aliyuncs.com/static/gift/msc/exposure.png)



## 如何统计商品曝光量

想要统计曝光量，其实只需要做两件事：

* 判断商品组件是否在屏幕（Viewport）内部
* 如果在屏幕内部，则将包含商品信息的曝光事件（Event）发送到日志服务器

在原生App和H5中都有相应成熟的解决方案。但是今天要讨论的是**微信小程序**中的统计方式。



