import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'

import { Ionicons } from '@expo/vector-icons';

import COLORS from '../constants/COLORS'
import { useDispatch } from 'react-redux'
import { addPic } from '../store/actions/auth.actions'

const ImageSelector = ({ userPic }) => {

  const [add, setAdd] = useState(false)

  const dispatch = useDispatch()

  const handlerAddProfile = () => {
    setAdd(add => !add);
  }

  const VerifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync()
    if (status !== 'granted') {
      Alert.alert('Permisos insuficientes')
      return false
    }
    return true
  }

  const handlerOpenCamera = async () => {
    const isCameraOk = await VerifyPermissions()
    if (!isCameraOk) return

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5
    })
    dispatch(addPic(image.assets[0]?.uri))
    setAdd(add => !add);
  }

  const handlerOpenGallery = async () => {
    const isCameraOk = await VerifyPermissions()
    if (!isCameraOk) return

    const image = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5
    })
    dispatch(addPic(image.assets[0]?.uri))
    setAdd(add => !add);
  }

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!userPic
          ? (<Text>No hay imagen seleccionada...</Text>)
          : (<Image style={styles.image} source={{ uri: userPic }} />)
        }
      </View>

      {add ?
        <View style={styles.addPic}>
          <TouchableOpacity onPress={handlerOpenCamera}>
            <Ionicons style={styles.addPicIcon} name="camera" size={24} color={COLORS.white} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlerOpenGallery}>
            <Ionicons style={styles.addPicIcon} name="image" size={24} color={COLORS.white} />
          </TouchableOpacity>
        </View> :
        <Button
          title={add ? 'X' : "Add Profile Picture"}
          color={COLORS.green}
          onPress={handlerAddProfile}
        />
      }
    </View>
  )
}

export default ImageSelector

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    alignItems: 'center',
    justifyContent:'space-around'
  },
  preview: {
    width: 200,
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.green,
    borderWidth: 1,
    borderRadius: 100
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 100
  },
  addPic: {
    flexDirection: 'row',
    width: 170,
    justifyContent: 'space-evenly',
  },
  addPicIcon: {
    backgroundColor:COLORS.green,
    borderRadius:4,
    paddingHorizontal:10,
    paddingVertical:5
  }
})
