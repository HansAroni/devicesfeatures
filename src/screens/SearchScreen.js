import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, FlatList, ActivityIndicator, Keyboard } from 'react-native';

import { getFilteredPokemonData } from '../utils/getPokemons';
import TypeCard from '../components/TypeCard';

import COLORS from '../constants/COLORS';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null);

  const resetPokemonData = () => {
    setPokemonData(null)
  }

  const handleSearch = async () => {
    try {
      Keyboard.dismiss();
      setIsLoading(true)
      const pokemonsInfo = await getFilteredPokemonData(searchTerm)
      setPokemonData(pokemonsInfo);
      setIsLoading(false)
      setError(null);
    } catch (error) {
      console.log(error);
      setPokemonData(null);
      setIsLoading(false)
      setError('Cant find this pokemon');
    }
  };

  const renderPokemon = ({ item }) => {
    return (
      <View style={styles.pokemonContainer}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.text}>Weight: {item.weight} kg</Text>
        <Text style={styles.text}>Height: {item.height} cm</Text>
        <Text style={styles.title}>Types</Text>
        <FlatList
          data={item.types}
          renderItem={TypeCard}
          keyExtractor={(type) => type}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {!pokemonData ? (
        <>
          <TextInput
            style={styles.input}
            value={searchTerm}
            onChangeText={setSearchTerm}
            placeholder="Search Pokémon"
          />
          <Button title="Search" color={COLORS.green} onPress={handleSearch} />
          {isLoading &&
            <>
              <ActivityIndicator size='large' color={COLORS.green} style={styles.activityIndicator} />
              <Text>Please wait it could take a minute</Text>
            </>}
        </>
      ) : (
        <>
          <FlatList
            data={pokemonData}
            renderItem={renderPokemon}
            keyExtractor={(pokemon) => pokemon.name}
            horizontal={true}
            pagingEnabled={true}
            style={styles.flatList}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="search another pokemon"
              color={COLORS.green}
              onPress={resetPokemonData}
            />
          </View>
        </>
      )}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>

  );
};

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    flexDirection: 'row'
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: COLORS.green,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  activityIndicator: {
    marginVertical: 30
  },
  error: {
    color: 'red',
    marginBottom: 20,
  },
  pokemonContainer: {
    alignItems: 'center',
  },
  flatList: {
    marginTop: 30
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
  buttonContainer: {
    margin: 20
  }
});
