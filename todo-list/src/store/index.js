import { createStore } from "vuex";
// import { createStore } from "./hvuex.js"

const store = createStore({
  state () {
    return {
      count: 666
    }
  },
  getters: {
    double (state) {
      return state.count * 2
    }
  },
  mutations: {
    add (state) {
      console.log('mutaions-add:', state)
      state.count++
    }
  },
  actions: {
    asyncAdd ({commit}) {
      setTimeout(() => {
        commit('add')
      }, 1000)
    }
  }
})

export default store