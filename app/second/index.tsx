import { Link, useRouter } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';

const SecondScreen = () => {
  const router = useRouter();
  return (
    <View style={{justifyContent:"center", alignItems:"center", marginTop:300}}>
      <Text>Second Screen</Text>
      <Link href="/second/nested" push asChild>
        <Button title="Push to /second/nested" />
      </Link>
      <Button 
        title="Back"
        onPress={() => {
          router.back();
        }}
      />
    </View>
  )
}

export default SecondScreen