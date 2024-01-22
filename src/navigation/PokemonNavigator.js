import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import PokemonListScreen from '../screens/PokemonListScreen'
import PokemonDetailScreen from '../screens/PokemonDetailScreen'

import COLORS from '../constants/COLORS'

const Stack = createNativeStackNavigator()

const PokemonNavigator = () => {
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
        component={PokemonListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='pokemonDetail'
        component={PokemonDetailScreen}
        options={({ route }) => ({ title: `${route.params.pokemonId} - ${route.params.pokemonName}` })}
      />
    </Stack.Navigator>
  )
}

export default PokemonNavigator

