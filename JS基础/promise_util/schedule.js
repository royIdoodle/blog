class Schedule{
  constructor(tasks=[]){
    this.list = [...tasks];
    this.run();
  }

  add(task, index){
    this.list.splice(index, 0, task);
    return this;
  }

  run(){
    let temp = this.list.map((task, i)=>{
      return task.then((rs)=>{
        let t = temp.slice(0, i+1);

        for(; i>-1; i--){
          temp[i] = null;
        }

        Promise.all( t ).then(( a )=>{
          a = a.filter( a => a );
          a.length && console.log( a.join() );
        });

        return rs;
      });
    });
  }
}

function Task(data, delay = 1000) {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve( data );
    }, delay);
  })
}

let c = new Schedule([
  Task('task_1', 1000),
  Task('task_2', 3000),
  Task('task_3', 2000),
  Task('task_4', 4000),
]);

// c.run();
