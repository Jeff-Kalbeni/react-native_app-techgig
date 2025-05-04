import React from 'react'
import { Text, View } from 'react-native'

const SecondAlsoNestedScreen = () => {
  return (
    <View style={{flex:1, backgroundColor:"yellow", alignItems:"center", justifyContent:"center"}}>
      <Text>Second Also-nested Second</Text>
    </View>
  )
}

export default SecondAlsoNestedScreen