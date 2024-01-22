import { GET_POKEMONS_LOADING, GET_POKEMON_SUCCESS, GET_POKEMON_FAILURE } from "../actions/pokemonDetail.action";

const initialState = {
  pokemonData: {},
  isLoading: false,
  error: null,
};

const pokemonDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_POKEMON_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pokemonData: action.payload,
      };
    case GET_POKEMON_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};


export default pokemonDetailReducer