import { Link } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';

const SecondNestedScreen = () => {
  return (
    <View style={{justifyContent:'center', alignItems:"center", alignContent:"center",backgroundColor:"pink", flex:1}}>
      <Text>Second Next Screen</Text>
      <Link href="/second/also-nested" push asChild>
        <Button title="Push to /second/also-nested" />
      </Link>
    </View>
  )
}

export default SecondNestedScreen;