import HeadRight from "@/assets/images/arrHeadRight.png";
import ArrowDown from "@/assets/images/arrow-down.png";
import listItems from "@/assets/images/filter-lines.png";
import JournalImage from "@/assets/images/journal_img.jpg";
import Location from "@/assets/images/Location-icon.png";
import Music from "@/assets/images/music_1.png";
import Cover from "@/assets/images/ramen_1.png";
import Search from "@/assets/images/Search.png";
import SelfCare from "@/assets/images/selfcare_img.jpg";
import ball from "@/assets/images/sports_1.png";
import Swalla from "@/assets/images/swalla_img.jpg";
import YoungMan from "@/assets/images/youngman.png";
import React from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const DATA = [
  {
    id:'01',
    title:"Bigropy stories: A Journaling Workshop",
    listImage: JournalImage,
    location: "California, CA",
    price:"FREE",
    day:'30',
    month:"Sep"
  },
  {
    id:"02",
    title:"Creative self care: Guide to Intuitive Watercolor",
    listImage: SelfCare,
    location: "New York, NY",
    price:"$25.90",
    day:'01',
    month:"Sep"
  },
  {
    id: "03",
    title:"Graphic Design Swalla Bigger Event For Creators",
    listImage: Swalla,
    location: "Brooklyn, NY",
    price:"$78.57",
    day:'10',
    month:"Sep"
  },
]

type ItemProps = {
  title:string;
  listImage:object;
  location:string;
  price:string;
  day:string;
  month:string;
};

const Item = ({title, listImage, location, price, day, month}:ItemProps) => (
  <View
    style={{
      backgroundColor:"white",
      borderRadius:10,
      marginHorizontal:20,
      marginVertical:10,
      padding:10,
      flexDirection:"row",
      gap:10,
      flex:1,
      elevation:15,
      alignItems:"center"
    }}
  >
    
      <View style={{height:100, borderRadius:10,}}>
        <View style={{position:"absolute", top:10, left:10, backgroundColor:"white", paddingHorizontal:8, borderRadius:10, zIndex:1}}>
          <Text style={{fontWeight:700, fontSize:12, marginBottom:0}}>{day}</Text>
          <Text style={{color:"gray",fontSize:10, marginTop:0}}>{month}</Text>
        </View>
        <Image source={listImage} style={{width:100, height: 100, borderRadius:10}}/>
      </View>
    <View style={{flex:1,justifyContent:"space-between"}}>
      <Text style={{color:"black", fontWeight:700}}>{title}</Text>
      
      <View style={{flexDirection:"row",justifyContent:"space-between", marginTop:10,alignItems:"center", }}>
        <View style={{flexDirection:"row",gap:5, marginTop:10, alignItems:"center", justifyContent:"center"}}>
          <Image source={Location} resizeMode="cover"/>
          <Text style={{color:"gray", fontSize: 12}}>{location}</Text>
        </View>
        
        <View style={{borderRadius:10, backgroundColor:"#F3F5F6", padding:7, alignItems:"center"}}>
          <Text style={{color:"#5568F7",fontSize: 13}}>{price}</Text>
        </View>
      </View>
    </View>
  </View>
)

const HomeScroll = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{backgroundColor:"#F3F5F6", paddingBottom:20}}>
        <View style={{marginHorizontal:20, flexDirection:"row",alignItems:"center", justifyContent:"space-between", padding:10}}>
          <View style={{gap:2}}>
            <View style={{flexDirection:"row", gap:5}}>
              <Image source={Location}/>
              <Text style={{fontWeight:700, fontSize:12}}>Location</Text>
            </View>
            <View style={{flexDirection:"row", gap:7, alignItems:"center", justifyContent:"center"}}>
              <Text style={{fontSize:12, color:"gray"}}>California, USA</Text>
              <TouchableOpacity>
                <Image source={ArrowDown} style={{tintColor:"lightgray"}}/>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Image source={YoungMan}/>
          </View>
        </View>

        <View style={{flexDirection:"row", marginTop:20}}>
          <View
            style={{
              backgroundColor: "white",
              borderRadius:10,
              flexDirection:"row",
              marginHorizontal:20,
              padding: 10,
              alignItems:"center",
              width:230,
              }}>
            <Image source={Search}/>
            <TextInput placeholder="Search"/>
          </View>
          <TouchableOpacity style={{backgroundColor: "#5568F7", borderRadius:20,padding:19, alignItems:"center", justifyContent:"center", shadowColor:"#000",shadowOffset:{width:0, height:4}, shadowOpacity:0.5, shadowRadius:0.46,elevation:12}}>
              <Image source={listItems}/>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection:"row", marginTop:20, gap:16, marginLeft:20}}>
          <TouchableOpacity style={{backgroundColor: "#5568F7",alignItems:"center", flexDirection:"row",gap:3, borderRadius:19, padding:10,shadowColor:"#000",shadowOffset:{width:0, height:4}, shadowOpacity:0.5, shadowRadius:0.46,elevation:12}}>
            <Text style={{color:"white"}}>Music</Text>
            <Image source={Music}/>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: "#5568F7",alignItems:"center", flexDirection:"row",gap:3, borderRadius:19, padding:10,shadowColor:"#000",shadowOffset:{width:0, height:4}, shadowOpacity:0.5, shadowRadius:0.46,elevation:12}}>
            <Text style={{color:"white"}}>Sports</Text>
            <Image source={ball}/>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: "#5568F7",alignItems:"center", flexDirection:"row",gap:3, borderRadius:19, padding:10,shadowColor:"#000",shadowOffset:{width:0, height:4}, shadowOpacity:0.5, shadowRadius:0.46,elevation:12}}>
            <Text style={{color:"white"}}>Food</Text>
            <Image source={Cover}/>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: "#5568F7",alignItems:"center", flexDirection:"row",gap:3, borderRadius:19, padding:10, shadowColor:"#000",shadowOffset:{width:0, height:4}, shadowOpacity:0.5, shadowRadius:0.46,elevation:12}}>
            <Text style={{color:"white"}}>Music</Text>
            <Image source={Music}/>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection:"row", justifyContent:"space-between", marginHorizontal:20, marginVertical:20}}>
          <Text style={{fontWeight:700, fontSize:15}}>Explore</Text>
          <TouchableOpacity style={{flexDirection:"row", gap:3, alignItems:"center"}}>
            <Text style={{color:"gray", fontSize:12}}>See All</Text>
            <Image source={HeadRight}/>
          </TouchableOpacity>
        </View>
        <FlatList
          data={DATA}
          renderItem={(({item}) =>
            <Item 
              title={item.title}
              listImage={item.listImage}
              location={item.location}
              price={item.price}
              day={item.day}
              month={item.month}
            />
          )}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default HomeScroll;