import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import style from './style'
import { Images } from '../../utils/Images'

const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate("Login")
        },3000)
    },[])

  return (
    <SafeAreaView style={style.container}>
        <Image source={Images.logo} style={style.logo}/>
    </SafeAreaView>
  )
}

export default Splash

