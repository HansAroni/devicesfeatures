import { Image, StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonDetail } from '../store/actions/pokemonDetail.action'

import COLORS from '../constants/COLORS'
import TypeCard from '../components/TypeCard'

const PokemonDetailScreen = ({ route }) => {
  const dispatch = useDispatch()
  const pokemon = useSelector(state => state.pokemonDetail.pokemonData)
  const isLoading = useSelector(state => state.pokemonDetail.isLoading)

  useEffect(() => {
    dispatch(getPokemonDetail(route.params.pokemonName))
  }, [])

  return (
    <View style={styles.screen}>
      {isLoading ? (
        <ActivityIndicator
          style={styles.spinner}
          color={COLORS.green}
          size={50}
        />
      ) : (
        <>
          <Image style={styles.image} source={{ uri: pokemon.image }} />
          <Text style={styles.title}>Weight</Text>
          <Text style={styles.text}>{pokemon.weight} kg</Text>
          <Text style={styles.title}>Height</Text>
          <Text style={styles.text}>{pokemon.height} cm</Text>
          <Text style={styles.title}>Types</Text>
          <FlatList
            data={pokemon.types}
            renderItem={TypeCard}
            keyExtractor={(item) => item}
          />
        </>
      )}
    </View>
  );

}

export default PokemonDetailScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center'
  },
  image: {
    width: 250,
    height: 250,
  },
  title: {
    fontSize: 20,
    fontFamily: 'OpenSans_700Bold',
    color: COLORS.black,
    marginTop: 20
  },
  text: {
    fontSize: 20,
    fontFamily: 'OpenSans_400Regular',
    color: COLORS.black
  },
})