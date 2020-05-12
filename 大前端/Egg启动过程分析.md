# Egg启动过程分析

## 目录

 * 启动流程
 * 各个模块之间的关系
 * 如何做进程管理和监控
 * 依赖收集

## 整体流程

`egg-scripts`获取基础的启动参数，将egg传递给`egg-cluster`


## 涉及的模块

### egg-scripts

用于生产环境启动（或停止）应用

egg-scripts继承与[`common-bin`](https://github.com/node-modules/common-bin)（一个做基础命令行封装的工具），common-bin在egg生态中被广泛应用。
有空可以单独拉出来讲一次。

egg-scripts需要的参数如下


 | 参数名称 | 描述 | 类型 | 默认值 |
 | -----|-----|-----|-----|
 | title | 应用名称，用于终止应用使用 | string | package.json中的name |
 | workers | 进程数量 | number | process.env.EGG_WORKERS |
 | port | 端口号 | number | process.env.PORT |
 | env | 启动环境，egg会根据这个变量的值来读取相应的配置 | process.env.EGG_SERVER_ENV |
 | framework | 应用框架，即egg的路径 | string | ./node_modules/egg' |
 
 还有其他参数，重要度不高，这里不再赘述。
 
egg-scripts利用spawn再启动一层`egg-cluster`应用。
但是在`daemon`模式下和非`daemon`模式下，是有所不同的。 

### 残留疑问

 1. egg-scripts是如何获取默认的`framework`的
 2. daemon模式与非daemon的处理不同，两种模式要
 3. egg-scripts存在的意义是什么？

## egg-cluster
`egg-cluster`基于的是`event`模块，所以对于引用`egg-cluster`的模块（如`egg-scripts`）来说，是可以直接注册和监听事件的，也就是说他是一个`event-bus`。

#### 知识点
 1. 启动`egg-cluster`是调用的是`./lib/master.js`, master继承与`events`
 2. master通过`get-ready`模块，来给自身混入一个ready方法。`get-ready`模块通过ready方法注册`ready`的回调，也通过`this.ready(true)`来更新当前状态为ready。
 3. master主要的工作是注册各种事件，所有操作都是事件驱动非阻塞的，以下是他下面。
    * 创建`workerManager`
    * 创建`Messenger`
    * 监听信号
        * SIGINIT: kill(2) Ctrl-C
        * SIGQUIT: kill(3) Ctrl-\
        * SIGTERM: kill(15) Ctrl(15)
        * exit
    * 监听事件
        * agent-exit: 处理agentWorker退出相关的善后（移除事件监听函数）
            这里要注意的是，如果收到该事件，那一定要关闭当前的agentWorker；但是是否需要再重新启动一个，需要判断当前的`egg-cluster`的状态
            AgentWorker杀死之后，自己也要退出（process.exit(1)）**???**这是为什么？
        * agent-start: 创建AppWorkers(`this.forkAppWorkers()`)
        * app-exit: 处理AppWorker退出相关的善后（移除事件监听）
        * app-start:
        * reloaded-worker:
        * realport
    * 检测可用的端口号，然后创建AgentWorker(`this.forkAgentWorker()`)
    
 4. 创建AppWorkers和AgentWorker的过程   
    
 5. master的ready回调会做什么？
    * 分别向上面（`egg-scripts`）、下面的app和agent发送`egg-ready`事件，并带有响应的参数（端口号、地址、协议 还有相应的`options`）
    * 定期轮询worker和agent的生存状态
        


### 残留疑问

 1. egg-cluster是以何种方式启动的子进程
 2. egg-cluster是如何做的进程管理
 3. egg-cluster中的sticky-mode-server是什么
 
## egg-core
