# 什么是Promise串行

*Promise串行*是指每一个由promise封装的任务都顺序执行，即上一个执行完成后再执行下一个。

执行过程大致是下面的样子：

```
Task A | ------>|
Task B |         ------>|
Task C |                 ------>|
Task D |                         ------>|
```

# 为什么要讲Promise串行

我们平时会比较多的使用*并行*，即多个任务一起执行，也就是利用`Promise.all()`。但其实在日常开发中串行也是会遇到的，比如依次开启走廊的所有灯，或者其次让喷泉的水枪依次喷水等等。但是ES6中的`Promise`并没有对串行进行直接封装，所以需要我们自己来做。

![img](https://raw.githubusercontent.com/royIdoodle/blog/master/assert/喷泉动图.gif)

# 分布讲解Promise串行

### Promise串行习题

之前有小伙伴发给过我一道这样的面试题，所以本文准备通过这道题来实现一下Promise串行。

> 定义 `type Task = () => Promise` （即 Task 是一个 **类型**，是一个返回值是 Promise 的函数类型）
>
> 假设有一个数组 tasks: Task[]（每一项都是一个 Task 类型的数组）
>
> 实现一个方法 `function execute(tasks: Task[]): Promise`，该方法将 tasks 内的任务 **依次** 执行，并返回一个结果为数组的 Promise ，该数组包含任务执行结果（以执行顺序排序）
>
> > 要求：
> > 忽略异常任务，并在结果数组中用 null 占位
>
> > 限制：
> > 不添加任何依赖，仅使用 Promise，不使用 Generator 或 async



## 

