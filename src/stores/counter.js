import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
    title: "My counter title"
  }),
  actions: {
    increaseCounter(amount){
      this.count += amount
    },
    decreaseCounter(amount){
      this.count -= amount
    }
  },
  getters: {
    oddOrEven: (state) => {
      if(state.count % 2 === 0) return 'Even'
      return 'Odd'
    }
  }
})