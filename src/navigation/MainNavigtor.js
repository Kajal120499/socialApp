import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../screens/Splash/Splash';
import Login from '../screens/Login/Login';
import Signup from '../screens/Signup/Signup';

const Stack = createNativeStackNavigator();
const MainNavigtor = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Splash" component={Splash}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Signup" component={Signup}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigtor

