vue 借助 jsx 发挥了 javascript 的动态优势。在组件库和路由库这类场景中发挥着重要作用。可以实现更灵活的开发需求。

## h 函数

template 是 vue3 的默认写法。vue 会把 template 解析为 render 函数，之后组件运行时，通过 render 函数返回虚拟 DOM,可以在 vue devtools 中看到编译的结果。

适用于处理动态性更高的场景。但是如果复杂的场景，h 函数写起来就显得非常繁琐，需要自己把所有的属性都转变成为对象。

## JSX

在 javascript 中写 html。算是对 javascript 语法的一种扩展

安装 jsx 插件

```js
npm install @vitejs/plugin-vue-jsx -D
```
