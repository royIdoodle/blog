# Vue高阶知识点总结

归纳总结Vue中一些高阶用法和高阶原理分析

## 目录

* 




### Object.defineProperty和Proxy用什么区别

Vue 2.x中数据响应式是通过`Object.defineProperty`实现的，而Vue 3.x中改用了Proxy实现数据变化的监听。本节总价二者区别。



#### Object.defineProperty只能监听属性，Proxy可以监听整个Object

`Object.defineProperty()`接受三个参数对象、属性名字和一个描述符对象，所以他只能修改Object指定属性的`getter`和`setter`函数，来实现了对数据变化的监听。

而`Proxy`接受的参数有两个，第一个是所要代理的目标对象，第二个是配置对象，用于配置"代理规则"。所以`Proxy`可以监听整个Object的变化。



#### Object.defineProperty不能监听数组的变化

利用`Object.defineProperty()`修改对象指定属性的`getter`和`setter`后，如果属性是数组的话，通过如`push`和`shift`来修改该数组是不会触发它的`setter`方法的，`Vue`中是利用重新`Array.prototype.push()`来实现对于数组变化的监听。



#### this指向不同

`Object.defineProperty()`中的`setter`和`getter`中的`this`关键字指向的是原Object

`Proxy`中的拦截方法中的的`this`指向的是Proxy代理。

虽然 Proxy 可以代理针对目标对象的访问， 但它不是目标对象的透明代理，即不做任何拦截的情况下，也无法保证与目标对象的行为一致。



参考文章：

​	*  [如何监听数组变化?](https://juejin.im/post/5ade0e3df265da0b8e7f050b)

​	* [Object.defineProperty和Proxy](https://segmentfault.com/a/1190000016570626)