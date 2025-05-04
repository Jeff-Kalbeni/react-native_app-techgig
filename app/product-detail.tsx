import ApplePhoto from '@/assets/images/apple.png';
import ArrowDown from '@/assets/images/arrow-down.png';
import ArrowLeft from '@/assets/images/arrow-head-left.png';
import ArrowRight from '@/assets/images/arrow-right.png';
import ShareIcon from '@/assets/images/export symbol.png';
import Like from '@/assets/images/heart-image.png';
import Minus from '@/assets/images/minus-sym.png';
import Star from '@/assets/images/orange star.png';
import Plus from '@/assets/images/plus-sym.png';
import Hrule from '@/components/hrule';
import { useFonts } from 'expo-font';
import { router } from 'expo-router';
import React from 'react';
import { Image, Platform, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const ProductDetail = () => {
  const [fontsLoaded] = useFonts({
  'Gilroy-Bold': require('@/assets/fonts/Gilroy-Bold.ttf')

  });
  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar barStyle={Platform.OS === "android" ? 'dark-content':'light-content'}/>
        <View style={{marginVertical:10, marginHorizontal:20}}>
          <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
            <TouchableOpacity
              onPress={() => {
                router.push('/sign-in')
              }}
            >
              <Image source={ArrowLeft} resizeMode='contain' style={{ width: 25, height: 25 }} />
            </TouchableOpacity>
            
            <TouchableOpacity>
              <Image source={ShareIcon} resizeMode='contain' style={{ width: 25, height: 25 }} />
            </TouchableOpacity>
          </View>

          <Image source={ApplePhoto} style={{width:'100%', height:400}} resizeMode='contain'/>
          <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{fontSize: 20, fontWeight: 700}}>Natural Red Apple</Text>
            <TouchableOpacity><Image source={Like} style={{width: 25, height: 25}} resizeMode='contain'/></TouchableOpacity>
          </View>
          <Text style={{color:'grey', fontSize:12, fontWeight:600}}>1kg, Price</Text>

          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <View style={{flexDirection:'row', alignItems:'center',}}>
              <TouchableOpacity>
              <Image source={Minus} style={{width: 20, height: 20, margin: 5}} resizeMode='contain'/>
              </TouchableOpacity>

              <View style={{borderColor:'#ccc', borderWidth: 2, borderRadius: 11, height: 30, width:30, margin: 5, alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontWeight:500 }}>1</Text>
              </View>
            
              <TouchableOpacity><Image source={Plus} style={{width: 20, height: 20, margin: 5}} resizeMode='contain'/></TouchableOpacity>
            </View>

            <Text style={{fontSize: 18, fontFamily: 'Gilroy_Bold', fontWeight: 700}}>$4.99</Text>
          </View>
          
          <Hrule
            borderBottomColor='#ccc'
            borderBottomWidth={1}
            marginTop={30}
            marginBottom={10}
          />

          <View>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
              <Text style={{fontSize:16, fontWeight: 600}}>Product Detail</Text>
              <TouchableOpacity>
                <Image source={ArrowDown} style={{width: 20, height: 20, margin: 5}} resizeMode='contain'/>
              </TouchableOpacity>
            </View>

            <Text style={{color:'grey', fontSize:11}}>Apples are nutritious. Apples may be good for weight loss. Apples may be good for your heart. As part of a healthful and varied diet.</Text>
          </View>

          <Hrule
            borderBottomColor='#ccc'
            borderBottomWidth={1}
            marginTop={20}
            marginBottom={10}
          />

          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
            <Text style={{fontSize:16, fontWeight: 600}}>Nutrition</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <View style={{backgroundColor:'#cccccc80', borderRadius: 3, height: 17, width:40, margin: 5, alignItems:'center', justifyContent:'center'}}>
                  <Text style={{fontWeight:500, fontSize:10, marginHorizontal:2, color:'grey' }}>100gr</Text>
              </View>
              <TouchableOpacity>
                <Image source={ArrowRight} style={{width: 20, height: 20, margin: 5}} resizeMode='contain'/>
              </TouchableOpacity>
              
            </View>
            
          </View>

          <Hrule
            borderBottomColor='#ccc'
            borderBottomWidth={1}
            marginTop={10}
            marginBottom={10}
          />

          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
            <Text style={{fontSize:16, fontWeight: 600}}>Review</Text>
            <View style={{flexDirection:'row'}}>
              <Image source={Star} style={{width: 20, height: 20, margin: 5}} resizeMode='contain'/>
              <Image source={Star} style={{width: 20, height: 20, margin: 5}} resizeMode='contain'/>
              <Image source={Star} style={{width: 20, height: 20, margin: 5}} resizeMode='contain'/>
              <Image source={Star} style={{width: 20, height: 20, margin: 5}} resizeMode='contain'/>
              <Image source={Star} style={{width: 20, height: 20, margin: 5}} resizeMode='contain'/>
              <TouchableOpacity>
                <Image source={ArrowRight} style={{width: 20, height: 20, margin: 5}} resizeMode='contain'/>
              </TouchableOpacity>
            </View>
          </View>
          
          <TouchableOpacity style={{backgroundColor:'#53B175', borderRadius:19, marginHorizontal:3, marginTop: 30, flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
            <Text style={{color:'white', fontSize:15, marginHorizontal:10, marginVertical:20}}>Add To Basket</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProductDetail;