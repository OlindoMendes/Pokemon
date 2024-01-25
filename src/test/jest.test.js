import { render } from '@testing-library/vue'
// import { setActivePinia, createPinia } from 'pinia'
import { mount } from '@vue/test-utils'
import SearchBar from '../components/layout/SearchBar.vue'
import { setActivePinia, createPinia } from 'pinia'
import { createApp } from 'vue'
import Toast from 'vue-toastification'
import { useStore } from '../store/index'

const app = createApp({})
beforeEach(() => {
  const pinia = createPinia().use(useStore)
  app.use(pinia)
  setActivePinia(pinia)
})

describe('SearchBar', () => {
  it('has a computed hook', () => {
    expect(typeof SearchBar.computed)
  })

  it('renders an array when filteredPokemons prop is passed', () => {
    const wrapper = mount(SearchBar)
    expect(wrapper.filterdPokemons)
  })
  beforeEach(() => {
    setActivePinia(createPinia())
  })
})
