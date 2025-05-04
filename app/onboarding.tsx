import ManWithFood from '@/assets/images/8140.jpg'
import Carrot from '@/assets/images/carrot.png'
import { useFonts } from "expo-font"
import { router } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, Platform, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'



const Onboarding = () => {
  const [fontsLoaded] = useFonts({
    'Gilroy-Regular':require('../assets/fonts/Gilroy-Regular.ttf'),
    'Gilroy-Bold':require('../assets/fonts/Gilroy-Bold.ttf')
  });
  if(!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView>
        <ScrollView >
          <StatusBar  barStyle={Platform.OS === "android" ? 'dark-content':'light-content'}/>
          <ImageBackground source={ManWithFood} 
          style={{flex:1, width: '100%', height: 695}} resizeMode='cover' >
            <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 10, paddingBottom: 30}}>
              <Image source={Carrot} style={{height:60, width: 50, marginBottom: 15, marginTop: 400, padding: 10}}/>
              <Text style={{color:'white',fontWeight: 700, fontSize:40, height: 120, width: 300, textAlign: 'center', fontFamily: "Gilroy-Regular"}}>Welcome to our Store</Text>
              <Text style={{color:'white', fontSize:13, marginBottom:20}}>Get your groceries in as fast as one hour</Text>
              
              <TouchableOpacity style={{backgroundColor:'#53B175', borderRadius:19, marginHorizontal:50, flexDirection: 'row', alignItems:'center'}} onPress={()=>{router.push('/sign-in')}}>
                <Text style={{color:'white', fontSize:16, marginHorizontal:110, width:100, marginVertical:20}}>Get Started</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Onboarding;


