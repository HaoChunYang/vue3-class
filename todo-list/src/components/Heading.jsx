import { defineComponent, h } from 'vue'

export default defineComponent({
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  // 这里的setup函数返回值是一个函数，就是我们所说的render函数。
  // render函数返回h函数的执行结果。
  // h 函数的第一个参数就是标签名，可以方便地使用字符串拼接的方式。
  // setup(props, {slots}) {
  //   return () => h(
  //     'h' + props.level, // 标签名
  //     {}, // props 或者 attribute
  //     slots.default() // 子节点
  //   )
  // }
  
  // 下面使用jsx语法
  setup (props, {slots}) {
    const tag = 'h' + props.level
    return () => <tag>{slots.default()}</tag>
  }
})