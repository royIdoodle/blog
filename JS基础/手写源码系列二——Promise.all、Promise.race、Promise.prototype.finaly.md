## 手写Promise相关方法

Promise是面试中经常遇到的，如果面试中面试官文你`Promise.all()`怎么用，那你面试的岗位可能是差不多**高级前端开发**的岗位，但如果让你手写一个`Promise.all()`那你面试的岗位应该就是**资深/专家前端开发**的岗位了



## 上期回顾

上期我们实现了函数的`call()`、`bind()`、`apply()`方法。

## Promise.all()

#### 先回顾一下Promise.all()的用法

**`Promise.all(iterable)`** 方法返回一个 [`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 实例，此实例在 `iterable` 参数内所有的 `promise` 都“完成（resolved）”或参数中不包含 `promise` 时回调完成（resolve）；如果参数中  `promise` 有一个失败（rejected），此实例回调失败（reject），失败原因的是第一个失败 `promise` 的结果。

例子如下：

```javascript
var promise1 = Promise.resolve(3);
var promise2 = 42;
var promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]
```



#### 手写实现Promise.all()方法

直接上代码：

```javascript
Promise.myAll = function (iterators) {
	const len = Array.from(iterators).length
	let count = 0
	let resultList = []
	return new Promise((resolve, reject) => {
        for (let p of iterators) {
            Promise.resolve(p)
                .then((result) => {
                    count++
                    resultList.push(result)
                    if (count === len) {
                        resolve(resultList)
                    }
                })
                .catch(e => {
                    reject(e)
                })
        }
	})
}
```

核心思路：

1. `Promise.myAll()`返回的肯定是一个`promise`对象，所以可以直接写一个`return new Promise((resolve, reject) => {})`(这应该是一个惯性思维)
2. 遍历传入的参数，用`Promise.resolve()`将参数"包一层"，使其变成一个`promise`对象
3. 关键点是何时"决议"，也就是`resolve`出来，所以这里做了计数器（`count`），每个内部promise对象决议后就将计数器加一，并判断加一后的大小是否与传入对象的数量相等，如果相等则调用`resolve()`，如果任何一个promise对象失败，则调用`reject()`方法。

一些细节：

1. 官方规定Promise.all()接受的参数是一个`可遍历的`参数，所以未必一定是一个数组，所以用`Array.from()`转化一下
2. 使用`for…of`进行遍历，因为凡是`可遍历的`变量应该都是部署了`iterator`方法，所以用`for…of`遍历最安全



## Promise.race()

#### 回顾一下race的用法

```javascript
var promise1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, 'one');
});

var promise2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then(function(value) {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// expected output: "two"
```



有了`Promise.all()`的铺垫，race就好写多了。

```javascript
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

核心思路：

1. 谁先决议那么就返回谁，所以将all的计数器和逻辑判断全部去除掉就可以了。



## Promise.prototype.finally()

回顾一下正常用法。

**`finally()`** 方法返回一个[`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。在promise结束时，无论结果是fulfilled或者是rejected，都会执行指定的回调函数。这为在`Promise`是否成功完成后都需要执行的代码提供了一种方式。

这避免了同样的语句需要在[`then()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)和[`catch()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)中各写一次的情况。

```javascript
let isLoading = true;

fetch(myRequest).then(function(response) {
    var contentType = response.headers.get("content-type");
    if(contentType && contentType.includes("application/json")) {
      return response.json();
    }
    throw new TypeError("Oops, we haven't got JSON!");
  })
  .then(function(json) { /* process your JSON further */ })
  .catch(function(error) { console.log(error); })
  .finally(function() { isLoading = false; });
```

