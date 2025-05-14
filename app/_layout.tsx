import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Tabs } from "expo-router";
import React from "react";
import "../global.css";


const InitialLayout = () => {
  return (
    <React.Fragment>
      <Tabs screenOptions={{ tabBarActiveTintColor:'teal',
      headerShown: false,
      tabBarShowLabel:false
      }}
      backBehavior="order"
      >
        <Tabs.Screen
          name="(home)"
          options={({route})=>{
            const routeName = getFocusedRouteNameFromRoute(route) ?? "";

            const hiddenScreens = ["index", "onboarding01", "onboarding02", "onboarding03"];
            const shouldHideTabBar = hiddenScreens.includes(routeName);

            return {
            title:"Home",
            headerShown:false,
            tabBarStyle: {display: shouldHideTabBar ? "none" : "flex"},
            tabBarLabel:"Index",
            tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="compass" 
            size={size}
            color={color} />),
          }
        }}/>
        <Tabs.Screen
          name="onboarding"
          options={{
            href:null,
            title:"Onboarding",
            tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="numeric-2-box-outline" 
            size={size} 
            color={color} />),
        }}/>
        <Tabs.Screen 
          name="sign-in" 
          options={{
            href:null,
            title:"Sign In",
            tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="numeric-3-box-outline" 
            size={size} 
            color={color}/>),
        }}/>
        <Tabs.Screen 
          name="number"
          options={{
            title:"Number",
            href:null,
            tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="numeric-4-box-outline" 
            size={size} 
            color={color} />),
        }}/>
        <Tabs.Screen 
          name="product-detail"
          options={{
            href:null,
            title:"Product",
            tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="numeric-5-box-outline" 
            size={size} 
            color={color}/>),
        }}/>
        <Tabs.Screen
        name="second"
        options={{
          headerShown:false,
          popToTopOnBlur:true,
          title:"Second",
          tabBarLabel:"Second",
          tabBarIcon:({color, size}) => (
            <Ionicons name="calendar"
            size={size} 
            color={color} />
          )
        }
        }
        />
        <Tabs.Screen
          name="about"
          options={{
            title:"About",
            tabBarIcon: ({color, size}) => (<Ionicons name="search-outline" 
            size={size} 
            color={color} />),
        }}/>
        <Tabs.Screen
          name="(tabs)"
          options={{
            href:null,
            title:"(tabs)",
            tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="numeric-7-box-outline"
            size={size}
            color={color} />),
        }}/>
        <Tabs.Screen
          name="todoList"
          options={{
            title:"TodoList",
            tabBarIcon: ({color, size}) => (<MaterialIcons name="location-on"
            size={size}
            color={color} />),
        }}/>
        <Tabs.Screen
          name="todo-list"
          options={{
            title:"Todo-List",
            tabBarIcon: ({color, size}) => (<FontAwesome6 name="user-large"
            size={size}
            color={color} />),
        }}/>
        <Tabs.Screen
          name="user-details"
          options={{
            href:null,
            title:"Todo-List",
            tabBarIcon: ({color, size}) => (<FontAwesome6 name="user-large"
            size={size}
            color={color} />),
        }}/>
        
      </Tabs>
    </React.Fragment>
    // <Stack screenOptions={{headerShown: false}}>
    //   <Stack.Screen name="onboarding"/>
    // </Stack>
  );
}

export default InitialLayout;
