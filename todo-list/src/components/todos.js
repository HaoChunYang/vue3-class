import { computed, ref } from 'vue'

export function useTodos () {
  let title = ref('')
  let todos = ref([{ title: 'study vue', done: false }])
  let showModal = ref(false)

  function addTodos () {
    if (!title.value) {
      showModal.value = true
      setTimeout(() => {
        showModal.value = false
      }, 2000)
      return
    }
    todos.value.push({
      title: title.value,
      done: false
    })
    title.value = ''
  }

  function clear () {
    todos.value = todos.value.filter((v) => !v.done)
  }

  let active = computed(() => {
    return todos.value.filter((v) => !v.done).length
  })

  let all = computed(() => todos.value.length)

  let allDone = computed({
    get: function () {
      return todos.value.length && active.value === 0
    },
    set: function (value) {
      todos.value.forEach((todo) => {
        todo.done = value
      })
    }
  })

  function removeTodo (e, i) {
    todos.value.splice(i, 1)
  }
  return { title, todos, addTodos, clear, active, all, allDone, showModal, removeTodo }
}
