import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, Button, FlatList, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import COLORS from '../constants/COLORS'
import { getPokemons } from '../store/actions/pokemons.actions'
import { favorite } from '../store/actions/favorites.action'


import PokemonCard from '../components/PokemonCard'


const PokemonListScreen = ({ navigation }) => {

  const [offset, setOffset] = useState(0);
  const favList = useSelector(state => state.favorites.favPokemons)
  const pokemons = useSelector(state => state.pokemons.pokemonList)
  const isLoading = useSelector(state => state.pokemons.isLoading)
  const user = useSelector(state => state.auth.userId)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPokemons(offset))
    flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
  }, [offset])


  const handlerOnPressItem = item => dispatch(favorite(item, user))


  const onSelectPokemon = item => {
    navigation.navigate('pokemonDetail', {
      pokemonId: item.id,
      pokemonName: item.name,
      pokemonUrl: item.url
    })
  }

  const handleNext = () => {
    setOffset(offset => offset + 20);
  };
  const handleFirst = () => {
    setOffset(0);
  };
  const handleLast = () => {
    setOffset(1280);
  };
  const handlePrev = () => {
    setOffset(offset => offset - 20);
  };

  const flatListRef = useRef(null);
  return (
    <View style={styles.screen}>
      {isLoading ?
        <ActivityIndicator
          style={styles.spinner}
          color={COLORS.green}
          size={50}
        /> :
        <FlatList
          ref={flatListRef}
          numColumns={2}
          data={pokemons}
          renderItem={({ item }) =>
            <PokemonCard pokemon={item}
              onSelect={() => onSelectPokemon(item)}
              onPress={() => handlerOnPressItem(item)}
              favList={favList}
              id={true}
            />
          }
          keyExtractor={item => item.id}
        />
      }
      <View style={styles.buttonsContainer}>
        <Button
          title='First'
          onPress={handleFirst}
          color={COLORS.green}
          disabled={offset === 0}
        />
        <Button
          title='Prev'
          onPress={handlePrev}
          color={COLORS.green}
          disabled={offset === 0}
        />
        <Button
          title='Next'
          onPress={handleNext}
          disabled={offset === 1280}
          color={COLORS.green}
        />
        <Button
          title='Last'
          onPress={handleLast}
          disabled={offset === 1280}
          color={COLORS.green}
        />
      </View>
    </View >
  )
}

export default PokemonListScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary
  },
  spinner: {
    flex: 1
  },
  text: {
    fontFamily: 'OpenSans_400Regular',
    marginBottom: 20,
    color: COLORS.black
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
})