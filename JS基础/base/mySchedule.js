class Scheduler {
  constructor () {
    this.queue = []
    this.counter = 0
  }
  
  add (promiseCreator, resolve) {
    if (resolve) {
      promiseCreator().then(() => {
        this.counter--
        this.next()
        resolve()
      })
    }
    
    return new Promise((_resolve) => {
      if (this.counter < 2) {
        this.counter++
        promiseCreator().then(() => {
          this.counter--
          this.next()
          _resolve()
        })
      } else {
        this.queue.push({
          promiseCreator,
          resolve: _resolve
        })
      }
    })
  }
  
  next () {
    const task = this.queue.shift()
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
