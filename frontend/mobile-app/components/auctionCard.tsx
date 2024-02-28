import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import IconButton from "./IconButton";
import CountDownTimer from "./CountDownTimer";

type Props = {
  imageUrl: string;
  reservePrice: string | number;
  model: string;
  make: string;
  year: number;
  mileage: number;
  currentHighBid: number;
  auctionEnd: string
};

const auctionCard = ({
  imageUrl,
  reservePrice,
  model,
  make,
  year,
  mileage,
  currentHighBid,
  auctionEnd
}: Props) => {
  const zaFormat = (price: any) => {
    price = new Intl.NumberFormat("en-ZA", {
      currency: "ZAR",
      minimumFractionDigits: 0,
    }).format(price);

    return price;
  };

  return (
    <TouchableOpacity style={tw`mb-3`}>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={[tw`h-44  rounded-sm`, { resizeMode: "cover" }]}
      />
      <View style={tw`p-2`}>
      <View style={tw`flex-row items-center`}>
        <MaterialCommunityIcons name="timer-outline"  size={20} color="red" />
         <CountDownTimer auctionEnd={auctionEnd}/>
      </View>
      <View style={tw`flex-row justify-between items-center`}>
        <Text style={tw`font-semibold text-lg`}>
          {make} {model}
        </Text>
        <View>
          <Text style={tw`text-xs text-gray-400`}>Highest Bid</Text>
          <Text
            style={tw`text-xs font-semibold text-lg self-end text-blue-500`}
          >
            R {zaFormat(currentHighBid)}
          </Text>
        </View>
      </View>
      <View style={tw`flex-row items-center mb-2`}>
        <View style={tw`flex-row items-center`}>
          <MaterialCommunityIcons
            name="calendar-month-outline"
            size={22}
            color="#1e1e1e"
            style={tw`text-blue-500`}
          />
          <Text style={tw`px-1`}>{year}</Text>
        </View>
        <View style={tw`flex-row items-center px-1`}>
          <MaterialCommunityIcons name="gauge" size={22} style={tw`text-blue-500`} color="#1e1e1e" />
          <Text style={tw`px-1`}>{zaFormat(mileage)} km</Text>
        </View>
      </View>
      <View style={tw`flex-row`}>
        <View style={tw`grow`}>
          <Text style={tw`text-xs text-gray-400`}>
            Reserved Price
          </Text>
          <Text style={tw`font-bold`}>R {zaFormat(reservePrice)}</Text>
        </View>
        <View>
          <IconButton
            title={"Bid Now"}
            onPress={""}
            icon={<FontAwesome5 name="arrow-right" size={12} color="white" />}
          />
        </View>
      </View>
      </View>
    
    </TouchableOpacity>
  );
};

export default auctionCard;
