import { FlatList, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { Theme_Color, black, white } from '../../utils/Color'
import { Base_Url, add_comment, del_comment, get_comment } from '../../utils/String'
import CommentItem from '../../components/CommentItem'
import CommentDelModal from '../../components/CommentDelModal'
import Loader from '../../components/Loader'

const Comments = () => {
    const [comment, setComment] = useState('')
    const [commentList, setCommentList] = useState('')
    const [loading, setLoading] = useState(false)
    const [commentOptionOpen, setCommentOptionOpen] = useState(false)
    const [selectedItem, setselectedItem] = useState(null)

    const route = useRoute();
    
    useEffect(()=>{
        getComment()
    },[])
    const addComment = () => {
        setLoading(true)
        const body = JSON.stringify({
            "userId": "65b13e60c40a0684ede7284a",
            "postId": route.params.id,
            "comment": comment,
            "username": "chirag"
        })
        // console.warn(body)
        const myHeader = new Headers()
        myHeader.append("Content-Type", "application/json")
        fetch(Base_Url + add_comment, {
            method: 'post',
            body,
            headers: myHeader
        })
            .then(res => res.json())
            .then(json => {
                setLoading(false)
                setComment('')
                Keyboard.dismiss()
                getComment()
                // console.warn(json)
            }).catch(err => {
                console.warn(err)
            })
    }

    const getComment = () => {
        const myHeader = new Headers()
        myHeader.append("Content-Type", "application/json")
        fetch(Base_Url + get_comment + '/' + route.params.id, {
            method: 'get',
            headers: myHeader
        })
            .then(res => res.json())
            .then(json => {
                // console.warn(json)
                setCommentList(json.data)
            }).catch(err => {
                console.warn(err)
            })
    }

    const deleteComment = () => {
        setLoading(true)
        const myHeader = new Headers()
        myHeader.append("Content-Type", "application/json")
        fetch(Base_Url+del_comment+'/'+ selectedItem._id,{
          method: 'delete',
          headers: myHeader
        })
          .then(res => res.json())
          .then(json => {
            setLoading(false)
            console.warn(json)
            getComment()
          }).catch(err => {
            console.warn(err)
          })
    
    
      }

    return (
        <View style={styles.container}>
            <FlatList data={commentList} renderItem={({item,index})=>{
                // console.warn("dataget",item)
                return(<CommentItem data={item} onDeleteOption={()=>{
                    setselectedItem(item)
                    setCommentOptionOpen(true)
                }}/>)
            }}/>
            <View style={styles.bottomView}>
                <TextInput placeholder='Comment here...'
                    value={comment}
                    onChangeText={txt => setComment(txt)}
                    style={{ width: '70%', height: '100%', color: black }}
                    placeholderTextColor={black} />
                <TouchableOpacity style={[styles.postBtn, { backgroundColor: comment == '' ? '#f2f2f2' : Theme_Color }]}
                    disabled={Comments == '' ? true : false} activeOpacity={1}
                    onPress={() => { addComment() }}>
                    <Text style={[styles.postTxt, { color: comment == '' ? Theme_Color : white, }]}>send</Text>
                </TouchableOpacity>
            </View>
            <CommentDelModal visible={commentOptionOpen} onclick={(x=>{
                setCommentOptionOpen(false)
                if(x==2){
                    deleteComment()
                }
            })}/>
            <Loader visible={loading}/>
        </View>
    )
}

export default Comments

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white
    },
    bottomView: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        elevation: 15,
        height: 70,
        paddingHorizontal: 10,
        backgroundColor: white
    },
    postBtn: {
        width: '20%',
        height: '60%',
        backgroundColor: Theme_Color,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    postTxt: {
        color: white
    },
})