import ArrowLeft from '@/assets/images/arrow-head-left.png'
import ArrowRight from '@/assets/images/arrow-right.png'
import flag from '@/assets/images/flag.jpg'
import Hrule from '@/components/hrule'
import { router } from 'expo-router'
import React from 'react'
import { Image, Platform, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Number = () => {
  return (
    <SafeAreaView style={{marginHorizontal:20, marginVertical: 10}}>
      <StatusBar  barStyle={Platform.OS === "android" ? 'dark-content':'light-content'}/>
      <TouchableOpacity
        onPress={() => {
          router.push('/sign-in')
        }}
      >
        <Image source={ArrowLeft} resizeMode='contain' style={{ width: 25, height: 25 }} />
      </TouchableOpacity>
      <Text style={{fontSize:21, fontWeight:700, marginTop: 50}}>Enter your mobile number</Text>
      <Text style={{fontSize:17, fontWeight:500, marginTop: 50, color:'grey'}}>Mobile Number</Text>

      <View style={{flexDirection: 'row', alignContent:'center', alignItems:'center'}}>
        <Image source={flag} style={{width:30, height: 20,}}/>
        <TextInput placeholder='+880' keyboardType='phone-pad'  style={{margin: 5}}/>
      </View>
      
      <Hrule
        borderBottomColor='#ccc'
        borderBottomWidth={1}
        marginVertical={0}
      />

      <TouchableOpacity
      onPress={() => {router.push('/product-detail')}}
      style={{flexDirection:'row-reverse', backgroundColor:'#53B175', height: 50, width: 50, borderRadius: 25, alignItems:'center', justifyContent:'center', padding: 10, marginTop: 170, alignSelf:'flex-end'}}>
        <Image source={ArrowRight} style={{tintColor:'white', width: 20, height:20, marginHorizontal:10, marginVertical:10}} resizeMode='contain'/>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

export default Number