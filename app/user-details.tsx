import User from "@/assets/images/user_icon.png";
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

type ItemProps = {
  name: string;
  email: string;
  city: string;
}

const Item = ({name, email, city}: ItemProps) => (
  <View style={{
    backgroundColor: "white",
    marginVertical:10,
    borderRadius:15,
    gap:10,
    alignItems:"center",
    justifyContent:"center",
    padding: 5,
  }}>
    <View 
    style={{
      borderRadius: 25,
      height: 50,
      width: 40,
      
      }}>
        <Image source={User} style={{width:'100%', height:50,}} resizeMode="cover"/>
    </View>

    <View>
      <Text style={{fontSize:17, fontWeight:700, color:"black"}}>{name}</Text>
      <Text style={{fontSize:15, color:"gray"}}>{email}</Text>
      <Text style={{fontSize:12, color:"lightgray"}}>{city}</Text>
    </View>
  </View>
)


type UserType = {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  }
}

const UserDetails = () => {
  const [userData, SetUserData] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => 
    {handleAPI();
    },
    []);

  const handleAPI = async () => {
      setLoading(true);
      try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const userData = await response.json();
      SetUserData(userData);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
  }

  if (loading) {
    return (
      <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }

  
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={{flexDirection:"row", justifyContent:"space-between",
          marginBottom:5,
          marginHorizontal:20,
          marginTop:5
        }}>
          <Text>List of Users</Text>
          <TouchableOpacity
            style={{
              backgroundColor:"#FFFFFF",
              borderRadius:10,
              padding:5
            }}
            onPress={() => handleAPI()}>
            <Text style={{color:"blue", fontSize:12, fontWeight:700}}>Refresh</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          gap:5,
          backgroundColor:"#FAF9F6",
          alignItems:"center",
          justifyContent:"center",}}>
          <FlatList
            data={userData}
            renderItem={(({item}) =>
              <Item
                name={item.name}
                email={item.email}
                city={item.address.city}
              />)}
            keyExtractor={item => item.id.toString()}
          />

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default UserDetails