import {
  View,
  Text,
  StyleSheet,
  Platform,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import Constants from "expo-constants";
import tw from "twrnc";
import {
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
  BellIcon,
} from "react-native-heroicons/outline";
import { useEffect, useState } from "react";
import Filters from "../components/filters";
import AuctionCard from "../components/auctionCard";
import { useParamsStore } from "../hooks/useParamsStore";

const HomeScreen = () => {
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const searchValue = useParamsStore((state) => state.searchValue);

  useEffect(() => {
    fetchData();
  }, [searchValue]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://192.168.18.184:6001/search?searchTerm=${searchValue}&pageSize=10`
      );
      const json = await response.json();
      setListings(json.results);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaView style={[styles.androidSafeView, tw`bg-white pt-5`]}>
      {/* header */}
      <View style={tw`flex-row pb-3 items-center mx-4 gap-x-2 pt-2`}>
        <Image
          source={{
            uri: "https://www.pexels.com/photo/photography-of-a-guy-wearing-green-shirt-1222271/",
          }}
          style={[
            { width: 50, height: 50, resizeMode: "contain" },
            tw`h-10 w-10 bg-gray-300 p-4 rounded-full`,
          ]}
        />
        <View style={tw`flex-1`}>
          <Text style={tw`font-bold text-gray-400 text-xs`}>Welcome 👋</Text>
          <Text style={tw`font-bold text-lg items-center flex-row -mt-1`}>
            Bob Smith
          </Text>
        </View>
        <BellIcon size={24} color={"#1e1e1e"} />
      </View>

      {/* Search */}
      <View style={tw`flex-row items-center gap-x-2 pb-2 mx-4`}>
        <View
          style={tw`flex-1 flex-row gap-x-2 bg-gray-200 p-3 items-center rounded-full`}
        >
          <MagnifyingGlassIcon size={20} color={"gray"} />
          <TextInput
            placeholder="Search for cars by make, model or color"
            keyboardType="default"
          />
        </View>
        <View style={tw`bg-gray-800 px-2.5 py-2.5 rounded-full`}>
          <AdjustmentsVerticalIcon color={"#fff"} />
        </View>
      </View>

      {/* body */}

      <View style={tw`flex flex-col justify-between`}>
        <View style={tw`mb-10`}>
          {/* filters */}
          <Filters />
        </View>

        <View>
          <View style={tw`flex-row items-center justify-between px-6 mb-4`}>
            <Text style={tw`font-bold text-lg`}>Live Auction</Text>
            <Text style={tw`font-light text-xs`}>View All</Text>
          </View>

          {/* Listings */}
          <FlatList
            data={listings}
            style={tw`m-5 my-auto`}
            numColumns={1}
            renderItem={({ item }) => (
              <AuctionCard
                id = {item.id}
                imageUrl={item.imageUrl}
                reservePrice={item.reservePrice}
                model={item.model}
                make={item.make}
                mileage={item.mileage}
                year={item.year}
                currentHighBid={item.currentHighBid}
                auctionEnd={item.auctionEnd}
                color={item.color}
                transmission={item.transmission}
                engine={item.engine}
                drivenWheels={item.drivenWheels}
                status={item.status}

              />
            )}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  androidSafeView: {
    paddingTop: Platform.OS == "android" ? Constants.statusBarHeight : null,
  },
});
