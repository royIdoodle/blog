# 手写源码系列四—— new和instanceof

## 往期回顾

* [手写源码系列一——call、apply、bind](https://github.com/royIdoodle/blog/blob/master/JS基础/手写源码系列一——call_apply_bind.md)
* [手写源码系列二——Promise.all、Promise.race、Promise.prototype.finaly](https://github.com/royIdoodle/blog/blob/master/JS基础/手写源码系列二——Promise.all、Promise.race、Promise.prototype.finaly.md)
* [手写源码系列三——JSON.stringfy、JSON.parse](https://github.com/royIdoodle/blog/blob/master/JS基础/手写源码系列三——JSON.stringfy、JSON.parse.md)



## new的实现

### 用法

`new`操作符是用来创建特定引用类型的**实例**。`new`操作符后面的是一个**构造函数**。

举个例子：

```javascript
function Person (name, age) {
	this.name = name
	this.age = age
	this.sayName = function () {
		console.log(`my name is ${this.name}`)
	}
}
// 创建一个Person的实例—— Tom
var Tom = new Person('Tom', 5)
console.log(Tom.name) //'Tom'
console.log(Tom.age) //5
Tom.sayName() //'my name is Tom'
```

> **使用`new`来调用函数，或者说发生构造函数调用时，会自动执行下面的操作**
>
> 1. 创建（或者说构造）一个全新的对象。
> 2. 这个新对象会执行`[[Prototype]]`链接
> 3. 这个心对象会绑定到函数调用的`this`
> 4. 如果函数没有返回其他对象，那么`new`表达式中的函数调用会自动返回这个新对象。



### 实现

那么接下来通过代码来实现类`new操作符`的处理过程

```javascript
// 依然是上面的Person的例子，希望用下面的方式来实现 new Person('Tom', 5)这样的操作
var Tom = create(Person, 'Tom', 5)
```

`create`的代码实现：

```javascript
/**
* 创建实例
* @param Con 构造函数
* @param args 构造用参数
* @returns {*}
*/
function create(Con, ...args) {
    // 创建一个空的对象
    let obj = new Object()
    // 链接到原型
    obj.__proto__ = Con.prototype
    // 绑定 this，执行构造函数
    let result = Con.apply(obj, args)
    // 确保 new 出来的是个对象
    return typeof result === 'object' ? result : obj
}
```



## instanceof的实现

### 用法
JavaScript提供了`typeof`来判断变量的类型，然而`typeof`在很多时候并不能返回变量的精确类型，比如是否为`array`，所以可以利用`instanceof`来作为替代方案来实现。

`instanceof`可以判断
```javascript
var list = [1, 2, 3, 4]
console.log(typeof list) // 'object'
console.log(list instanceof Array)  // true
```

### 实现
```javascript
// 希望通过下面的用法，来实现上面的 list instanceof Array
console.log(instanceOf(list, Array))
```

在网上找来下面的代码，思路比较清晰，就不做修改了。
```javascript
function  instance_of (L, R){
    var O = R.prototype;    //右边表达式的显示原型
    var L = L._proto_;  //左边的表达式的隐式原型
    //从原型链向上寻找
    while(true){
        if(L === null){
            return false;
        };
        if(O === L){
            return true;
        };
        L = L._proto_;
    }
}
```








> 参考文章
>
> * [FE-Interview 高级 new](http://blog.poetries.top/FE-Interview-Questions/advance/#_5-new)
> * [浅谈 instanceof和typeof的实现原理](http://www.bingshangroup.com/blog/2019/07/02/lzy/typeof/#more)
> * [你不知道的——instanceof](https://juejin.im/post/59cbc479518825790e5cb581)
> * 《你不知道的JavaScript（上卷）》