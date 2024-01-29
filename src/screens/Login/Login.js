import { Alert, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import style from './style'
import { Images } from '../../utils/Images'
import CustomTextInput from '../../components/CustomTextInput'
import LinearGradient from 'react-native-linear-gradient'
import { Theme_Color, Theme_Color1 } from '../../utils/Color'
import { Base_Url, login_url } from '../../utils/String'
import Loader from '../../components/Loader'
import { postApiRequest } from '../../api/ApiRequest'
import { useDispatch } from 'react-redux'
import { setAuthData } from '../../redux/Authslice'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = ({navigation}) => {
  const dispatch=useDispatch()
  const[mail,setMail]=useState('chirag12@gmail.com')
  const[badMail,setBadMail]=useState('')
  const[pass,setPass]=useState('12346')
  const[badPass,setBadPass]=useState('')

  const[loading,setLoading]=useState(false)

  const [loginResultDict, setLoginResultDict] = useState({})

  const saveId = async () => {
    try {
        var loginData = JSON.stringify(loginResultDict)
        console.warn("AsyncStorage Login Saved" + loginData)
        await AsyncStorage.setItem('LoginData', loginData);
         navigation.navigate("Dashboard")
    } catch (e) {
        console.warn(e)
    }
}


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
    }else if(pass!='' && pass.length<4)
    {
      setBadPass("Please Enter Valid Pass is minimum 6")
      isValid=false
    }else if(pass!='' && pass.length>4)
    {
      setBadPass("")
      isValid=true
    }
    return isValid
  }

  const loginApiCall=async()=>{
    setLoading(true)
    // const data = JSON.stringify({
    //   emailId:mail,
    //   password:pass
    //  })
    // console.log(data)
    // console.warn(mail+" "+pass)
    const res = await postApiRequest(login_url,
      JSON.stringify({
            emailId:mail,
            password:pass
        }),)
    .then(
      json => {
      var Data = JSON.stringify(json.data)
      console.warn("Login:",Data)
      // console.log("sucess")
      setLoginResultDict(Data)
      setLoading(false)
      if(!json.status){
      if(json.message == 'User not found!'){
        setBadMail(json.message)
      }else{
        setBadPass(json.message)
      }
     }else{
      saveId()
      // dispatch(setAuthData((json)))
      // navigation.navigate("Dashboard")
     }
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
               onPress={()=>{if(validate()){
                loginApiCall()
               }}}>
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

