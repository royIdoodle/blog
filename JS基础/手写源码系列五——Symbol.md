## Symbol回顾
`Symbol`具有以下特性：
 1. 不可以当做构造函数，即不可以与`new`操作符一起使用，否则会报错。
```javascript
var mySymbol = new Symbol('foo')
// Symbol is not a constructor
```
 2. `Symbol`接受的参数是字符串，如果不是字符串会调用参数的`toString`方法进行转换
 3. `Symbol.for()`返回的是一个`Symbol`类型的值，传入相同值的参数，那么返回的Symbol也相同
```javascript
var s1 = Symbol('foo')
var s2 = Symbol('foo')
console.log(s1 === s2)
// true
```
 4. `Symbol.keyFor()`返回的是通过`Symbol.for()`构建的`symbol`的key值
```javascript
var s1 = Symbol('foo')
var s2 = Symbol('bar')
console.log(Symbol.keyFor(s1), Symbol.keyFor(s2))
// foo, bar
```
 5. `Symbol`类型值作为一个对象属性存在时，是不可以被枚举的
 

## 代码实现

### 生成唯一Key的方式
这里需要做一个函数，每次生成一个唯一的key值，并且每次调用这个函数生成的key都不一样。这里需要利用闭包来实现+高阶函数的方式实现。
```javascript
const generateName = (function() {
  let prefix = 0;
  return function(descriptionKey) {
    return '@@' + descriptionKey + '_' + ++prefix;
  }
})()
```
todo： 需要解释一下`generateName()`的思路。

### 最终代码


## 参考文章

> [ES6 系列之模拟实现 Symbol 类型](https://segmentfault.com/a/1190000015262174)
>
> [ES6系列二.一：Symbol原理](https://www.jianshu.com/p/ef93ac41b511)
>
> [ECMAScript 6入门——Symbol](http://es6.ruanyifeng.com/#docs/symbol)
