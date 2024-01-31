import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { white } from '../utils/Color'

const Animatedstepform = () => {
    const [selectedstep, setselectedstep] = useState(0)
    const progress= useRef(new Animated.Value(0)).current;
    const progress1= useRef(new Animated.Value(0)).current;
    const progress2= useRef(new Animated.Value(0)).current;


    const start1=()=>{
        Animated.timing(progress,{
            toValue:100,
            duration:3000,
            useNativeDriver:false
        }).start();
    }

    const start2=()=>{
        Animated.timing(progress1,{
            toValue:100,
            duration:3000,
            useNativeDriver:false
        }).start();
    }

    const start3=()=>{
        Animated.timing(progress2,{
            toValue:100,
            duration:3000,
            useNativeDriver:false
        }).start();
    }

    return (
        <View style={{ flex: 1, backgroundColor: white}}>
            <View style={{ width: '100%', alignItems: 'center',padding:50,}}>
                <View style={{ width: 30, height: 30, backgroundColor: selectedstep>0?'purple':'#9e9e9e', borderRadius: 15,justifyContent:'center',alignItems:'center' }}>
                    <Text style={{color:white}}>1</Text>
                    </View>
                    <View style={{ width: 5, height: 100, backgroundColor: '#9e9e9e'}}/>

                <View style={{ width: 30, height: 30, backgroundColor: selectedstep>1?'purple':'#9e9e9e', borderRadius: 15,justifyContent:'center',alignItems:'center'  }} >
                <Text style={{color:white}}>2</Text>
                </View>
                <View style={{ width: 5, height: 100, backgroundColor: '#9e9e9e'}}/>

                <View style={{ width: 30, height: 30, backgroundColor: selectedstep>2?'purple':'#9e9e9e', borderRadius: 15,justifyContent:'center',alignItems:'center'  }} >
                <Text style={{color:white}}>3</Text>
                </View>
                
            </View>

            <View style={{ width: '100%',alignItems: 'center', position:'absolute',top:0,padding:50 }}>                
                <Animated.View style={{ width: 5, height: progress, backgroundColor:'purple',marginTop:30,}}/>
                <Animated.View style={{ width: 5, height: progress1,marginTop:30, backgroundColor: 'purple',}}/>
                <Animated.View style={{ width: 5, height: progress2, backgroundColor: 'purple',}}/>

            </View>

            <TouchableOpacity style={{ width: '50%', height: 60, marginTop:30,backgroundColor: 'purple', borderRadius: 10, alignSelf: "center", justifyContent: 'center', alignItems: "center" }} 
            onPress={()=>{
                if(selectedstep==1){
                    start1();
                }
                if(selectedstep==2){
                    start3();
                }
                if(selectedstep==3){
                    start3();
                }
                if(selectedstep==0){
                    setselectedstep(selectedstep+1)
                }else{
                setTimeout(()=>{
                    setselectedstep(selectedstep+1)
                 },3000)
                }
                }}>               
                 <Text style={{color:white}}>Animated step form</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Animatedstepform

const styles = StyleSheet.create({})