import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'

import COLORS from '../constants/COLORS'

const PokemonCard = ({ pokemon, onSelect, onPress, favList, id }) => {

  const isFav = favList.find(el => el.name === pokemon.name);
  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.pokemon} onPress={() => onPress(pokemon)}>
        <View style={styles.favorite}>
          {isFav ?
            <MaterialIcons name="favorite" size={24} color={COLORS.primary} /> :
            <MaterialIcons name="favorite-outline" size={24} color={COLORS.primary} />}
        </View>
        <Image
          style={styles.image}
          source={{
            uri: pokemon.sprite,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.pokemonName} onPress={() => onSelect(pokemon)}>
        {
          id ?
            <Text style={styles.text}>{pokemon.id} - {pokemon.name}</Text> :
            <Text style={styles.text}> {pokemon.name}</Text>
        }
      </TouchableOpacity>
    </View>
  )
}

export default PokemonCard

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    margin: 20,
    width: 120,
  },
  pokemon: {
    backgroundColor: COLORS.accent,
    width: '100%',
    height: 120,
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  image: {
    width: 120,
    height: 120,
  },
  text: {
    fontFamily: 'OpenSans_700Bold',
    fontSize: 14,
    color: COLORS.white
  },
  pokemonName: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: COLORS.green,
    height: 30,
    justifyContent: 'center',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  favorite: {
    position: 'absolute',
    right: 5,
    top: 5,
  }
})