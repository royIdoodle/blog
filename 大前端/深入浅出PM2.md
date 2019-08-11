# 深入浅出PM2



## 回顾一下Node



## 什么是PM2

**概念：**

`P(rocess)M(anager)2`是内置负载均衡的Node进程管理工具。

**特性：**

* 日志管理
* 负载均衡
* 终端监控
* 





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







## PM2的原理

