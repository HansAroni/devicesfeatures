import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'

import ProfileScreen from "../../screens/ProfileScreen";
import SearchScreen from "../../screens/SearchScreen";

import COLORS from "../../constants/COLORS";
import PokemonNavigator from "../PokemonNavigator";
import FavPokemonNavigator from "../FavPokemonNavigator";

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="Pokemons"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary
        },
        headerTintColor: COLORS.white,
        headerTitleStyle: {
          fontFamily: 'OpenSans_700Bold'
        },
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: COLORS.white,
        tabBarInactiveTintColor: COLORS.disabled
      }}
    >
      <BottomTabs.Screen
        name="UserProfile"
        component={ProfileScreen}
        options={{
          title: "My Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle-o" size={size} color={color} />
          )
        }}
      />
      <BottomTabs.Screen name="Pokemons"
        options={{
          title: "Pokemons",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="pokeball" size={size} color={color} />
          )
        }}
        component={PokemonNavigator} />
      <BottomTabs.Screen
        name="FavoritePokemons"
        component={FavPokemonNavigator}
        options={{
          title: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite" size={size} color={color} />
          )
        }}
      />
      <BottomTabs.Screen
        name="SearchPokemon"
        component={SearchScreen}
        options={{
          title: "Search your Pokemon",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" size={size} color={color} />
          )
        }}
      />
    </BottomTabs.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
  tabBar: {
    height: 80,
    paddingBottom: 20,
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  }
})