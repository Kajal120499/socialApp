import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { white } from '../utils/Color'
import { Images } from '../utils/Images'

const CommentDelModal = ({onclick,onclose,visible}) => {
  return (
    <Modal visible={true} transparent onRequestClose={()=>{onclose()}} visible={visible}>
      <View style={{backgroundColor:'rgba(0,0,0,0.2)',flex:1}}>
        <View style={{position:'absolute',
         width:'100%',height:200,bottom:0,backgroundColor:white,borderTopLeftRadius:20,borderTopRightRadius:20}}>
       <Text style={{color:"#000",fontSize:16,marginTop:20,marginLeft:15}}Post OPtions></Text>
       <TouchableOpacity style={{flexDirection:"row",width:"90%",height:50,alignSelf:"center",alignItems:'center'}} onPress={()=>{onclick(1)}}>
       <Image source={Images.edit} style={[styles.icon]} />
       <Text style={{color:"#000",fontSize:16,marginLeft:15}}>Edit Comment</Text>
       </TouchableOpacity>
       <TouchableOpacity style={{flexDirection:"row",width:"90%",height:50,alignSelf:"center",alignItems:'center'}} onPress={()=>{onclick(2)}}>
       <Image source={Images.delete} style={[styles.icon]} />
       <Text style={{color:"#000",fontSize:16,marginLeft:15}}>Delete Comment</Text>
       </TouchableOpacity>
        </View>
      </View>
     </Modal>
  )
}

export default CommentDelModal

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
        tintColor: '#9e9e9e',
        marginLeft: 15
    },
})