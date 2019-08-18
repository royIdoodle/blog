# 深入浅出PM2



## 回顾一下Node

### Node的特点

* 异步I/O

**用户体验**上，I/O是*昂贵*的，异步可以多个I/O操作（操作之间没有依赖关系）并行出发，大大节省时间的总消耗。

**资源分配**上，多线程也可以达到并行完成任务的目的，但是又要面临线程锁、资源同步的问题，并且创建线程和执行期间线程上下文切换的开销也很大。异步I/O通过单线程的方式避免了线程死锁的问题；异步I/O远离阻塞，更好地使用CPU。

* 事件与回调

事件+回调的编程方式让你的代码变得轻量级、松耦合、只需关注事物点

* 单线程

单线程的优势还是没有了线程锁，不用考虑资源同步了

* 跨平台

一次编写多处运行，不用考虑平台兼容性问题



### Node的劣势

单线程带来的缺点：

- 性能：单线程无法充分利用服务器的多核CPU
- 稳定：单线程上抛出异常如果没有被捕获，整个进程都会崩溃



## 什么是PM2

**概念：**

`P(rocess)M(anager)2`是内置负载均衡的Node进程管理工具。

**特性：**

* 负载均衡
* 终端监控
* 停止不稳定的进程（避免无限循环）
* 不停机重载
* http api接口
* 日志管理
* 等等



## PM2的使用

#### 基本用法

```
npm install pm2 -g ： 全局安装。

pm2 start app.js ： 启动服务，入口文件是app.js。

pm2 start app.js -i [n] --name [name] ： 启动n个进程，名字命名为name。

npm restart  [name or id] ： 重启服务。

npm reload  [name or id] ： 和rastart功能相同，但是可以实现0s的无缝衔接；如果有nginx的使用经验，可以
对比nginx reload指令。

pm2 start app.js --max_memory_restart 1024M ： 当内存超过1024M时自动重启。 如果工程中有比较棘手的内
存泄露问题，这个算是一个折中方案。

pm2 monit ： 对服务进行监控。
```



#### 生产环境的使用

通过配置文件来设定更多参数，比如环境变量、启动模式、worker数量等等

```javascript
//config.json

{
    apps : [
        {
          	// 应用名称 nova
            name      : "nova",
          	// 内存上线为 300Mb
            max_memory_restart: "300M",
          	// 应用入口文件位置
            script    : "/root/nova/app.js",
          	// 输出文件存放位置
            out_file : "/logs/nova_out.log",
          	// 异常日志文件存放位置
            error_file : "/logs/nova_error.log",
          	// 启动实例个数
            instances  : 4,
          	// 子进程启动模式，cluster/fork
            exec_mode  : "cluster",
          	// 启动时的环境变量
            env: {
                NODE_ENV: "production"
            }
        }
    ]
 }
```



#### 查看应用状态

通过`pm2 list`命令可以查看所有应用的运行状况

![PM2 list](http://pm2.keymetrics.io/images/pm2-list.png)





## PM2的原理

`PM2`利用node的多进程机制，pm2本身是一个master来创建多个子进程，





> 参考资料
>
> * 《深入浅出NodeJS》朴灵
> * [PM2源码阅读](https://juejin.im/entry/5a52bf86f265da3e5234575a)
> * [关于Node进程管理器PM2使用技巧和需要注意的地方](https://github.com/jawil/blog/issues/7)
> * 