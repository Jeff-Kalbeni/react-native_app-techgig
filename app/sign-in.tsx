import Groceries from '@/assets/images/601.jpg'
import fbLogo from '@/assets/images/fb-logo.png'
import flag from '@/assets/images/flag.jpg'
import GGLogo from '@/assets/images/Google_Icons.png'
import logo from '@/assets/images/nectar logo.png'
import Hrule from '@/components/hrule'
import { router } from 'expo-router'
import React from 'react'
import { Image, Keyboard, Platform, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'

const SignIn = () => {
  const goToInputScreen = () => {
    Keyboard.dismiss();
  
    setTimeout(() => {
      router.push('/number');
    }, 100);
  };

  return (
    <View style={{flex:1, backgroundColor:'white'}}>
      <StatusBar  barStyle={Platform.OS === "android" ? 'dark-content':'light-content'}/>
      <View style={{position:'relative'}}>
        <View style={{zIndex: 2, marginLeft: 235, marginTop: 0, height: 50}}
        ><Image source={logo} resizeMode='contain' style={{height:90, width: '80%', }}/></View>
        <Image resizeMode='cover' source={Groceries} style={{width: '100%', height:350, position: 'absolute'}}/>
      </View>

      <View style={{marginHorizontal: 20}}>
        <Text style={{fontSize: 25, fontWeight: 400, marginTop: 320, width: 250, fontFamily:'Gilroy-Medium'}}>Get your groceries with nectar</Text>
        <View style={{flexDirection: 'row', alignContent:'center', alignItems:'center'}}>
          <Image source={flag} style={{width:30, height: 20,}}/>
          <TextInput 
          onPress={()=>{
            goToInputScreen();
            }}
          placeholder='+880'
          keyboardType='phone-pad'
          style={{margin: 5}}/>
        </View>
        <Hrule
          borderBottomColor='#ccc'
          borderBottomWidth={1}
          marginVertical={10}
        />

        <Text style={{color: 'grey', marginLeft: 60, fontSize: 13, marginBottom: 25}}>Or connect with social media</Text>

        <TouchableOpacity style={{backgroundColor:'#5383EC', borderRadius:19, marginHorizontal:10, marginBottom: 10, flexDirection: 'row', alignItems:'center', justifyContent:'center'}} onPress={()=>{router.push('/sign-in')}}>
          <Image source={GGLogo} style={{height: 30, width:30, tintColor:'white'}}/>
          <Text style={{color:'white', fontSize:12, marginHorizontal:10, marginVertical:20, fontWeight:600}}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'#4A66AC', borderRadius:19, marginHorizontal:10, marginBottom: 10, flexDirection: 'row', alignItems:'center', justifyContent:'center'}} onPress={()=>{router.push('/sign-in')}}>
          <Image source={fbLogo} style={{height: 20, width:20, tintColor:'white', marginLeft:15}}/>
          <Text style={{color:'white', fontSize:12, marginHorizontal:10, marginVertical:20, fontWeight:600}}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
      
      

    </View>
  )
}

export default SignIn