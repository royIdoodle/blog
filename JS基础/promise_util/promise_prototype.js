const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

const Promise = function (executor) {
  this.state = PENDING;
  this.value = null;
  this.reason = null;
  this.onFulfilledCallbacks = [];
  this.onRejectedCallbacks = [];
  
  const resolve = (value) => {
    if (this.state === PENDING) {
      this.state = FULFILLED;
      this.value = value;
      this.onFulfilledCallbacks.forEach(callback => {
        callback(value);
      })
      this.onFulfilledCallbacks = [];
    }
  }
  
  const reject = (reason) => {
    if (this.state === PENDING) {
      this.state = REJECTED;
      this.reason = reason;
      this.onRejectedCallbacks.forEach(callback => {
        if (typeof callback === 'function') {
          callback(reason);
        }
      });
      this.onRejectedCallbacks = [];
  
    }
  }
  
  try {
    executor(resolve, reject)
  } catch (reason) {
    reject(reason)
  }
  
  
}

Promise.prototype.then = function (onFulfilledCallback, onRejectedCallback) {
  
  // FIXME
  return new Promise((resolve, reject) => {
    if (this.state === PENDING) {
      this.onFulfilledCallbacks.push(onFulfilledCallback);
      this.onRejectedCallbacks.push(onRejectedCallback);
    } else if (this.state === FULFILLED) {
      const returnValue = onFulfilledCallback(this.value);
      resolve(returnValue);
    }
  });
}

Promise.prototype.catch = function (onRejectedCallback) {
  
  if (this.state === PENDING) {
    if(typeof onRejectedCallback === 'function') {
      this.onRejectedCallbacks.push(onRejectedCallback);
    }
  } else if (this.state === REJECTED) {
    onRejectedCallback(this.reason);
  }
  // FIXME
  return new Promise((resolve, rejected) => {
  
  })
}

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('xxxx')
  }, 2000)
})

p.then(data1 => {
  console.log({data1});
})

p.then(data2 => {
  console.log({data2});
})

// const $Promise = require('./promise_polyfill');
// const pp = new $Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1)
//   }, 2000)
// })
//
// var ppp = pp.then((data) => {
//   console.log({data})
//   return 'new value'
// })
//
// pp.then((data2) => {
//   console.log({ data2 });
// })
