import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import style from './style'
import { Images } from '../../utils/Images'
import CustomTextInput from '../../components/CustomTextInput'
import LinearGradient from 'react-native-linear-gradient'
import { Theme_Color, Theme_Color1, black } from '../../utils/Color'
import { Base_Url, Register, Register_url } from '../../utils/String'
import jestConfig from '../../../jest.config'
import Loader from '../../components/Loader'
import { useDispatch } from 'react-redux'
import { setAuthData } from '../../redux/Authslice'

const Signup = ({ navigation }) => {
  const [mail, setMail] = useState('kajalkuk@gmail.com')
  const [ph, setPh] = useState('9990762840')
  const [name, setName] = useState('kajal')
  const [badMail, setBadMail] = useState('')
  const [pass, setPass] = useState('123456')
  const [badPass, setBadPass] = useState('')
  const [badPh, setBadPh] = useState('')
  const [badName, setBadName] = useState('')
const dispatch=useDispatch()

  const [loading, setLoading] = useState(false)
  const [selectedGender, setselectedGender] = useState(0)



  const validate = () => {
    let isValid = false
    if (mail == '') {
      setBadMail("Please Enter Mail")
      isValid = false
    } else if (mail != '' && !mail.toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )) {
      setBadMail("Please Enter  Valid Mail")
      isValid = false
    } else if (mail != '' && mail.toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )) {
      setBadMail("")
      isValid = false
    }

    if (pass == '') {
      setBadPass("Please Enter Password")
      isValid = false
    } else if (pass != '' && pass.length < 6) {
      setBadPass("Please Enter Valid Pass is minimum 6")
      isValid = false
    } else if (pass != '' && pass.length > 6) {
      setBadPass("")
      isValid = true
    }

    if (ph == '') {
      setBadPh("Please Enter Phone Number")
      isValid = false
    } else if (ph != '' && ph.length < 10) {
      setBadPh("Please Enter Valid Pass is minimum 10")
      isValid = false
    } else if (ph != '' && ph.length > 6) {
      setBadPh("")
      isValid = true
    }

    if (name == '') {
      setBadName("Please Enter Name")
      isValid = false
    } else if (name != '' && name.length < 3) {
      setBadName("Please Enter Valid Name is minimum 3")
      isValid = false
    } else if (name != '' && name.length > 3) {
      setBadName("")
      isValid = true
    }

  }

  const regiterApiCall = () => {
    setLoading(true)
    // console.warn(mail + " " + pass)
    const myHeaders = new Headers()
    myHeaders.append("Content-type", "application/json")
    fetch(Base_Url + Register_url, {
      body: JSON.stringify({
        emailId: mail,
        password: pass,
        mobile: ph,
        gender: selectedGender == 0 ? 'Male' : 'Female',
        username: name,
      }),
      method: 'POST',
      headers: myHeaders
    })
      .then(res => res.json())
      .then(
        json => {
          console.warn(json),
            setLoading(false)
            if(json){
              dispatch(setAuthData(json))
            }
            navigation.navigate("Dashboard")
        })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <Image source={Images.logo} style={style.logo} />
        <Text style={[style.welcomeTxt1, { marginTop: 20 }]}>Create Account</Text>
        <Text style={[style.welcomeTxt1, { marginTop: 10 }]}>In
          <Text style={[style.welcomeTxt2, {}]}> Social</Text></Text>
        <CustomTextInput placeholder={'Enter Name'}
          iconn={require('../../Images/user.png')}
          value={name}
          isValid={badName == '' ? true : false}
          onChangeText={txt => setName(txt)} />
        {
          badName != '' && <Text style={{ color: 'red', marginLeft: 20 }}>{badName}</Text>
        }

        <Text style={style.heading}>Select Gender</Text>
        <View style={style.genderView}>
          <TouchableOpacity style={[style.genderBtn, { borderColor: selectedGender == 0 ? Theme_Color1 : black }]} onPress={() => { setselectedGender(0) }}>
            <Image source={Images.male} style={[style.icon, { tintColor: selectedGender == 0 ? Theme_Color1 : black }]} />
          </TouchableOpacity>
          <TouchableOpacity style={[style.genderBtn, { borderColor: selectedGender == 1 ? Theme_Color1 : black }]} onPress={() => { setselectedGender(1) }}>
            <Image source={Images.female} style={[style.icon, { tintColor: selectedGender == 1 ? Theme_Color1 : black }]} />
          </TouchableOpacity>
        </View>

        <CustomTextInput placeholder={'Enter Password'}
          iconn={require('../../Images/password.png')}
          value={pass}
          isValid={badPass == '' ? true : false}
          onChangeText={txt => setPass(txt)} />
        {
          badPass != '' && <Text style={{ color: 'red', marginLeft: 20 }}>{badPass}</Text>
        }

        <CustomTextInput placeholder={'Enter Mail'}
          iconn={require('../../Images/mail.png')}
          value={mail}
          isValid={badMail == '' ? true : false}
          onChangeText={txt => setMail(txt)} />
        {
          badMail != '' && <Text style={{ color: 'red', marginLeft: 20 }}>{badMail}</Text>
        }

        <CustomTextInput placeholder={'Enter Mobile'}
          iconn={require('../../Images/call.png')}
          value={ph}
          isValid={badPh == '' ? true : false}
          onChangeText={txt => setPh(txt)} />
        {
          badPh != '' && <Text style={{ color: 'red', marginLeft: 20 }}>{badPh}</Text>
        }

        <LinearGradient colors={[Theme_Color, Theme_Color1]} style={style.btn}>
          <TouchableOpacity style={[style.btn, { justifyContent: 'center', alignItems: "center", marginTop: 0 }]}
            //  onPress={()=>{if(validate()){
            //    loginApiCall()
            //  }}}>
            onPress={() => { regiterApiCall() }}>
            <Text style={[style.btnTxt, {}]}>Signup</Text>
          </TouchableOpacity>
        </LinearGradient>
        <Loader visible={loading} />

        <Text style={[style.SignupTxt, {}]} onPress={() => { navigation.goBack() }}>Already have Account ?
          <Text style={[style.signuo, {}]}> Login</Text></Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Signup

