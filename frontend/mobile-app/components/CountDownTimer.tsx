import { View, Text } from 'react-native'
import React from 'react'
import Countdown, {zeroPad} from 'react-countdown'
import tw from "twrnc";

type Props = {
  auctionEnd: string
}

const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed, 
}: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
}) => {
    return (
        <View>
          {completed ? 
           <Text style={tw`text-red-500 text-sm`}>Auction Completed</Text>
          : days === 0 && hours < 10 ?
           <Text style={tw`text-gray-600 text-sm`}>{zeroPad(days)}d: {zeroPad(hours)}h: {zeroPad(minutes)}m: {zeroPad(seconds)}s</Text>
          : 
          <Text style={tw`text-gray-600 text-sm font-bold`}>{zeroPad(days)}d: {zeroPad(hours)}h: {zeroPad(minutes)}m: {zeroPad(seconds)}s</Text>
          }
        </View>
    )
}


const CountDownTimer = ({auctionEnd}: Props) => {
  return (
    <View>
       <Countdown date={auctionEnd} renderer={renderer} />
    </View>
  )
}

export default CountDownTimer;