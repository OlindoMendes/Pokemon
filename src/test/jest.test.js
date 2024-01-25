import { render } from '@testing-library/vue'
// import { setActivePinia, createPinia } from 'pinia'
import { mount } from '@vue/test-utils'
import SearchBar from '../components/layout/SearchBar.vue'
import { setActivePinia, createPinia } from 'pinia'
import { createApp } from 'vue'
import Toast from 'vue-toastification'
import { useStore } from '../store/index'


// same code as above...

// you don't need to create one app per test
const app = createApp({})
beforeEach(() => {
  const pinia = createPinia().use(useStore)
  app.use(pinia)
  setActivePinia(pinia)
})

// const store = useStore() 

describe('SearchBar', () => {
  // const store = useStore() // Inspect the raw component options
  it('has a computed hook', () => {
    expect(typeof SearchBar.computed)
  })

  it('renders an array when filteredPokemons prop is passed', () => {
    const wrapper = mount(SearchBar)
    expect(wrapper.filterdPokemons)
  })
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia())
  })
  

  // store.showToast()
})
