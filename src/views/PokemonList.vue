<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <SearchBar
        v-bind:filtered-pokemons="pokemon.pokemons"
        v-on:search-pokemon="searchedPokemon"
      />

      <div
        v-if="pokemon.pokemonIMG"
        class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <div
          v-for="(product, index) in pokemon.pokemonIMG"
          v-bind:key="index"
          class="group relative"
        >
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
          >
            <img
              v-bind:src="product.images"
              v-bind:alt="product.image"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>

          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm font-medium text-gray-700">
                <a v-bind:href="product.href">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.name }}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ product.type }}</p>
            </div>
            <p class="text-sm text-gray-900">
              {{ product.abilities }}
            </p>
          </div>
        </div>
      </div>

      <div
        v-else
        role="status"
        class="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
      >
        <div
          class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700"
        >
          <svg
            class="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path
              d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"
            />
            <path
              d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"
            />
          </svg>
        </div>
        <div
          class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"
        ></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        <div class="flex items-center mt-4">
          <svg
            class="w-10 h-10 me-3 text-gray-200 dark:text-gray-700"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
            />
          </svg>
          <div>
            <div
              class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"
            ></div>
            <div
              class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"
            ></div>
          </div>
        </div>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { reactive, ref, onMounted } from 'vue'
import SearchBar from '../components/layout/SearchBar.vue'
import useStore from '../store'

const store = useStore()
const pokemon = reactive({
  pokemons: [],
  pokemonIMG: [],
  name: '',
  image: '',
})
const url = ref('https://pokeapi.co/api/v2/pokemon')
const Dataurl = async () => {
  const data = await Promise.all(
    pokemon.pokemons.map((response) => axios.get(response.url)),
  )
  // console.log('data', data)
  data.forEach((pokemonData) => {
    const pokemonObject = {
      name: pokemonData.data.name,
      images: pokemonData.data.sprites.other['official-artwork'].front_default,
      type: pokemonData.data.types.map((type) => type.type.name).join(', '),
      abilities: pokemonData.data.abilities
        .map((ability) => ability.ability.name)
        .join(', '),
    }
    pokemon.pokemonIMG.push(pokemonObject)

    return pokemon.pokemonIMG
  })
}
const getPokemons = async () => {
  try {
    const response = await axios.get(url.value)
    pokemon.pokemons.splice(
      0,
      pokemon.pokemons.length,
      ...response.data.results,
    )
    if (pokemon.pokemons) {
      Dataurl()
    }
  } catch (error) {
    console.error('Error fetching Pokémon list:', error)
  }
}

const searchedPokemon = (search) => {
  if (search.length !== 0) {
    pokemon.pokemonIMG = pokemon.pokemonIMG.filter((poke) => {
      return poke.name.toLowerCase().includes(search.toLowerCase())
    })
  }
}

onMounted(() => {
  getPokemons()
  store.showToast()
})
</script>
