// import { createStore } from "vuex";
import { createStore } from "./hvuex.js"

const store = createStore({
  state () {
    return {
      count: 666
    }
  },
  mutations: {
    add (state) {
      console.log('mutaions-add:', state)
      state.count++
    }
  }
})

export default store