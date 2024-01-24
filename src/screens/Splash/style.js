import { StyleSheet } from "react-native"
import { Theme_Color, white } from "../../utils/Color"

export default StyleSheet.create({
   container:{
    flex:1,
    backgroundColor:white,
    justifyContent:"center",
    alignItems:'center'
   },
   logo:{
    width:'40%',
    height:'30%',
    resizeMode:"contain"
   }
})