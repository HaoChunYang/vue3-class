<template>
  <h1>Home</h1>
  <TodoList />
  <Todos />
  <rate
    :value="score"
    theme="yellow"
    @update-rate="update"
  >评分：</rate>
  <rate>
    <img
      src="/favicon.ico"
      width="16"
    >
  </rate>
  <rate-2 v-model="score">v-model版：</rate-2>
  <button @click="buttonClick">查看model值</button>
  <transition-box></transition-box>
  <show-title></show-title>

  <count></count>
</template>

<script setup>
import TodoList from '../components/TodoList.vue'
import Todos from '../components/Todos.vue'
import Rate from '../components/Rate.vue'
import Rate2 from '../components/Rate2.vue'
import TransitionBox from '../components/TransitionBox.vue'
import ShowTitle from '../components/ShowTitle.vue'
import Count from '../components/Count.vue'
import { ref } from '@vue/reactivity'

let score = ref(3)

function update (val) {
  console.log('update:', val)
  score.value = val
}
function buttonClick () {
  console.log('button:', score)
}
</script>
