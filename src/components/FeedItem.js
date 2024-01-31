import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Images } from '../utils/Images'
import { black } from '../utils/Color'
import { useNavigation } from '@react-navigation/native'

const FeedItem = ({ data,list,index ,onclick,onclickLike}) => {
    const navigation=useNavigation()
    const time = () => {
        const current= new Date()
    }

    const checkLike=()=>{
        let islike=false
        data.likes.map(item=>{
            if(item=='65b13e60c40a0684ede7284a'){
                islike=true
            }
        })
        return islike
    }
    return (
        <View style={[styles.feed,{marginBottom:list.length-1==index?120:0}]}>
            <View style={styles.topView}>
                <View style={styles.topLeft}>
                    <Image source={Images.user} style={[styles.icon]} />
                    <View>
                        <Text style={styles.userName}>{data.username}</Text>
                        {/* <Text style={styles.time}>{time(new Date(data.createdAt))}</Text> */}
                        <Text style={styles.time}>{data.createdAt}</Text>

                    </View>
                </View>
                
                <View>
                {/* <Image source={{uri:data.imageUrl}} style={{width:'200%',height:100,resizeMode:"contain"}} /> */}
                <TouchableOpacity onPress={()=>{onclick()}}>
                    <Image source={Images.dot} style={[styles.icon]} />
                </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.caption}>{data.caption}</Text>
            {
                data.imageUrl ? <Image source={{uri:data.imageUrl}} style={{width:'100%',height:200,resizeMode:'contain',marginTop:10}} /> : null
            }
            <View style={styles.bottomView}>
              <View style={{flexDirection:"row"}}>
              <TouchableOpacity onPress={()=>{onclickLike()}}>
                    <Image source={Images.like} style={[styles.icon,{tintColor:checkLike()?'red':'black'}]}/>
                </TouchableOpacity>
                <Text style={styles.like}>{data.likes.length+'Likes'}</Text>

              </View>
              <View style={{flexDirection:"row"}}>
                <TouchableOpacity onPress={()=>{navigation.navigate("Comments",{id:data._id})}}>
                    <Image source={Images.comment} style={styles.icon}/>
                </TouchableOpacity>
                <Text style={styles.like}>{data.comments+'Comments'}</Text>

              </View>
            </View>


        </View>
    )
}

export default FeedItem

const styles = StyleSheet.create({
    feed: {
        width: '90%',
        backgroundColor: "#f2f2f2",
        // height:200,
        paddingBottom: 20,
        alignSelf: 'center',
        marginTop: 20
    },
    topView: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 10,
        width: '100%'
    },
    icon: {
        width: 24,
        height: 24,
        tintColor: '#9e9e9e',
        marginLeft: 15
    },
    topLeft: {
        flexDirection: 'row',
        marginTop: 10,
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: black,
        marginLeft: 10
    },
    time: {
        fontSize: 14,
        fontWeight: '600',
        color: 'gray',
        marginLeft: 10
    },
    caption: {
        fontSize: 16,
        fontWeight: '600',
        color: black,
        marginTop: 10,
        width: '90%',
        alignSelf: "center"
    },
    bottomView:{
        justifyContent:'space-evenly',
        flexDirection:"row",
        alignItems:"center",
        marginTop:20
    },
    like:{
        marginLeft:4,
        fontSize:16,
        color:black
    }
})