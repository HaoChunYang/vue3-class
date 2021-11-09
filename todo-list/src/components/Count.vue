<template>
  <div @click="add">count: {{count}}</div>
  <p>{{`${count} * 2 = ${double}`}}</p>
  <button @click="asyncAdd">async add</button>
</template>

<script setup>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
// import { useStore } from '../store/hvuex.js'
let store = useStore()
console.log('count vue :', store.state)
let count = computed(() => store.state.count)
let double = computed(() => store.getters.double)

function add () {
  store.commit('add')
  console.log('count vue add :', store.state)
}
function asyncAdd () {
  store.dispatch('asyncAdd')
}
</script>

<style>
</style>