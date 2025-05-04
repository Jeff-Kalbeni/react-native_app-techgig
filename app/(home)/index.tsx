// import React from 'react';
// import { Text, View } from 'react-native';

// const Index = () => {
//   return (
//     <>
//       <View>
//         <Text>Hey</Text>
//       </View>
//     </>
//   )
// }

// export default Index;













// import Flower from '@/assets/images/Py-Flower.png'
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Button, KeyboardAvoidingView, Platform, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Index = () => {
  const router = useRouter();
  const canGoBack = router.canGoBack();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowpassword] = useState(true)

  const handleLogin= ()=>{
    // if (email === "jeffkalbeni@gmail.com" && password === '1234567'){
    //   router.push('/todoList')
    // } else 
    if(email === "" || password === ""){ 
      //Alert.alert("Enter email or password")
      router.push('/onboarding01')
    }
    else {
      Alert.alert("Invalid email or password")
    }
  }
  

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 20}}>
      <StatusBar barStyle={Platform.OS === "android" ? 'dark-content':'light-content'} />
      <KeyboardAvoidingView style={{flex:1}}>
          <Text style={{textAlign: 'center', fontSize: 20, fontWeight:800, margin: 10, marginTop:10, color:'#5383EC'}}>Welcome Back!</Text>
          {/* <Image
            source={Flower}
            style={{width:"100%", height:300}}
            resizeMode='contain'
          /> */}
          <View style={{gap: 10}}>
            <View style={{justifyContent: 'center', alignItems:'center', marginTop:200,}}>
              <Text style={{fontSize:20, fontWeight: 700, color:'#5383EC'}}>Enter Your Credentials Below</Text>
            </View>
            
            <TextInput
            placeholder='Enter email'
            onChangeText={(text)=>{setEmail(text)}}
            style={{marginBottom:10,
            borderRadius: 10,
            borderColor: '#5383EC',
            borderWidth: 1,
            }}/>

            
            <View style={{marginBottom:40,
              borderRadius: 10,
              borderColor: '#5383EC',
              borderWidth: 1,
              flexDirection:'row',
              justifyContent:'space-between',
              alignItems:'center',
              padding:2}}>
              <TextInput
              placeholder='Enter password'
              onChangeText={(password)=>{setPassword(password)}}
              secureTextEntry={showPassword}/>
              <Feather
              onPress={()=>setShowpassword(!showPassword)}
              name={showPassword?"eye-off":"eye"} size={24} color="black" />
            </View>
            {/* <TextInput placeholder='Enter password' secureTextEntry={true} style={{marginBottom:10, borderRadius: 50, borderColor: 'red', borderWidth: 1}}/> */}
          </View>

          {/* <Link href="/home-nested" push asChild>
            <Button title="Push to /home-nested" />
          </Link> */}

          <TouchableOpacity
          onPress={()=>handleLogin()}
          style={{alignItems:'center',
          justifyContent:'center',
          backgroundColor:'#4A66AC',
          borderRadius: 10,
          marginTop:100,
          padding: 10}}>
            <Text style={{color:'white', fontSize:15, fontWeight: 600}}>Login</Text>
          </TouchableOpacity>

          {canGoBack?(
          <Button
            title="Back"
            onPress={() => {
              router.back();
            }}
          />) : null}
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}


{/* every component has the ability to have children
  {children} : {children: ReactNode} -> import from react.
  for type, we use semi-colon not colon
*/}

export default Index;
