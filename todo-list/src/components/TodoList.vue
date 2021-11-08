<template>
  <h1 @click="add">{{count}}</h1>
</template>

<script setup>
import { ref } from 'vue'
let count = ref(1)
function add () {
  count.value++
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
