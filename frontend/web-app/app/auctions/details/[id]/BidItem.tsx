import { Bid } from "@/types/Index";
import { format } from "date-fns";
import React from "react";

type Props = {
  bid: Bid;
};

function BidItem({ bid }: Props) {
  function getBidInfo() {
    let bgColor = "";
    let text = "";

    switch (bid.bidStatus) {
      case "Accepted":
        bgColor = "bg-green-200";
        text = "Bid accepted";
        break;
      case "AcceptedBelowReserve":
        bgColor = "bg-amber-500";
        text = "Reserve not met";
        break;
      case "TooLow":
        bgColor = "bg-red-200";
        text = "bid was too low";
        break;
      default:
        bgColor = "bg-red-200";
        text = "Bid placed after auction finished";
        break;
    }
    return { bgColor, text };
  }

  const zaFormat = (price: any) => {
    price = new Intl.NumberFormat("en-ZA", {
      currency: "ZAR",
      minimumFractionDigits: 0,
    }).format(price);
    return price;
  };

  return (
    <div
      className={`
       border-gray-300 border-2 px-3 py-2 rounded-lg flex justify-between items-center mb-2
        ${getBidInfo().bgColor} 
   `}
    >
      <div className="flex flex-col">
        <span className="capitalize font-semibold">Bidder: {bid.bidder}</span>
        <span className="text-gray-700 text-sm">Time: {format(new Date(bid.bidTime), 'dd MMM yyyy h:mm a') }</span>
      </div>
      <div className="flex flex-col text-right">
        <div className="text-xl font-semibold">R{zaFormat(bid.amount)}</div>
        <div className="flex flex-row items-center font-medium">
          <span>{getBidInfo().text}</span>
        </div>
      </div>
    </div>
  );
}

export default BidItem;
