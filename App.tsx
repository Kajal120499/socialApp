import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainNavigtor from './src/navigation/MainNavigtor'
import { Provider } from 'react-redux'
import Mystore from './src/redux/Mystore'

const App = () => {
  return (
    <Provider store={Mystore}>
       <MainNavigtor/>
    </Provider>
   
  )
}

export default App

const styles = StyleSheet.create({})