import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import RegisterScreen from '../screens/RegisterScreen'
import LoginScreen from '../screens/LoginScreen'

const Stack = createNativeStackNavigator()

const AuthNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='login'
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name='login' component={LoginScreen} />
            <Stack.Screen name='register' component={RegisterScreen} />
        </Stack.Navigator>
    )
}

export default AuthNavigator

