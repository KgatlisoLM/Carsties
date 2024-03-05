import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from "twrnc";
import { useParamsStore } from '../hooks/useParamsStore';


const filterByButtons = [
    {
        icon: 'https://img.icons8.com/ios/100/ffffff/audi.png',
        value: 'Audi',
        label: 'Audi'
    },
    {
        icon: 'https://img.icons8.com/ios/50/ffffff/bmw.png',
        value: 'Bmw',
        label: 'Bmw'
    },
    {
        icon: "https://img.icons8.com/ios/100/ffffff/ferrari-badge.png",
        value: 'Ferrari',
        label: 'Ferrari' 
    },
    {
        icon: "https://img.icons8.com/ios/100/ffffff/jeep.png",
        value: 'Jeep',
        label: 'Jeep'
    },
    {
        icon:  "https://www.iconsdb.com/icons/preview/white/dodge-xxl.png",
        value: 'Dodge',
        label: 'Dodge'
    },
    {
        icon: "https://img.icons8.com/external-tal-revivo-regular-tal-revivo/100/ffffff/external-mercedes-benz-is-a-german-global-automobile-brand-known-for-luxury-vehicles-automotive-regular-tal-revivo.png",
        value: 'Mercedes',
        label: 'Mercedes'
    },
    {
        icon:  "https://img.icons8.com/ios/100/ffffff/volkswagen.png",
        value: 'VolksWagen',
        label: 'VolksWagen'
    },
    {
        icon:  "https://img.icons8.com/ios/100/ffffff/lamborghini.png",
        value: 'Lamborghini',
        label: 'Lamborghini'
    },
    {
        icon:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK024ync-sa9nSQmSvcuAe0gx354Jy0yCJaXj8EbBr1FwsQcSRh-rJ-jdok_UreOR58oU&usqp=CAU',
        value: 'Porsche',
        label: 'Porsche'
    }
]


filterByButtons.sort((a, b) => {
    if(a.label < b.label){
        return -1;
    };

    if(a.label > b.label){
        return 1;
    };
    return 0;
});


const filters = () => {
 const setSearchValue = useParamsStore((state) => state.setSearchValue);
 const reset = useParamsStore((state) => state.reset);
 const searchValue = useParamsStore((state) => state.searchValue);
 


  return (
    <ScrollView 
    contentContainerStyle={{
        paddingHorizontal: 20,
        paddingTop: 10
    }}
    horizontal
    showsHorizontalScrollIndicator={false}>
        {filterByButtons.map(({icon, value, label}) => (<>
        <View style={tw`flex flex-col items-center mr-10`}>
        {searchValue === value ? (<>
            <TouchableOpacity
                 style={tw`px-3 py-3 bg-gray-900 rounded-full mb-3`}
                 key={icon}
                 onPress={reset}>
                <Image
                    source={{
                        uri: "https://img.icons8.com/ios/100/ffffff/multiply.png"
                    }}
                   style={[ {resizeMode: 'contain'}, tw`h-10 w-10 rounded-full`]}
                 />
             </TouchableOpacity>
              <Text>clear</Text>
              </> ) : ( <>
              <TouchableOpacity
              style={tw`px-3 py-3 bg-gray-900 rounded-full mb-3`}
              key={icon}
              onPress={() => setSearchValue(value)}>
             <Image
                 source={{
                     uri: icon
                 }}
                style={[ {resizeMode: 'contain'}, tw`h-10 w-10 rounded-full`]}
              />
          </TouchableOpacity>
           <Text>{label}</Text>
           </> )}
     
        </View>
         </>))

        }
    
    </ScrollView>
  )
}

export default filters