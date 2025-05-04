// import React from 'react';
// import { Image, Text, TouchableOpacity } from 'react-native';

// type ButtonProps = {
//   title?: string;
//   backgroundColor?: string;
//   borderRadius?: number;
//   padding?: number;
//   color?: string;
//   marginHorizontal?: number;
//   marginBottom?: number;
//   marginTop?: number;
//   fontSize?: number;
//   URL?: object;
//   marginLeft?:number;
//   paddingLeft?:number;
//   width?:number;
//   height?:number;
//   marginHtl?:number;
//   paddingRight?:number;
//   onPress?:()=>void;
// }

// const Button = ({
//   title,
//   backgroundColor,
//   borderRadius,
//   padding,
//   color,
//   marginHorizontal,
//   marginBottom,
//   marginTop,
//   fontSize,
//   URL,
//   marginLeft,
//   paddingLeft,
//   width,
//   height,
//   onPress
// }:ButtonProps) => {
//   return (
//     <TouchableOpacity style={{backgroundColor:backgroundColor, borderRadius:borderRadius, marginHorizontal:marginHorizontal, marginBottom: marginBottom, marginTop:marginTop, flexDirection: 'row', alignItems:'center',}} onPress={onPress}>
//       <Image source={URL} style={{width:width, height:height, marginRight: 0, marginLeft: 20, tintColor:'white'}}/>
//       <Text style={{color:color, fontSize:fontSize, padding:padding, marginHorizontal:50, marginLeft:marginLeft, paddingLeft:paddingLeft}}>{title}</Text>
//     </TouchableOpacity>
//   )
// }

// export default Button




import { Image, Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  title: string;
  onPress?: () => void;
  backgroundColor?: string;
  borderRadius?: number;
  padding?: number;
  color: string;
  margin?: number;
  textAlign?: "center"| "left" | "right";
  width?: number;
  marginHorizontal?:number;
  marginBottom?:number;
  marginTop?:number;
  fontSize?:number;
  height?:number;
  URL?:object;
  marginLeft?:number;
  paddingBottom?:number;
  // ? makes the property optional
}

const Button = ({
  title,
  backgroundColor,
  onPress,
  borderRadius,
  padding,
  color,
  margin,
  textAlign,
  width,
  marginHorizontal,
  marginBottom,
  marginTop,
  fontSize,
  height,
  marginLeft, URL,
  paddingBottom
}: ButtonProps) => {
  return (
    
      <TouchableOpacity onPress={onPress} style={{backgroundColor: backgroundColor, borderRadius: borderRadius, padding:padding, margin:margin, width:width, marginHorizontal:marginHorizontal,marginBottom:marginBottom,marginTop:marginTop, height:height, marginLeft:marginLeft}}>
        <Image source={URL} style={{width: 24, height: 24}} />
        <Text style={{color:color, fontSize:fontSize}}>{title}</Text>
      </TouchableOpacity>
    
  )
}

export default Button;