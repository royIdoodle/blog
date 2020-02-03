class Schedule{
  constructor(tasks){
    this.tasks = tasks.map((task,index)=>({task,sort:index+1}))
    this.result = []
    this.result.length = this.tasks.length + 1;
    this.start = 0;
    this.sort();
    this.tasks.forEach((item)=>{
      this.addThen(item)
    })
  }
  dealResult(){
    for(let i = this.start; i<this.result.length; i++){
      let value = this.result[i];
      if(value === undefined){
        for(let j = this.start; j < i; j++){
          console.log(this.result[j]);
        }
        this.start = i;
        break;
      }
    }
  }
  sort(){
    this.tasks = this.tasks.sort((a,b)=>a.sort-b.sort);
  }
  addThen(item){
    Promise.resolve(item.task).then(data=>{
      this.result[this.tasks.indexOf(item)] = data;
      this.dealResult();
    })
  }
  add(task,sort){
    if(!sort){
      sort = this.tasks.length;
    }
    let taskItem = {task,sort}
    this.tasks.push(taskItem);
    this.result.length = this.result.length + 1;
    this.sort();
    this.addThen(taskItem)
    return this;
  }
}


function Task(data, delay = 1000) {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve( data );
    }, delay);
  })
}

let schedule = new Schedule([
  Task('t1', 1100),
  Task('t2', 1000),
  Task('t3', 5200),
])

schedule.add(Task('t4', 200), 2);
