<template>
  <div
    class="box"
    :style="{width: width + 'px'}"
  ></div>
  <button @click="change">change</button>
  <div class="auto-move-box"></div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

let width = ref(180)
function change () {
  width.value += 100
}
</script>

<style>
.box {
  background: rosybrown;
  height: 100px;
  transition: width 1s linear;
}
.auto-move-box {
  width: 30px;
  height: 30px;
  background: rosybrown;
  animation: move 2s linear infinite;
  position: relative;
}
@keyframes move {
  0% {
    left: 0px;
  }
  50% {
    left: 200px;
  }
  100% {
    left: 0px;
  }
}
</style>