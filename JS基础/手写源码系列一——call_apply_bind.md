## 什么是手写源码

平时面试时会经常遇到让手写一个已有方法的实现，其实面试官是想考察你对于JS底层逻辑是否熟悉，经常面试会出的会在下面：

* call、apply、bind
* promise
* requireJS
* vue-router
* Array.prototype.indexOf()



## 回顾一下call、apply、bind的用法

```javascript
function sayHelloTo (to) {
	console.log(`${this.name} say hello to ${to}`)
}

var Jerry = {
  name: 'Jerry'
}
sayHelloTo.call(Jerry, 'Tom')
//Jerry say hello to Tom.

var Foo = {
  name: 'Foo'
}
sayHelloTo.apply(Foo, ['Bar'])
//Foo say hello to Bar.

var XYZ = {
  name: 'XYZ'
}
var say = sayHelloTo.bind(XYZ)
say('ABC')
//XYZ say hello to ABC.
```



### 先看call的实现

做一个`myCall`，来模拟`call`。

```javascript
Function.prototype.myCall = function(context, ...args) {
  // 判断是否是undefined和null
  if (typeof context === 'undefined' || context === null) {
    context = window
  }
  let fnSymbol = Symbol()
  context[fnSymbol] = this
  let fn = context[fnSymbol] (...args)
  delete context[fnSymbol] 
  return fn
}
```

核心思路是：

1. 为传入的`context`扩展一个属性，将原函数指向这个属性
2. 将`context`之外的所有参数全部传递给这个新属性，并将运行结果返回。

一些细节：

1. 利用**rest 参数**(`…args`)可以存储函数多余的参数
2. 为传入的`context`扩展参数扩展新属性使用了**`Symbol()`数据类型**，这样确保不会影响到传入的`context`，因为Symbol值一定是独一无二的。
3. 用**扩展运算符**(`…`)将原来是数组的`args`转发为逗号分隔一个个参数传入到函数中

为什么能找到`this.name`呢？因为`context[fnSymbol]`中的`this`指向的是`context`。



#### 手写apply方法

```javascript
Function.prototype.myApply = function(context, args) {
  // 判断是否是undefined和null
  if (typeof context === 'undefined' || context === null) {
    context = window
  }
  let fnSymbol = Symbol()
  context[fnSymbol] = this
  let fn = context[fnSymbol] (...args)
  return fn
}
```

思路和`call`是一样的只是传参不同方式而已



#### 手写bind方法

```javascript
Function.prototype.myBind = function(context) {
  // 判断是否是undefined和null
  if (typeof context === 'undefined' || context === null) {
    context = window
  }
  let fnSymbol = Symbol()
  context[fnSymbol] = this
  let fn = context[fnSymbol]
  return fn
}
```





