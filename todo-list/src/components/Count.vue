<template>
  <div @click="add">count: {{count}}</div>
</template>

<script setup>
import { computed } from '@vue/reactivity'
// import { useStore } from 'vuex'
import { useStore } from '../store/hvuex.js'
let store = useStore()
console.log('count vue :', store.state)
let count = computed(() => store.state.count)

function add () {
  store.commit('add')
  console.log('count vue add :', store.state)
}
</script>

<style>
</style>