import { useRouter } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';

const About = () => {
  const router = useRouter();

  return (
    <View>
      <Text>Hello there!</Text>
      <Button 
      title="Back"
      onPress={() => {
        router.back();
      }}
      />
    </View>
  );
}

export default About;