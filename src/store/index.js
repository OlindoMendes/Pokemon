import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification'
import axios from 'axios'

const useStore = defineStore('toast', {
  state: () => {
    return {
      toast: useToast(),
      url: 'https://pokeapi.co/api/v2/pokemon',
      pokemons: [],
      pokedex: [],
      pokemonINFO: null,
      toggleModal: null,
    }
  },
  actions: {
    showToast() {
      this.toast.success('The pokemons are ready!', { timeout: 3000 })
    },
    async getPokemons() {
      try {
        const response = await axios.get(this.url)
        this.pokemons.splice(0, this.pokemons.length, ...response.data.results)
        if (this.pokemons) {
          this.dataUrl()
        }
      } catch (error) {
        console.error('Error fetching Pokémon list:', error)
      }
    },
    async dataUrl() {
      const data = await Promise.all(
        this.pokemons.map((response) => axios.get(response.url)),
      )
      data.forEach((pokemonData) => {
        const pokemonObject = {
          name: pokemonData.data.name,
          images:
            pokemonData.data.sprites.other['official-artwork'].front_default,
          type: pokemonData.data.types.map((type) => type.type.name).join(', '),
          abilities: pokemonData.data.abilities
            .map((ability) => ability.ability.name)
            .join(', '),
          ID: pokemonData.data.id,
        }
        this.pokedex.push(pokemonObject)

        return this.pokedex
      })
    },
    getID(payload) {
      this.pokedex.filter((pokemon) => {
        if (pokemon.ID === payload) {
          this.pokemonINFO = {
            name: pokemon.name,
            type: pokemon.type,
            ability: pokemon.abilities,
            image: pokemon.images,
          }
        }
      })
    },
    showPokemonDetails(payload) {
      this.toggleModal = payload
    },
    hideModal(payload) {
      this.toggleModal = payload
    },
  },
  getters: {
    displayPokemon: (state) => state.pokedex,
    pokemonDetails: (state) => state.pokemonINFO,
  },
})

export default useStore
