<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <SearchBar v-on:search-pokemon="searchedPokemon" />
      <PokemonDetailModal v-if="store.toggleModal" />
      <div
        class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <div
          v-for="(pokemon, index) in searchingPokemon"
          v-bind:key="index"
          class="group relative"
        >
          <a href="#" v-on:click="showDetails(pokemon.ID)">
            <div
              class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
            >
              <img
                v-bind:src="pokemon.images"
                v-bind:alt="pokemon.image"
                class="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>

            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm font-medium text-gray-700">
                  <a v-bind:href="pokemon.href">
                    <span aria-hidden="true" class="absolute inset-0" />
                    {{ pokemon.name }}
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">{{ pokemon.type }}</p>
              </div>
              <p class="text-sm text-gray-900">
                {{ pokemon.abilities }}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import SearchBar from '../components/layout/SearchBar.vue'
import PokemonDetailModal from '../components/layout/PokemonDetailModal.vue'
import useStore from '../store'

const store = useStore()
const toggle = ref(null)
const filterPokemon = ref('')

const searchedPokemon = (search) => {
  filterPokemon.value = search
}

const searchingPokemon = computed(() => {
  return store.displayPokemon.filter((poke) =>
    poke.name.toLowerCase().includes(filterPokemon.value.toLowerCase()),
  )
})

const showDetails = (id) => {
  toggle.value = true
  store.getID(id)
  store.showPokemonDetails(toggle.value)
}

onMounted(() => {
  store.getPokemons()
  store.showToast()
})
</script>
