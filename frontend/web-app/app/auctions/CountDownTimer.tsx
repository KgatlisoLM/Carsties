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
            ? "bg-red-600"
            : days === 0 && hours < 10
            ? "bg-amber-600"
            : "bg-green-600"
        }`}
    >
      {completed ? (
        <span>Auction Finished</span>
      ) : (
        <span>
         {zeroPad(days)}:{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
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
