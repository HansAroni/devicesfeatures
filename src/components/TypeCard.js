import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const colorsByType = {
  normal: '#A8A878',
  fire: '#F08030',
  water: '#6890F0',
  electric: '#F8D030',
  grass: '#78C850',
  ice: '#98D8D8',
  fighting: '#C03028',
  poison: '#A040A0',
  ground: '#E0C068',
  flying: '#A890F0',
  psychic: '#F85888',
  bug: '#A8B820',
  rock: '#B8A038',
  ghost: '#705898',
  dragon: '#7038F8',
  dark: '#705848',
  steel: '#B8B8D0',
  fairy: '#EE99AC',
};

const TypeCard = ({ item }) => {
  const backgroundColor = colorsByType[item.toLowerCase()] || '#999';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.text}>{item}</Text>
    </View>
  )
}

export default TypeCard

const styles = StyleSheet.create({
  container: {
    width: 200,
    paddingVertical: 5,
    borderRadius: 4,
    alignItems: 'center',
    marginTop:10
  },
  text: {
    fontSize:18,
    fontFamily: 'OpenSans_700Bold',
    color:'white'
  }
})