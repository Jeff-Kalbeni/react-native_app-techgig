import { Stack, usePathname } from 'expo-router';
import React from 'react';

const Layout = () => {
  const pathname = usePathname();
  
  return (
  <Stack screenOptions={{
    animation: pathname.startsWith("/second")? "default":"none"}}>
    <Stack.Screen name="index" options={{
        title:"Second"
      }}/>
    <Stack.Screen name="nested" options={{
        title:"Nested"
      }}/>
    <Stack.Screen 
      name="also-nested"
      options={{
        title:"Also-nested"
      }}
      />
  </Stack>
  )
}

export default Layout;