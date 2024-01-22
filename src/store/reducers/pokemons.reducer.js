import { GET_POKEMONS_LOADING, GET_POKEMONS_SUCCESS, GET_POKEMONS_FAILURE } from "../actions/pokemons.actions"

const initialState = {
  pokemonList: [],
  isLoading: false,
  error: null,
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_POKEMONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pokemonList: action.payload,
      };
    case GET_POKEMONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};


export default pokemonReducer