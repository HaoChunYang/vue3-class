## TypeScript

[TypeScript 官网文档](https://www.tslang.cn/docs/handbook/basic-types.html)

按照约定类型，定义变量。可以提前进行检查。

## 泛型

简单说就是有些函数的参数，在定义的时候不确定是什么类型，而返回值类型需要根据参数来确定。

函数名的后面用尖括号包裹一个类型占位符。 `<某种类型>`

```ts
function test<某种类型>(args: 某种类型): 某种类型 {
  return args;
}
```

```ts
function getProperty<某种类型, 某种属性 extends keyof 某种类型>(
  o: 某种类型,
  name: 某种属性
): 某种类型[某种属性] {
  return o[name];
}
function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
  return o[name];
}
```

TypeScript 的类型是可以编程的。可以根据类型组合去推导新的类型，可以使用 extends 实现递归类型。

## vue3 中的 TypeScript

vue2 中的全部属性都挂在 this 上，而 this 是一个黑盒子，没有办法预知 this 上有什么数据，所以 vue2 对 TypeScript 的支持不够好。

使用。

```html
<script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    // 已启用类型推断
  });
</script>
```

- 在 vue 中，除了组件内部数据的类型限制，还需要对传递的属性 Props 声明类型。
  在`<script setup>`语法中，只需要在 `defineProps` 和 `defineEmits` 声明参数类型就可以了。

```ts
const props = defineProps<{
  title: string;
  value?: number;
}>();
const emit = defineEmits<{
  (e: "update", value: number): void;
}>();
```
