import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect,useState } from 'react'
import { useIsFocused } from '@react-navigation/native'
import { Base_Url, Feed_by_id, Feeds, user_by_id } from '../../utils/String'
import { useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Profile = () => {
  // const authData =useSelector(state=>state.auth)
  // console.warn(authData)

  const isFocused=useIsFocused()
    useEffect(()=>{
      retrieveUrlAndAttachId()
    },[isFocused])
    const[urlstore,setUrlstore]=useState([])
    
    const retrieveUrlAndAttachId  = async () => {
      var userData = await AsyncStorage.getItem('LoginData')
      console.warn(userData)
      // const myJsonData = JSON.parse(userData);
      // console.warn("userId",myJsonData)
      // setUrlstore(myJsonData);
      // getUserprofile()
  }

    const getUserprofile=()=>{
      const url=Base_Url+user_by_id+ '/'+ urlstore
      console.warn(url)
       fetch(url)
       .then(res=>res.json())
       .then(json=>{
        console.warn("Profile Data:",json)
        setUrlstore(json.data)
       })
    }
  return (
    <View>
      <Text style={{color:"red",fontSize:32}}>Email ID:</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})