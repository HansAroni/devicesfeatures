import { getPokemonData } from '../../utils/getPokemons';

export const GET_POKEMON_LOADING = "GET_POKEMON_LOADING"
export const GET_POKEMON_SUCCESS = "GET_POKEMON_SUCCESS"
export const GET_POKEMON_FAILURE = "GET_POKEMON_FAILURE"


export const getPokemonDetail = (name) => {
    return async dispatch => {
        dispatch({ type: GET_POKEMON_LOADING })
        try {
            dispatch({ type: GET_POKEMON_LOADING });
            const pokemonData = await getPokemonData(name)
            dispatch({
                type: GET_POKEMON_SUCCESS,
                payload: pokemonData,
            });
        } catch (error) {
            dispatch({
                type: GET_POKEMON_FAILURE,
                payload: error.message,
            });
        }
    }
}

