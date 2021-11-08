<template>
  <button @click="toggle">{{buttonName}}</button>
  <transition name="fade">
    <h1 v-if="showTitle">hello bug</h1>
  </transition>
</template>

<script setup>
import { ref } from "@vue/reactivity";

let buttonName = ref('显示')
let showTitle = ref(true)

function toggle () {
  showTitle.value = !showTitle.value
  buttonName.value = showTitle.value ? '显示' : '隐藏'
  console.log('button name:', buttonName)
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>