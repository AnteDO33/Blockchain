import { defineStore } from 'pinia'

// Inicijalna vrijednost countera (postavlja se pri stvaranju storea)
export const INITIAL_COUNT = 0

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: INITIAL_COUNT,
  }),
  actions: {
    increment() {
      this.count++
      console.log('Inkrementirano')
    },
    decrement() {
      this.count--
      console.log('Dekrementirano')
    },
  },
})
