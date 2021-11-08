<template>
  <div>
    <input
      type="text"
      v-model="title"
      @keydown.enter="addTodos"
    >
    <button
      v-if="active < all"
      @click="clear"
    >清理</button>
    <ul v-if="todos.length">
      <transition-group
        name="flip-list"
        tag="ul"
      >
        <li
          v-for="(todo, index) in todos"
          :key="todo.title"
        >
          <input
            type="checkbox"
            v-model="todo.done"
          >
          <span :class="{ done: todo.done }">{{ todo.title }}</span>
          <span
            class="remove-button"
            @click="removeTodo($event, index)"
          >❌</span>
        </li>
      </transition-group>
    </ul>
    <div v-else>暂无数据</div>
    <div>全选
      <input
        type="checkbox"
        v-model="allDone"
      >
      <span>{{ active }} / {{ all }}</span>
    </div>
    <transition name="modal">
      <div
        class="info-wrapper"
        v-if="showModal"
      >
        <div class="info">大哥，你还没有输入！</div>
      </div>
    </transition>
  </div>

  <span class="dustbin">
    🗑
  </span>
  <div class="animate-wrap">
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
    >
      <div
        class="animate"
        v-show="animate.show"
      >
        📋
      </div>
    </transition>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useTodos } from './todos'

let animate = reactive({
  show: false,
  el: null
})
function beforeEnter (el) {
  let dom = animate.el
  let rect = dom.getBoundingClientRect()
  let x = window.innerWidth - rect.left - 60
  let y = rect.top - 10
  el.style.transform = `translate(-${x}px, ${y}px)`
}
function enter (el, done) {
  document.body.offsetHeight
  el.style.transform = `translate(0,0)`
  el.addEventListener('transitionend', done)
}
function afterEnter (el) {
  animate.show = false
  el.style.display = 'none'
}
function removeTodo (e, i) {
  animate.el = e.target
  animate.show = true
  todos.value.splice(i, 1)
}

let { title, todos, addTodos, clear, active, all, allDone, showModal } = useTodos()


</script>


<style scoped>
.dustbin {
  position: fixed;
  right: 10px;
  top: 10px;
}
.animate-wrap .animate {
  position: fixed;
  right: 10px;
  top: 10px;
  z-index: 100;
  transition: all 0.5s linear;
}

.done {
  color: gray;
  text-decoration: line-through;
}
.info-wrapper {
  position: fixed;
  top: 0;
  left: calc(50% - 100px);
  width: 200px;
  background-color: #f50;
}
.info {
  color: #fff;
  padding: 20px;
}
.modal-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}
.modal-enter-active {
  transition: all 0.3s ease;
}
.modal-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.modal-leave-active {
  transition: all 0.3s ease;
}
.flip-list-move {
  transition: transform 5s ease;
}
.flip-list-enter-active,
.flip-list-leave-active {
  transition: all 1s ease;
}
.flip-list-enter-from,
.flip-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>