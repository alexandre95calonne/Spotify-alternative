import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
  const search = ref('')

  function setSearch(result: any) {
      search.value = result
  } 

  return {
      search, setSearch
  }
})
