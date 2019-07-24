# webpack 5 带来了什么？

![img](https://cdn-images-1.medium.com/max/1600/1*gdoQ1_5OID90wf1eLTFvWw.png)

## Webpack 5已经到来
早在今年（2019年）的2月份，Webpack核心团队的Sean Larkin就做过一次关于webpack 5新特性的演讲，为大家讲述了webpack 5目前的开发进展，还有webpack 5会有哪些新特性。

![img](https://zens-pic.oss-cn-shenzhen.aliyuncs.com/static/gift/msc/webpack5banner.jpg)



现在，我们已经可以安装最新的webpack 5了，不过v5还不是正式版本。目前npm官网上的最新版本仍然是v4

![img](https://zens-pic.oss-cn-shenzhen.aliyuncs.com/static/gift/msc/webpack5npmjs.png)

为了体验v5版本，你需要使用下面的命令

```bash
yarn add webpack@next webpack-cli --dev

npm install webpack@next webpack-cli --save-dev
```



## webpack 5有哪些值得期待

本次major版本的修改主要参照下面的四个主要方向：

1. 利用`持久缓存`来提高构建性能
2. 优化算法和默认值来改善长期缓存
3. 重构了内部代码，而不引入重大变更
4. 为了未来可能的功能，引入一些重大的变更，以便可以让团队长时间停留在v5版本



#### 持久缓存（Persistent Caching）

先简单地概述一下webpack的工作原理：webpack读取入口文件（`entry`），然后递归查找所依赖的模块(`module`)，构建成一个“依赖图”，然后根据配置中的加载器(`loader`)和打包策略来对模块进行编译。

但是如果中间有文件发生变化了，上面所述的整个递归遍历流程会重新再进行一次。

大致流程如下：

![img](https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/01/1484692838webpack-dependency-tree.png)

webpack 5利用持久缓存优化了整个流程，当检测到某个文件变化时，依照“依赖图”，只对修改过的文件进行编译，从而大幅提高了编译速度。

经过测试，16000模块的单页应用，速度可以提高98%

![img](https://zens-pic.oss-cn-shenzhen.aliyuncs.com/static/gift/msc/faster.png)

![img](https://zens-pic.oss-cn-shenzhen.aliyuncs.com/static/gift/msc/98percent.png)

> 数据来自Sean Larkin的《The Road to Webpack 5》



#### 命名IDs

在v5版本中，开发模式将默认开启全新的命名chunk id算法，编译后的chunk名称可读性大大加强。

模块ID(Module ID)由其相对于上下文的路径而确定，代码块ID(Chunk  ID)由其内容来决定。

![img](https://zens-pic.oss-cn-shenzhen.aliyuncs.com/static/gift/msc/chunkids.png)

此外，在v5版本中还通过新的算法来帮助`长期缓存`（long-term caching）。在生产环境中，可以使用下面的配置来启用新算法：

```
chunkIds: "deterministic”,
moduleIds: “deterministic"
```

新算法会以确定的方式为模块(module)和代码块(chunk)分配一个非常短（3或4个字符）的数字ID。所以，今后再生产环境中，如果你修改了vendor bundle中的一个依赖，那些并没有发生变化的模块ID也不会改变，所以仍然可以被浏览器缓存，提高资源加载的性能。



#### NodeJS的polyfill脚本被移除

最开始，webpack的目标是允许在浏览器中运行大多数的Node模块，但是现在模块格局已经发生了重大变化，现在有很多模块是专门为前端开发的。在v4及以前的版本中，对于大多数的Node模块将自动添加polyfill脚本（腻子脚本）。

然而，这些大量繁杂的脚本都会添加到最终编译的代码中(bundle)，但其实通常情况下是没有必要的。在v5版本中将尝试停止自动地添加polyfill脚本，转而专注于前端兼容模块。

在迁移到v5版本时，最好尽可能使用前端兼容模块，如果一定要用到核心模块的话，请为其添加polyfill(webpack会通过错误提示来指导帮助开发者)。



#### 引入了更多新东西

v5版本的webpack将不再支持node 6，转而最低要求为**node 8**。除此之外，webpack 5还引入了webAssembly、Hashing、多线程、还有workers。



// TODO 

> webpack 5 将放弃node 6，转而基于node 8开发【现代化】

> Webpack 5将对于webpack 4中的所有警告改为异常【现代化】

> webpack 5将支持web Assembly，hashing，多线程，workers【现代化】

> 移除了哪些为了兼容低版本的“腻子脚本”【现代化】
>
> 确定性代码块（chunk）和模块ID
>
> Webpack 支持多线程



> 参考文章：
>
> * [New Features in Webpack 5](https://blog.logrocket.com/new-features-in-webpack-5-2559755adf5e/)
> * [The Road to Webpack 5](https://www.youtube.com/watch?v=J_sDa58UUQo&t=1070s)
> * [Changelog-v5](https://github.com/webpack/changelog-v5/blob/master/README.md)