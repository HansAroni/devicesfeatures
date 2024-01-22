import { createStore, combineReducers, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'

import thunk from 'redux-thunk'
import AsyncStorage from '@react-native-async-storage/async-storage'

import favoriteReducer from './reducers/favorites.reducer'
import pokemonReducer from './reducers/pokemons.reducer'
import authReducer from './reducers/auth.reducer'
import pokemonDetailReducer from './reducers/pokemonDetail.reducer'


const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const rootReducer = combineReducers({
  pokemons: pokemonReducer,
  favorites: favoriteReducer,
  auth: authReducer,
  pokemonDetail: pokemonDetailReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk))
export const storePersisted = persistStore(store)