import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import style from './style'
import { Images } from '../../utils/Images'
import { useSelector } from 'react-redux'

const Splash = ({navigation}) => {
  // const authData =useSelector(state=>state.auth)
    useEffect(()=>{
      // console.warn(authData)
        setTimeout(()=>{
          // if(authData.data=='null'){
            navigation.navigate("Login")
          // }else{
          //   navigation.navigate("Dashboard")
          // }
        },3000)
    },[])

  return (
    <SafeAreaView style={style.container}>
        <Image source={Images.logo} style={style.logo}/>
    </SafeAreaView>
  )
}

export default Splash

