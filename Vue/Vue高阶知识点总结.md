# Vue高阶知识点总结

归纳总结Vue中一些高阶用法和高阶原理分析

## 目录

* Object.defineProperty和Proxy用什么区别
* Vue中的component、mixin和extend的区别
* Vue中自定义指令的原理
* Vuex的替代方案——EventBus如何实现




### Object.defineProperty和Proxy用什么区别

Vue 2.x中数据响应式是通过`Object.defineProperty`实现的，而Vue 3.x中改用了Proxy实现数据变化的监听。本节总价二者区别。



#### Object.defineProperty只能监听属性，Proxy可以监听整个Object

`Object.defineProperty()`接受三个参数对象、属性名字和一个描述符对象，所以他只能修改Object指定属性的`getter`和`setter`函数，来实现了对数据变化的监听。

而`Proxy`接受的参数有两个，第一个是所要代理的目标对象，第二个是配置对象，用于配置"代理规则"。所以`Proxy`可以监听整个Object的变化。



#### Object.defineProperty不能监听数组的变化

利用`Object.defineProperty()`修改对象指定属性的`getter`和`setter`后，如果属性是数组的话，通过如`push`和`shift`来修改该数组是不会触发它的`setter`方法的，`Vue`中是利用重新`Array.prototype.push()`来实现对于数组变化的监听。



#### this指向不同

`Object.defineProperty()`中的`setter`和`getter`中的`this`关键字指向的是原Object

`Proxy`中的拦截方法中的的`this`指向的是Proxy代理。

虽然 Proxy 可以代理针对目标对象的访问， 但它不是目标对象的透明代理，即不做任何拦截的情况下，也无法保证与目标对象的行为一致。



参考文章：

​	*  [如何监听数组变化?](https://juejin.im/post/5ade0e3df265da0b8e7f050b)

	* [Object.defineProperty和Proxy](https://segmentfault.com/a/1190000016570626)



## Vue中的component、mixin和extend的区别



### 共同点

`component`、`mixin`和`extend`都是Vue的**全局API**。

用法如下：

```javascript
// 全局注册一个组件 test-component
Vue.component('test-component', Vue.extend({
	template: '<div>{{msg}}</div>',
  data () {
    return {
      msg: 'It is a msg!'
    }
  }
}))
```

而`components`、`mixins`和`extends`都是实例化Vue时的**选项**。

用户如下:

```javascript
// 引用一个组件testComponent
import ComponentA from '...'
import ComponentB from '...' 
import someMixin from '...'
new Vue({
  name: 'one-component',
  // "继承"了ComponentA                   
  extends: ComponentA,
  // 当前组件内注册ComponentB
  components: {ComponentB},
  // 将someMixin中的选项(data、属性、生命周期等)混入到当前组件
  mixins: [someMixin]
})
```

他们都是为了代码复用而生。`component`创建了可以复用的组件；`extend`创建了可以复用的构造器；`mixin`直接将需要复用的代码"混合"进入目标组件。



### 功能的区别

从"全局污染"来讲一下，对于这三个vue全局api的污染程度排名： `mixin` > `component` > `extend`

`component`：注册或获取**全局组件**，注意是全局的。

`extend`是生成了一个新的Vue构造器，之后可以通过该构造器生成新的组件，已达到复用的目的。

`mixin`比较狠，如果一旦使用了`Vue.mixin()`则影响注册之后所有创建的每个 Vue 实例，影响范围巨大，一定要慎用。

```javascript
// myMixin.js 代码
export default {
  created () {
    console.log(this.$options.name)
  }
}

// 入口文件 main.js 代码
import myMixin from './myMixin'
...
Vue.mixin(myMixin)
...
```

以上代码运行后，会将使用到的所有组件的`name`全部都打印出来，因为每个组件的`created`生命周期都被混入了这段代码——`console.log(this.$options.name)`。



#### 其他不同

* 当他们作为选项时，接受的值不同：`extends`的值只能为一个，`mixins`的值是一个数组，`components`的值是一个对象。

* 当遇到命名冲突时，`extend`和`mixin`的行为不同，其中`mixin`的"合并"规则相对比较复杂，下面的例子可以说明：

```javascript
// myMixin 代码
export default {
  data () {
    return {
      bar: 'bar'
    }
  },
  methods: {
    sayHello () {
      console.log('Hello! in my mixin')
    }
  },
  mounted () {
    console.log('mounted in my Mixin')
  }
}

// 组件代码
import myMixin from './mixin/myMixin'

export default {
  name: 'app',
  mixins: [myMixin],
  data () {
    return {
      // data中遇到同名情况，以组件优先。所以最终的this.msg的值为'app message'
      msg: 'app message',
      foo: 'foo'
    }
  },
  methods: {
    // 遇到同名方法的情况，以组件优先。所以最终运行结果是'hello! in app.vue'
    sayHello () {
      console.log('hello! in app.vue')
    }
  },
  mounted () {
    // 遇到同名生命周期函数的情况，会将他们合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。所以最终会先输出‘mounted in my Mixin’再输出‘mounted in app‘
    console.log('mounted in app')
  },
  created () {
    this.sayHello()
    console.log(this.$data)
  }
}
```

最终运行结果如下：

```javascript
// hello! in app.vue
// {bar: "bar", foo: "foo", msg: "app message"}
// mounted in my Mixin
// mounted in app
```

而如果换成了`extend`时，则规则很简单



* 遇到命名
* 应用场景不同：正由于二者值不同，所以他们的应用场景也不同。个人认为，可以将`mixins`理解为是一种**渐进增强**，一个应用中可能需要很多*用来完成独立功能*的代码单元，比如缓存处理、http请求等等，可以将他们都拆分成一个个`mixin`，如果哪个组件（页面）需要，则可以"混入"进来，最终达到逐步增强目标组件的目的。然后，可以将`extends`理解为**继承**，





### 参数的区别





### 返回值的区别

`component`返回的永远是一个**组件**。



### 参考文章：

