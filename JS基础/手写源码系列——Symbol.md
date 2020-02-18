## Symbol回顾


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

## 参考文章

> [ES6 系列之模拟实现 Symbol 类型](https://segmentfault.com/a/1190000015262174)
>
> [ES6系列二.一：Symbol原理](https://www.jianshu.com/p/ef93ac41b511)
>
> [ECMAScript 6入门——Symbol](http://es6.ruanyifeng.com/#docs/symbol)