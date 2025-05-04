import React from 'react';
import { View } from 'react-native';

type HrProps ={
  borderBottomColor?: string;
  borderBottomWidth?: number;
  marginVertical?: number;
  marginTop?:number;
  marginBottom?:number;
}

const Hrule = ({borderBottomColor, borderBottomWidth, marginVertical, marginTop, marginBottom}: HrProps) => {
  return (
    <View style={{
      borderBottomColor: borderBottomColor,
      borderBottomWidth: borderBottomWidth,
      marginVertical: marginVertical,
      marginTop: marginTop,
      marginBottom:marginBottom
    }}>
    </View>
  )
}

export default Hrule;