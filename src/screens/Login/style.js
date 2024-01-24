import { Dimensions, StyleSheet } from "react-native"
import { Theme_Color, white, bg_Color, Text_Color, Theme_Color1 } from "../../utils/Color"

export default StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: bg_Color,
   },
   logo: {
      width: 100,
      height: 100,
      alignSelf: "center",
      marginTop: Dimensions.get('window').height / 8
   },
   welcomeTxt1: {
      color: 'black',
      fontWeight: '500',
      fontSize: 30,
      alignSelf: "center"
   },
   welcomeTxt2: {
      color: Theme_Color1,
   },
   btn: {
      marginTop: 40,
      width: '90%',
      height: 55,
      borderRadius: 10,
      alignSelf: "center"
   },
   btnTxt: {
      color: white,
      fontWeight: '600',
      fontSize: 20
   },
   SignupTxt: {
      color: 'black',
      fontWeight: '500',
      fontSize: 18,
      alignSelf: "center",
      marginTop:30
   },
   signuo:{
      color: Theme_Color1,
      fontWeight: '500',
      fontSize: 18,
      marginLeft:10
   }
})