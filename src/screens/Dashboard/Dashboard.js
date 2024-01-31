import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Theme_Color, Theme_Color1, black, white } from '../../utils/Color'
import { Images } from '../../utils/Images'
import Profile from '../tabs/Profile'
import AddPost from '../tabs/AddPost'
import Feed from '../tabs/Feed'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Dashboard = ({navigation}) => {
    const[selectedTab,setselectedTab]=useState(0) 

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Social</Text>
      {
        selectedTab==0?<Feed/>:selectedTab==1?<AddPost/>:selectedTab==2?<Profile/>:null
      }
      <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.bottomTab} onPress={()=>{setselectedTab(0)}}>
          <Image source={Images.home} style={[styles.icon,{tintColor:selectedTab==0?Theme_Color:black}]}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomTab} onPress={()=>{setselectedTab(1);navigation.navigate("AddPost")}}>
          <Image source={Images.add} style={[styles.icon,{tintColor:selectedTab==1?Theme_Color:black}]}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomTab} onPress={()=>{setselectedTab(2)}}>
          <Image source={Images.user} style={[styles.icon,{tintColor:selectedTab==2?Theme_Color:black}]}/>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Dashboard

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:white
    },
    title:{
        fontSize:25,
        marginLeft:20,
        color:Theme_Color1,
        fontWeight:'700'
    },
    bottomNav:{
        position:'absolute',
        bottom:0,
        backgroundColor:'#f2f2f2',
        width:'100%',
        height:70,
        justifyContent:'space-evenly',
        alignItems:'center',
        flexDirection:'row'
    },
    bottomTab:{
        width:'25%',
        justifyContent:'center',
        alignItems:'center',
        height:'100%'
    },
    icon:{
        width:30,
        height:30
    }
})