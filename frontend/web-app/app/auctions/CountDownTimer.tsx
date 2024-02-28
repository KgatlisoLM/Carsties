"use client";
import React from "react";
import Countdown, { zeroPad } from "react-countdown";

type Props = {
  auctionEnd: string;
};

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
    <div
      className={` text-white py-2 px-3 rounded-bl-md flex justify-center 
        ${
          completed
            ? "bg-red-600 bg-opacity-50"
            : days === 0 && hours < 10
            ? "bg-amber-600"
            : "bg-gray-600 bg-opacity-50"
        }`}
    >
      {completed ? (
        <span>Auction Finished</span>
      ) : (
        <span className="flex-col">
          <span className="text-xs">Currently Live</span>
          <div>
            {zeroPad(days)}
            <span className="text-xs"> dd: </span>
            {zeroPad(hours)}
            <span className="text-xs"> hh: </span>
            {zeroPad(minutes)}
            <span className="text-xs"> mm: </span>
            {zeroPad(seconds)}
            <span className="text-xs"> ss</span>
          </div>
        </span>
      )}
    </div>
  );
};

function CountDownTimer({ auctionEnd }: Props) {
  return (
    <div>
      <Countdown date={auctionEnd} renderer={renderer} />
    </div>
  );
}

export default CountDownTimer;
