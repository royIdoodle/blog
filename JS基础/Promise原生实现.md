# Promise原生实现

## 为什么要讲Promise的原生实现

1. 通过实现Promise的过程可以加深对于Promise的理解、提升使用Promise的熟练度
2. “手写Promise”也是面试中经常会遇到的一道考题
3. 目前网上关于Promise实现的文章都或多或少存在问题

## 回顾Promise的知识点

为了更好的实现Promise，首先回顾一下关于Promise的几个关键知识点。

#### Promise的构造函数

```javascript
new Promise((resolve, reject) => {
  // 成功的时候调用resolve，并将该Promise的状态变更为fulfilled
  // 失败的时候调用reject，并将该Promise的状态变更为rejected
})
```

构造函数接受一个函数类型的参数——`executor`，并且`resolve`和`reject`两个函数以参数的传递给`executor()`。



#### 通过then()和catch()方法注册成功回调和拒绝回调

当`Promise`的状态发生变更后，之前通过调用`promise`实例上的`then()`方法注册的回调都会被执行。

```javascript
  // 通过then注册回调
  const p = new Promise(resolve => {
    setTimeout(() => {
      resolve('foo')
    }, 500)
  })
  
  p.then(value => {
    console.log('resolve 1:', value)
  })
  
  p.then(value => {
    console.log('resolve 2:', value)
  })
  
  // 500ms后 输出
  // resolve 1: foo
  // resolve 2: foo
```



#### Promise的状态不可逆

Promise的初始状态是`pengding`，一旦变更为`fulfilled`（完成）或者`rejected`（拒绝）时，状态就不可再修改。

```javascript
  // Promise的状态一旦变更，则不可逆转
  const p = new Promise((resolve, reject) => {
    resolve('foo')
    setTimeout(() => {
      reject('bar')
    }, 200)
  })
  
  p.then(value => {
    console.log('resolve value:', value)
  })
  
  p.catch(reason => {
    console.log('reject reason:', reason)
  })
  
  // 输出
  // resolve value: foo
  // catch回调不会被调用
```



#### then()和catch()注册的回调都只会被执行一次

示例代码中，即使在构造函数中多次调用`resolve()`，一旦`then()`执行完成后不再执行。

```javascript
  // then方法注册的回调只会被调用一次
  const p = new Promise((resolve, reject) => {
    resolve('foo')
    setTimeout(() => {
      resolve('foo 1')
    }, 500)
    
    setTimeout(() => {
      resolve('foo 2')
    }, 1000)
  })
  
  p.then(value => {
    console.log('resolve value:', value)
  })
  // 输出
  // resolve value: foo
  // foo 2 foo 3都不会输出
```



#### Promise链式

Promise的`then()`和`catch()`返回的都是一个新的`Promise`实例，所以可以在`then()`后面继续调用`then()`，最终达到了一个链式操作的效果。

```javascript
  
  // then和catch返回的都是promise实例
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
    }, 200)
  })
  
  // then回调中的返回值会被它后面的then拿到
  let p1 = p.then(value => {
    return value + 100
  })
  
  p1.then(value => {
    console.log('resolve p1 value:', value)
  })
  
  // 输出
  // resolve p1 value: 101
  
  // then回调中的返回值如果是一个Promise实例，会被递归展开，直到取到一个同步值为止
  let p2 = p.then(value => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(value + 2)
      })
    })
  })
  
  p2.then(value => {
    console.log('resolve p2 value:', value)
  })
  
  // 输出
  // resolve p2 value: 3
```





## 代码实现

核心思路：

1. 内部要维护实例的`state` 、`value`、`reason`
2. `then()`和`catch()`分别向成功和失败的回调队列里添加回调
3. `then()`和`catch()`返回的是一个Promise实例，注册回调前要判断当前状态（`this.state`），已经完成的话，立即调用`onFulfilledCallback()`，如果是`pending`状态，则将当前的回调添加到相应的回调队列里
4. 函数`resolveNext`是专门解决回调执行的问题，利用`try..catch`包装进行异常捕获；判断传入回调的返回值是否为一个Promsie的实例，如果是的话要进行递归展开。

```javascript
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

const $Promise = function (executor) {
  this.state = PENDING
  this.value = null
  this.reason = null
  this.onFulfilledCallbacks = []
  this.onRejectedCallbacks = []
  
  const resolve = (value) => {
    if (this.state === PENDING) {
      this.state = FULFILLED
      this.value = value
      this.onFulfilledCallbacks.forEach(callback => {
        setTimeout(() => {
          callback(value)
        }, 0)
      })
    }
  }
  
  const reject = (reason) => {
    if (this.state === PENDING) {
      this.state = REJECTED
      this.reason = reason
      this.onRejectedCallbacks.forEach(callback => {
        setTimeout(() => {
          callback(reason)
        }, 0)
      })
    }
  }
  
  try {
    executor(resolve, reject);
  } catch (reason) {
    this.reason = reason
    reject(reason)
  }
}

function resolveNext (callback, value, resolve, reject) {
  if (typeof callback === 'function') {
    try {
      const returnValue = callback(value)
      if (returnValue instanceof $Promise) {
        returnValue.then(resolve, reject)
      } else {
        resolve(returnValue)
      }
    } catch (reason) {
      reject(reason)
    }
  } else {
    resolve(callback)
  }
}

$Promise.prototype.then = function (onFulfilledCallback, onRejectedCallback) {
  return new $Promise((resolve, reject) => {
    try {
      if (this.state === FULFILLED) {
        resolveNext(onFulfilledCallback, this.value, resolve, reject)
      } else if (this.state === REJECTED) {
        resolveNext(onRejectedCallback, this.reason, resolve, reject)
      } else if (this.state === PENDING) {
        this.onFulfilledCallbacks.push((value) => {
          resolveNext(onFulfilledCallback, value, resolve, reject)
        })
        this.onRejectedCallbacks.push(reason => {
          resolveNext(onRejectedCallback, reason, resolve, reject)
        })
      }
    } catch (reason) {
      reject(reason)
    }
  })
}

$Promise.prototype.catch = function (onRejectedCallback) {
  return new $Promise((resolve, reject) => {
    if (this.state === REJECTED) {
      resolveNext(onRejectedCallback, this.reason, resolve, reject)
    } else if (this.state === PENDING) {
      this.onRejectedCallbacks.push((reason) => {
        resolveNext(onRejectedCallback, reason, resolve, reject)
      })
    }
  })
}
```



## 总结

>  上面的代码实现主要是学习之用，不要用在生产环境🤣。

本文的源码可以在下面的GitHub链接中找到：

https://github.com/royIdoodle/promise-for-interview

今后有机会给大家分享**可以取消的Promise**。

