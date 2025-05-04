import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { Tabs } from "expo-router";
import React from "react";

const TabLayout = () => {
  return(
    <Tabs screenOptions={{headerShown: false}}
    
    >
      <Tabs.Screen name="home"
        options={{
          tabBarLabel: "Home",
          tabBarActiveTintColor: '#4169E1',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {display:"none"},
          tabBarIcon: ({focused}) => (<Feather name="home" size={24} color={focused? '#4169E1':'gray'} />)
        }}

      />
      <Tabs.Screen name="search"
        options={{
          tabBarLabel: "Search",
          tabBarActiveTintColor: '#4169E1',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({focused}) => (<Feather name="search" size={24} color={focused? '#4169E1':'gray'} />)
        }}
      />
      <Tabs.Screen name="menu"
        options={{
          tabBarLabel: "Menu",
          tabBarActiveTintColor: '#4169E1',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({focused}) => (<Feather name="menu" size={24} color={focused? '#4169E1':'gray'} />)
        }}
      />
      <Tabs.Screen name="profile"
        options={{
          tabBarLabel: "Menu",
          tabBarActiveTintColor: '#4169E1',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({focused}) => (<AntDesign name="user" size={24} color={focused? '#4169E1':'gray'} />)
        }}
      />
    </Tabs>
  );
}

export default TabLayout;