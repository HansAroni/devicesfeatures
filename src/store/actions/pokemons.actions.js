import { getPokemonList } from '../../utils/getPokemons';

export const GET_POKEMONS_LOADING = "GET_POKEMONS_LOADING"
export const GET_POKEMONS_SUCCESS = "GET_POKEMONS_SUCCESS"
export const GET_POKEMONS_FAILURE = "GET_POKEMONS_FAILURE"


export const getPokemons = (offset) => {
  return async dispatch => {
    try {
      dispatch({
        type: GET_POKEMONS_LOADING
      })
      const pokemonData = await getPokemonList(offset)
        dispatch({
          type: GET_POKEMONS_SUCCESS,
          payload: pokemonData,
        });
    } catch (error) {
      dispatch({
        type: GET_POKEMONS_FAILURE,
        payload: error.message,
      });
    }
  }
}

