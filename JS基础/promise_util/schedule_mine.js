schedule = function(tasks = []) {
  let squeue = [];
  let outIndex = 0;
  this.tasks = tasks
  task.forEach((t, index) => {
    task.slice(0, index).reduce((cur, pre) => {
      squeue.push(cur)
      pre.then(cur).then(data => {
        console.log(data)
      })
    }, Promise.resolve())
  })
  
  this.add = function(task, index) {
    const t = this.tasks.splice(index, 1, task)
    schedule(t)
  }
  
  return this
}

let s = new Schedule(myTasks)
s.add(someTask, 2).add(someOtherTask, 3);
