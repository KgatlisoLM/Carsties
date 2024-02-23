import Image from "next/image";
import React from "react";
import CountDownTimer from "./CountDownTimer";
import CarImage from "./CarImage";
import { Auction } from "@/types/Index";

type Props = {
  auction: Auction;
};

function AuctionCard({ auction }: Props) {
  return (
    <>
      <a href="#" className="group">
        <div className="w-full bg-gray-200 aspect-w-16 aspect-h-10 rounded-md overflow-hidden">
          <div>
              <CarImage imageUrl={auction.imageUrl} make={auction.make} model={auction.model}/>
            <div className="absolute bottom-0 left-0">
              <CountDownTimer auctionEnd={auction.auctionEnd} />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <h3 className="text-gray-700">
            {auction.make} {auction.model}
          </h3>
          <p className="font-semibold text-sm">{auction.year}</p>
        </div>
      </a>
    </>
  );
}

export default AuctionCard;
