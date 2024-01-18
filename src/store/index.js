// stores/counter.js
import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification'

const useStore = defineStore('toast', {
  state: () => {
    return { toast: useToast() }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    showToast() {
      this.toast.success('The pokemons are ready!', { timeout: 3000 })
    },
  },
})

export default useStore
