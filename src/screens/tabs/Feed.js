import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Base_Url, Feeds, Get_Post } from '../../utils/String'
import FeedItem from '../../components/FeedItem'
import { useIsFocused } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import OptionModal from '../../components/OptionModal'
import Loader from '../../components/Loader'
import UpdateModal from '../../components/UpdateModal'

const Feed = () => {
  const isFocused = useIsFocused()
  useEffect(() => {
    getData()
  }, [isFocused])

  const [feed, setFeed] = useState([])
  const [option, setOption] = useState(false)
  const [selectedItem, setselectedItem] = useState(null)
  const [loading, setLoading] = useState(false)
  const [openUpdateModal, setopenUpdateModal] = useState(false)


  const getData = async () => {
    var userData = await AsyncStorage.getItem('LoginData')
    const myJsonData = JSON.parse(userData)
    const userId = myJsonData;
    // console.warn("userId:",myJsonData)
    setFeed(myJsonData);
    getFeedData()
  }

  const getFeedData = () => {
    fetch(Base_Url + Feeds).then(res => res.json())
      .then(json => {
        var DataHere = JSON.stringify(json.data)
        // var DataHere = JSON.stringify(json.data[0]._id)
        // console.warn("Data is",DataHere)
        json.data.reverse()
        setFeed(json.data)
      })
  }

  const deletePost = () => {
    // setLoading(true)
    const url = "https://proud-trunks-pike.cyclic.app/socialapp/api/post/delete/65b13e60c40a0684ede7284a"
    // const url=Base_Url+deletePost+'/'+ selectedItem._id
    console.warn(url)
    const myHeader = new Headers()
    myHeader.append("Content-Type", "application/json")
    // fetch(Base_Url+deletePost+'/'+ selectedItem._id,{
    fetch(url, {
      method: 'delete',
      headers: myHeader
    })
      .then(res => res.json())
      .then(json => {
        // setLoading(false)
        console.warn(json)
        getData()
      }).catch(err => {
        console.warn(err)
      })


  }

  const updatePost = (caption) => {
    setLoading(true)
    const url = "https://proud-trunks-pike.cyclic.app/socialapp/api/post/update/65b13e60c40a0684ede7284a"
    // const url=Base_Url+deletePost+'/'+ selectedItem._id
    const body=JSON.stringify({
        "userId": "65b13e60c40a0684ede7284a",
         "caption": caption,
         "username":"ankit thakur"
    })
    console.warn(body)
    console.warn(url)
    const myHeader = new Headers()
    myHeader.append("Content-Type", "application/json")
    // fetch(Base_Url+deletePost+'/'+ selectedItem._id,{
    fetch(url, {
      method: 'put',
      body,
      headers: myHeader
    })
      .then(res => res.json())
      .then(json => {
        setLoading(false)
        console.warn(json)
        getData()
      }).catch(err => {
        console.warn(err)
      })


  }

  const LikePost = (item) => {
    setLoading(true)
    const url = "https://proud-trunks-pike.cyclic.app/socialapp/api/post/like/65b13e60c40a0684ede7284a"
    // const url=Base_Url+deletePost+'/'+ item._id
    // console.warn(url)
    const body=JSON.stringify({
        "userId": "65b13e60c40a0684ede7284a",
    })
    console.warn(body)
    console.warn(url)
    const myHeader = new Headers()
    myHeader.append("Content-Type", "application/json")
    fetch(url, {
      method: 'put',
      body,
      headers: myHeader
    })
      .then(res => res.json())
      .then(json => {
        setLoading(false)
        console.warn(json)
        // getData()
      }).catch(err => {
        console.warn(err)
      })


  }
  return (
    <View>
      <FlatList data={feed} renderItem={({ item, index }) => {
        return <FeedItem data={item} list={feed} index={index} onclick={() => {
          setselectedItem(item)
          setOption(true)
        }} 
        onclickLike={()=>{LikePost(item)}}
        />
      }} />
      <OptionModal onclose={() => { setOption(false) }} onclick={x => {
        setOption(false)
        if (x == 2) {
          deletePost()
        }else{
          setopenUpdateModal(true)
        }
      }} visible={option} />
      {/* <Loader visible={loading}/>   */}
      <UpdateModal 
         data={selectedItem}
         onclose={() => { setopenUpdateModal(false) }} 
         onclick={x =>{
        setopenUpdateModal(false)
        updatePost(x)
        // LikePost(item)
      }}
       visible={openUpdateModal} />    
      </View>
  )
}

export default Feed

const styles = StyleSheet.create({})