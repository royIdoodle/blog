const Task = (value, delay, status = 'fulfilled') => function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(value);
      if (status === 'fulfilled') {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  })
}
//
// var p1 = new Promise(resolve => {
//   setTimeout(() => {
//     console.log(1)
//     resolve(1)
//   }, 4500);
// })
//
// var p2 = new Promise(resolve => {
//   setTimeout(() => {
//     console.log(2)
//     resolve(2)
//   }, 4500);
// })
//
// var p3 = new Promise(resolve => {
//   setTimeout(() => {
//     console.log(3)
//     resolve(3)
//   }, 3000);
// })
//
// var p4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('xxx')
//   }, 2200)
// })

Promise.myAll = function (promises = []) {
  const len = promises.length;
  const result = Array.from({ length: len });
  let count = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((r, index) => {
      Promise.resolve(r).then(data => {
        count++;
        result[index] = data;
        if (count === len) {
          resolve(result);
        }
      }).catch(reason => {
        reject(reason);
      })
    })
  })
}

Promise.myRace = function (promises = []) {
  return new Promise((resolve, reject) => {
    promises.forEach(p => {
      Promise.resolve(p).then(data => {
        resolve(data);
      }).catch(reason => {
        reject(reason);
      })
    })
  })
}

Promise.prototype.myFinally = function (fn) {
  return this.then(() => {
    return fn()
  }).catch(() => {
    return fn();
  });
}

Promise.allSettled = function (promises = []) {
  let len = promises.length;
  let count = 0;
  let resultList = Array.from({ length: len });
  
  return new Promise((resolve, reject) => {
    promises.forEach((p, index) => {
      Promise.resolve(p).then(value => {
        count++;
        resultList[index] = {
          status: 'fulfilled',
          value,
        }
        if(count === len) {
          resolve(resultList);
        }
      }).catch(reason => {
        count++;
        resultList[index] = {
          status: 'rejected',
          reason,
        }
        if(count === len) {
          resolve(resultList);
        }
      })
    })
  })
}

Promise.async = function (promises = []) {
  return promises.reduce((prev, cur) => prev.then(result => {
    return new Promise((resolve) => {
      Promise.resolve(cur()).then(value => {
        resolve([...result, {
          status: 'fulfilled',
          value,
        }])
      }).catch(reason => {
        resolve([...result, {
          status: 'rejected',
          reason,
        }])
      })
    })
  }), Promise.resolve([]));
}

console.time('sync')
Promise.async([
  Task(1, 1000),
  Task(2, 2000),
  Task(3, 3000),
  Task(4, 1500, 'rejected'),
]).then(list => {
  console.log('list >>', list)
  console.timeEnd('sync')
}).catch(err => {
  console.log('err', err);
})