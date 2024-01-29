import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Base_Url, Feeds, Get_Post } from '../../utils/String'
import FeedItem from '../../components/FeedItem'
import { useIsFocused } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Feed = () => {
    const isFocused=useIsFocused()
    useEffect(()=>{
      getData()
    },[isFocused])

    const[feed,setFeed]=useState([])

    const getData = async () => {
      var userData = await AsyncStorage.getItem('LoginData')
      const myJsonData = JSON.parse(userData)
      const userId = myJsonData;
      console.warn("userId",myJsonData._id)
      // setFeed(userData);
      // getFeedData()
  }

    // const getData = async () => {
    //     var userName = await AsyncStorage.getItem('loginresult')
    //     const myJsonData = JSON.parse(userName);
    //     console.warn("Json data is here History" + (JSON.stringify(myJsonData.user)))
    //     setUserData(myJsonData);
    //     getLeadDataApiCall();
    // }

    const getFeedData=()=>{
       fetch(Base_Url+Feeds).then(res=>res.json())
       .then(json=>{
        var DataHere = JSON.stringify(json.data)
        // var DataHere = JSON.stringify(json.data[0]._id)
        // console.warn("Data is",DataHere)
        setFeed(json.data)
       })
    }
  return (
    <View>
        <FlatList data={feed} renderItem={({item,index})=>{
            return <FeedItem data={item} index={index}/>
        }}/>
    </View>
  )
}

export default Feed

const styles = StyleSheet.create({})