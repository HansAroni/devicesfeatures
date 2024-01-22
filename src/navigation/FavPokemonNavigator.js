import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import PokemonDetailScreen from '../screens/PokemonDetailScreen'

import COLORS from '../constants/COLORS'
import FavoritesPokemonScreen from '../screens/FavoritesPokemonScreen'

const Stack = createNativeStackNavigator()

const FavPokemonNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='pokemons'
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary
        },
        headerTintColor: COLORS.white,
        headerTitleStyle: {
          fontFamily: 'OpenSans_700Bold'
        }
      }}
    >
      <Stack.Screen
        name='pokemons'
        component={FavoritesPokemonScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='pokemonDetail'
        component={PokemonDetailScreen}
        options={({ route }) => ({ title: route.params.pokemonName })}
      />
    </Stack.Navigator>
  )
}

export default FavPokemonNavigator