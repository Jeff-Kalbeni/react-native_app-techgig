import Bg from "@/assets/images/onbbg02.jpg"
import RecL from "@/assets/images/rec_10.png"
import RecC from "@/assets/images/rec_11.png"
import RecR from "@/assets/images/rec_12.png"
import { router } from "expo-router"
import React from 'react'
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Onboarding02 = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={Bg}
        style={{}}
        imageStyle={{width:'100%', height:"100%"}}
        resizeMode="cover">
        <View style={{marginHorizontal:10}}>
          <TouchableOpacity onPress={() => {router.push('/onboarding03')}}>
            <Text style={{color: "white",fontSize:20, marginLeft:280, marginTop: 20}}>Skip</Text>
          </TouchableOpacity>

          <View style={{marginTop:470, alignItems:"center", marginHorizontal:30}}>
            <Text style={{fontSize:23, fontWeight:700, color:"white", }}>
              Events With Love
            </Text>
            <Text style={{color:"lightgray", textAlign:"center", fontSize:15}}>
              Explore The Best Booking App To Meet The ExtraOrdinary
            </Text>
          </View>

          <View style={{flexDirection:"row", marginTop:90, marginBottom:50, gap:5, marginHorizontal:60, alignItems:"center", justifyContent:"center"}}>
            <Image source={RecL} style={{width:25, height:10, tintColor:"blue"}} resizeMode="cover"/>
            <Image source={RecC} style={{width:35, height:10, tintColor:"blue"}} resizeMode="cover"/>
            <Image source={RecR} style={{width:25, height:10, tintColor:"blue"}} resizeMode="cover"/>
          </View>
        </View>
      </ImageBackground>
      
    </SafeAreaView>
  )
}

export default Onboarding02