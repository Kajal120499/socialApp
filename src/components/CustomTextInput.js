import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Images } from '../utils/Images'

const CustomTextInput = ({mt,placeholder,onChangeText,isValid,keyboardType,value,iconn}) => {
  return (
    <View style={[styles.inputView,{marginTop:mt?mt:20,borderColor:isValid?'#9e9e9e':'red'}]}>
        {
            iconn &&
            (
                <Image source={iconn} style={styles.img}/>

            )}
        <TextInput value={value} style={{color:'black'}}
                   placeholder={placeholder} placeholderTextColor={'gray'}
                   onChangeText={txt=>{onChangeText(txt)}}
                   keyboardType={keyboardType ? keyboardType : 'default'}
                   />            
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
    inputView:{
        width:'90%',
        alignSelf:'center',
        height:50,
        borderRadius:10,
        borderWidth:1,
        flexDirection:"row",
        alignItems:"center",
        // paddingLeft:10
    },
    img:{
        width:20,
        height:20,
        marginHorizontal:8,
        tintColor:'#9e9e9e'
    }
})