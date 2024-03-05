import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import tw from "twrnc";
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import CountDownTimer from '../components/CountDownTimer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

type  ParamsList = {
   Props: {
    id: string
    imageUrl: string;
    reservePrice: number;
    model: string;
    make: string;
    year: number;
    mileage: number;
    currentHighBid: number;
    auctionEnd: string
    color:string;
    transmission:string;
    engine:string;
    drivenWheels:string;
    status:string
  };
}



const CarDetailsScreen = () => {

  const navigation = useNavigation();


  const {params: {id,
    imageUrl,
    reservePrice,
    model,
    make,
    year,
    mileage,
    currentHighBid,
    auctionEnd,
    color,
    transmission,
    engine,
    drivenWheels,
    status
       },
   } = useRoute<RouteProp<ParamsList,'Props'>>();


   const zaFormat = (price: any) => {
    price = new Intl.NumberFormat("en-ZA", {
      currency: "ZAR",
      minimumFractionDigits: 0,
    }).format(price);

    return price;
  };


  return (<>
  
    <View style={tw``}>
        <Image 
           source={{
             uri: imageUrl
           }}
           style={tw`w-full h-82 bg-gray-300 p-4`}
         />
         <TouchableOpacity
           onPress={navigation.goBack}
           style={tw`absolute top-14 left-5 p-2 bg-gray-100 rounded-full`}
          >
           <ArrowLeftIcon size={20} color={"#1e1e1e"} />
         </TouchableOpacity>
     </View>
     <View style={tw`flex-1 p-4`}>
      <View style={tw`flex flex-col`}>
       <View style={tw`mb-2`}>
            <Text style={tw`font-semibold text-lg`}>
              {make} {model}
            </Text>
        </View>
        <View style={tw`flex flex-row justify-between mb-5`}>
            <View>
                <Text style={tw`text-xs text-gray-500`}>Top Bid</Text>
                <Text style={tw`font-bold text-lg`}>R {zaFormat(currentHighBid)}</Text>
            </View>
            <View>
                <Text style={tw`self-end px-2 py-1 ${status === 'Live' ? 'bg-green-500': status === 'Finished' ? 'bg-red-500' : 'bg-amber-500'}  rounded-full text-xs text-white`}>{status}</Text>
                <Text style={tw``}><CountDownTimer auctionEnd={auctionEnd} /></Text>
            </View>
        </View>
        <View style={tw`flex flex-row justify-between`}>
            <View style={tw`flex flex-col items-center rounded-lg border-2 border-gray-300 px-3 py-2`}>
                <MaterialCommunityIcons name="engine" size={24} color="black" /> 
                <Text>{engine}</Text>
            </View>
            <View style={tw`flex flex-col items-center rounded-lg border-2  border-gray-300 px-3 py-2`}>
                <FontAwesome name="road" size={24} color="black" />
                <Text>{zaFormat(mileage)} KM</Text>
            </View>
            <View style={tw`flex flex-col items-center rounded-lg border-2  border-gray-300 px-3 py-2`}>
               <MaterialCommunityIcons name="car-shift-pattern" size={24} color="black" />
                <Text>{transmission}</Text>
            </View>
            <View style={tw`flex flex-col items-center rounded-lg border-2 border-gray-300 px-3 py-2`}>
              <MaterialCommunityIcons name="steering" size={24} color="black" />
                <Text>{drivenWheels}</Text>
            </View>
        </View>
      </View>
     </View>
    </>)
}

export default CarDetailsScreen;