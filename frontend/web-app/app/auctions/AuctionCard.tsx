import Image from "next/image";
import React from "react";
import CountDownTimer from "./CountDownTimer";
import CarImage from "./CarImage";
import { Auction } from "@/types/Index";
import { PiEngineFill } from "react-icons/pi";
import { FaRoad } from "react-icons/fa";
import { GiCarWheel, GiGearStickPattern } from "react-icons/gi";
import moment from "moment";

type Props = {
  auction: Auction;
};

function AuctionCard({ auction }: Props) {




const zaFormat = (price: any) => {
   price =  new Intl.NumberFormat('en-ZA', {
        currency: 'ZAR',
        minimumFractionDigits: 0
  }).format(price);

  return price;
};

const dateFormat = (date: string) => {
   date = moment(date).format('Do MMM YYYY');
   return date;
}



  return (
    <div className="border-2 p-2 rounded-xl shadow-lg">
      <a href="#" className="group">
        <div className="w-full bg-gray-200 aspect-w-16 aspect-h-10 rounded-xl overflow-hidden">
          <div>
              <CarImage imageUrl={auction.imageUrl} make={auction.make} model={auction.model}/>
            <div className="absolute bottom-0 left-0">
              <CountDownTimer auctionEnd={auction.auctionEnd} />
            </div>
          </div>
        </div>
        <div className="flex-col items-center mt-4 p-2">
          <h3 className="text-blue-600 text-sm font-bold">
            R {zaFormat(auction.reservePrice)}
          </h3>
          <p className="font-semibold text-sm">{auction.make} {auction.model} {auction.year}</p>
          <div className="text-xs text-gray-400">{dateFormat(auction.createdAt) } - {dateFormat(auction.auctionEnd)}</div> 
        </div>
        <div className="flex justify-between p-2">
           <div className="flex flex-col items-center border-2 p-2 rounded-xl shadow-md">
             <PiEngineFill className="w-6 h-6"/>
             <span className="text-xs">2.0 LTR</span>  
           </div>
           <div className="flex flex-col items-center border-2 p-2 rounded-xl shadow-md">
             <FaRoad className="w-6 h-6"/>
             <span className="text-xs">{zaFormat(auction.mileage)} km</span>  
           </div>
           <div className="flex flex-col items-center border-2 p-2 rounded-xl shadow-md">
             <GiGearStickPattern className="w-6 h-6"/>
             <span className="text-xs">Automatic</span>  
           </div>
           <div className="flex flex-col items-center border-2 p-2 rounded-xl shadow-md">
             <GiCarWheel className="w-6 h-6"/>
             <span className="text-xs">Rear Wheel</span>  
           </div>
        </div>
        <div className="flex justify-between text-sm">
         
           <button 
             className={`py-2 px-14 bg-red-600 text-white rounded-full`} 
             disabled={auction.status === "ReserveNotMet" && 'Finished' ? true : false}>
             Place bid
           </button>
           <button className="py-2 px-14 bg-gray-800 text-white rounded-full">
              Details
           </button>
        </div>
      </a>
    </div>
  );
}

export default AuctionCard;
