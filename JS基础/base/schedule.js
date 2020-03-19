class Scheduler {
  constructor() {
    this.pendingQueue = []
    this.index = 0
  }
  
  add(promiseCreator, resolve) {
    // 如果传入了 resolve，那么表示这个 promise 已经被创建了，现在需要做的就是执行 promiseCreator，执行完后进行 resolve，改变这个 promise 的状态
    if (resolve) {
      return promiseCreator().then(time => {
        --this.index
        this.next()
        resolve(time)
      })
    }
    return new Promise(_resolve => {
      if (this.index < 2) {
        ++this.index
        promiseCreator && promiseCreator().then(time => {
          --this.index
          this.next()
          _resolve(time)
        })
      } else {
        this.pendingQueue.push({
          promiseCreator,
          resolve: _resolve  // 缓存这个 promise 的 resolve 方法
        })
      }
    })
  }
  // 内部实现一个迭代器
  next() {
    const task = this.pendingQueue.shift()
    if (task) {
      const { promiseCreator, resolve } = task
      this.add(promiseCreator, resolve)
    }
  }
}

const timeout = (time) => new Promise(resolve => {
  setTimeout(resolve, time)
})

const scheduler = new Scheduler()
const addTask = (time, order) => {
  scheduler.add(() => timeout(time))
    .then(() => console.log(order))
}

addTask(2500, '1')
addTask(2500, '2')
addTask(300, '3')
addTask(400, '4')
// output: 2 3 1 4

// 一开始，1、2两个任务进入队列
// 500ms时，2完成，输出2，任务3进队
// 800ms时，3完成，输出3，任务4进队
// 1000ms时，1完成，输出1
// 1200ms时，4完成，输出4
