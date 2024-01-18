// const axios = require('axios')

// const { getPokemons } = require('../views/PokemonList.vue')

jest.mock('axios')

describe('getPokemons', () => {
  test('sanity test', () => {
    expect(true).toBe(true) // will obviously always pass
  })
  // expect(pokemon.pokemons.length).toBe(data.results.length)
})
