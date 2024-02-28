import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from "twrnc";


const filterByButtons = [
    {
        icon: 'https://img.icons8.com/color/100/ffffff/ford.png',
        value: 'Ford',
        label: 'Ford' 
    },
    {
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR39mMM-9kBl1GTCIjaiJHE_LYRwdKZqQByww&usqp=CAU',
        value: 'Bugatti',
        label: 'Bugatti'
    },
    {
        icon: 'https://img.icons8.com/ios/50/ffffff/bmw.png',
        value: 'Bmw',
        label: 'Bmw'
    },
    {
        icon: 'https://img.icons8.com/ios/100/ffffff/audi.png',
        value: 'Audi',
        label: 'Audi'
    }
]



const filters = () => {

  return (
    <ScrollView 
    contentContainerStyle={{
        paddingHorizontal: 20,
        paddingTop: 10
    }}
    horizontal
    showsHorizontalScrollIndicator={false}>
        {filterByButtons.map((filter, index) => (<>
        <View style={tw`flex flex-col items-center mr-10 mb-20`}>
        <TouchableOpacity
             style={tw`px-3 py-3 bg-gray-900 rounded-full mb-3`}
             key={index}>
            <Image
                source={{
                    uri: filter.icon
                }}
               style={[ {resizeMode: 'contain'}, tw`h-10 w-10 rounded-full`]}
             />
         </TouchableOpacity>
          <Text>{filter.label}</Text>
        </View>
         </>))

        }
    
    </ScrollView>
  )
}

export default filters