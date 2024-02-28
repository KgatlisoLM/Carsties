
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from "twrnc";
type Props = {
    title: string,
    onPress: any
    icon: any 
}

const IconButton = ({ title, onPress, icon }: Props) => {
  return (
    <TouchableOpacity style={tw`flex-row items-center bg-blue-500 py-2 px-4 rounded-sm`} onPress={onPress}>
    <Text style={tw`text-white px-2`}>{title}</Text>
    {icon}
  </TouchableOpacity>
  )
}

export default IconButton