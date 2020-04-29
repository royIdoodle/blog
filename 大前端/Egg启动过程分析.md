# Egg启动过程分析

## 目录

 * 启动流程
 * 各个模块之间的关系
 * 如何做进程管理和监控
 * 依赖收集


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
