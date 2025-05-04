import { Stack } from 'expo-router';
import React from 'react';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title:"Home", headerShown:false, }}/>
      <Stack.Screen name="home-nested" options={{title:"nested-home"}}/>
      <Stack.Screen name="onboarding01" options={{headerShown:false}}/>
      <Stack.Screen name="onboarding02" options={{headerShown:false}}/>
      <Stack.Screen name="onboarding03" options={{headerShown:false}}/>
      <Stack.Screen name="home-scroll" options={{headerShown:false}}/>
    </Stack>
  );
}

export default Layout