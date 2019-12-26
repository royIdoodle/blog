# 关于Promise的面试题

## 面试题列表

 * Promise的`then`方法第二个参数和`catch`有啥区别
 * Promise的构造函数是同步的？还是异步的？
 * 如何实现一个`Promise.all()`
 * 如何实现一个`Promise.race()`
 * 如何实现一个Promise的串行？
 
## 问题答案

```
Promise的`then`方法第二个参数和`catch`有啥区别
```

then的第二个参数的回调，只能拿到上一层抛出的异常，不能捕获第一个参数回调的异常。
catch可以上层所有的异常。
```javascript
p
  .then(function () {
    throw new Error('my error expression')
  }, function () {
    // 无法捕获上面的异常
  })
  .catch(function () {
    // 可以捕获上面的异常
  })
```


```markdown
Promise的构造函数是同步的？还是异步的？
```

是同步的。以下代码可以证明
```ecmascript 6
setTimeout(() => {
    console.log(0)
}, 0)
console.log(1)
var p = new Promise((resolve, reject) => {
    console.log(2);
    resolve();
    console.log(3);
})
p.then(() => {
    console.log(4)
})
console.log(5)

// 输出结果
// 1
// 2
// 3
// 5
// 4
// 0
```
```markdown
如何实现一个`Promise.all()`
```
这个之前有个总结，可以看下面的文章
[手写源码系列二——Promise相关方法](https://zhuanlan.zhihu.com/p/69457730)

```ecmascript 6
Promise.myAll = function (iterators) {
  const promises = Array.from(iterators)
  const len = promises.length
  let count = 0
  let resultList = []
  return new Promise((resolve, reject) => {
    promises.forEach((p, index) => {
      Promise.resolve(p)
        .then((result) => {
          count++
          resultList[index] = result
          if (count === len) {
            resolve(resultList)
          }
        })
        .catch(e => {
          reject(e)
        })
    })
  })
}
```

```markdown
如何实现一个`Promise.race()`
```

```ecmascript 6
Promise.myRace = function (iterators) {
    return new Promise((resolve, reject) => {
        for (let p of iterators) {
            Promise.resolve(p)
                .then((result) => {
                    resolve(result)
                })
                .catch(e => {
                    reject(e)
                })
        }
    })
}

```