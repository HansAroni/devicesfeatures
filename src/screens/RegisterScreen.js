import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../constants/COLORS'
import { useDispatch, useSelector } from 'react-redux'
import { signUp } from '../store/actions/auth.actions'


const RegisterScreen = ({ navigation }) => {

  const dispatch = useDispatch()
  const isAuthLoading = useSelector(state => state.auth.isLoading)


  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const [displayName, setDisplayName] = useState('')

  const onHandleRegister = () => {
    dispatch(signUp(email, password, displayName))
  }

  const onHandleNavigate = () => {
    navigation.navigate('login')
  }

  return (
    <KeyboardAvoidingView style={styles.screen} behavior="height">
      <View style={styles.container}>
        <Text style={styles.title}>REGISTER</Text>
        <View style={styles.form}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setDisplayName}
            autoCapitalize='none'
          />
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.textInput}
            autoCapitalize='none'
            keyboardType='email-address'
            onChangeText={setEmail} />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setpassword}
            autoCapitalize='none'
            secureTextEntry
          />
          <TouchableOpacity
            style={styles.loginButton}
            onPress={onHandleRegister}
          >
            <Text style={styles.loginButtonText}>{isAuthLoading ? <ActivityIndicator color={COLORS.white} /> : 'Register'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.prompt}>
          <Text style={styles.promptMessage}>
            ¿Have an account?
          </Text>
          <TouchableOpacity onPress={onHandleNavigate}>
            <Text style={styles.promptButton}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'OpenSans_700Bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  container: {
    width: '80%',
    maxWidth: 400,
    padding: 12,
    margin: 12,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  form: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  label: {
    fontSize: 16,
    fontFamily: 'OpenSans_700Bold'
  },
  textInput: {
    width: '100%',
    height: 40,
    borderBottomColor: COLORS.green,
    borderBottomWidth: 1,
    marginBottom: 12,
  },
  loginButton: {
    width: '100%',
    justifyContent: 'center',
    height: 40,
    backgroundColor: COLORS.primary,
    marginVertical: 12,
  },
  loginButtonText: {
    fontSize: 18,
    fontFamily: 'OpenSans_700Bold',
    textAlign: 'center',
    color: COLORS.white,
  },
  prompt: {
    alignItems: 'center',
  },
  promptMessage: {
    fontSize: 16,
    fontFamily: 'OpenSans_400Regular',
    color: '#333',
  },
  promptButton: {
    fontSize: 16,
    fontFamily: 'OpenSans_700Bold',
    color: COLORS.primary
  },
  button: {
    backgroundColor: COLORS.primary,
    marginVertical: 20,
  }
})