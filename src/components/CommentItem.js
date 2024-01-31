import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { black, white } from '../utils/Color'
import { Images } from '../utils/Images'

const CommentItem = ({data,onDelete,onDeleteOption}) => {
  return (
    <View style={styles.commentView}>
        <View style={styles.commentsecondView}>
            <View style={{flexDirection:'row',alignItems:"center",marginTop:10}}>
            <Image source={Images.user} style={styles.icon}/>
            <View style={{marginLeft:10}}>
                <Text style={{color:black}}>{data.username}</Text>
            </View>
            </View>
             <TouchableOpacity onPress={()=>{onDeleteOption();}}>
             <Image source={Images.dot} style={styles.icon}/>
             </TouchableOpacity>
        </View>
            <Text style={{color:black,marginTop:10,width:'90%',alignSelf:"center",fontWeight:'500'}}>{data.comment}</Text>
    </View>
  )
}

export default CommentItem

const styles = StyleSheet.create({
    commentView:{
        backgroundColor:'#f2f2f2',
        width:'90%',
        alignSelf:'center',
        marginTop:20,
        justifyContent:'center',

    },
    commentsecondView:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        paddingHorizontal:10
    },
    icon:{
        width:24,
        height:24
    }
})