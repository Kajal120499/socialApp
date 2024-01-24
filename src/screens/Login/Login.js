import { Alert, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import style from './style'
import { Images } from '../../utils/Images'
import CustomTextInput from '../../components/CustomTextInput'
import LinearGradient from 'react-native-linear-gradient'
import { Theme_Color, Theme_Color1 } from '../../utils/Color'
import { Base_Url } from '../../utils/String'
import jestConfig from '../../../jest.config'
import Loader from '../../components/Loader'

const Login = ({navigation}) => {
  const[mail,setMail]=useState('rohit123@gmail.com')
  const[badMail,setBadMail]=useState('')
  const[pass,setPass]=useState('123456')
  const[badPass,setBadPass]=useState('')

  const[loading,setLoading]=useState(false)


  const validate=()=>{
    let isValid=false
    if(mail==''){
      setBadMail("Please Enter Mail")
      isValid=false
    }else if(mail!='' && !mail.toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )){
      setBadMail("Please Enter  Valid Mail")
      isValid=false
    }else if(mail!='' && mail.toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )){
      setBadMail("")
      isValid=false
    }

    if(pass==''){
      setBadPass("Please Enter Password")
      isValid=false
    }else if(pass!='' && pass.length<6)
    {
      setBadPass("Please Enter Valid Pass is minimum 6")
      isValid=false
    }else if(pass!='' && pass.length>6)
    {
      setBadPass("")
      isValid=true
      // loginApiCall()
      Alert.alert("hello")
    }

  }

  const loginApiCall=async()=>{
    setLoading(true)
    // const data = JSON.stringify({
    //   emailId:mail,
    //   password:pass
    //  })
    // console.log(data)
    // console.warn(mail+" "+pass)
    const myHeaders= new Headers()
    myHeaders.append("content-type","application/json")
      await fetch(Base_Url + Login,{
      body: JSON.stringify({
        emailId:mail,
        password:pass
    }),
    method:'POST',
    headers:myHeaders
    })
    .then(res => res.json())
    .then(
      json => {
      console.warn(json),
      console.log("sucess")
      setLoading(false)
      })
    .catch(err=>{
      console.log("fail")
      console.warn("Error",err)
      setLoading(false)
    })
  }

  return ( 
    <SafeAreaView style={style.container}>
        <Image source={Images.logo} style={style.logo}/>
        <Text style={[style.welcomeTxt1,{marginTop:20}]}>Welcome Back</Text>
        <Text  style={[style.welcomeTxt1,{marginTop:10}]}>to
        <Text  style={[style.welcomeTxt2,{}]}> Social</Text></Text>

        <CustomTextInput placeholder={'Enter Mail'} 
                          iconn={require('../../Images/user.png')}
                          value={mail}
                          isValid={badMail == '' ? true : false}
                          onChangeText={txt=>setMail(txt)} />
                          {
                            badMail != '' && <Text style={{color:'red',marginLeft:20}}>{badMail}</Text>
                          }

        <CustomTextInput placeholder={'Enter Pass'} 
                          iconn={require('../../Images/password.png')}
                          value={pass}
                          isValid={badPass==''?true:false}
                          onChangeText={txt=>setPass(txt)} />
                           {
                            badPass != '' && <Text style={{color:'red',marginLeft:20}}>{badPass}</Text>
                          }

        <LinearGradient colors={[Theme_Color,Theme_Color1]} style={style.btn}>
          <TouchableOpacity style={[style.btn,{justifyContent:'center',alignItems:"center",marginTop:0}]} 
              //  onPress={()=>{if(validate()){
              //    loginApiCall()
              //  }}}>
              onPress={()=>{loginApiCall()}}>
            <Text style={[style.btnTxt,{}]}>Login</Text>
          </TouchableOpacity>
          </LinearGradient>

          <Text style={[style.SignupTxt,{}]} onPress={()=>{navigation.navigate("Signup")}}>Create New Account ?
           <Text  style={[style.signuo,{}]}> Signup</Text></Text>

          <Loader visible={loading}/>

    </SafeAreaView>
  )
}

export default Login

