"use client";
import { useBidStore } from "@/hooks/useBidStore";
import { usePathname } from "next/navigation";
import React from "react";
import Countdown, { zeroPad } from "react-countdown";

type Props = {
  auctionEnd: string;
};

const currentUrl = window.location.pathname;

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
      className={` text-white py-2 px-3 ${
        currentUrl === "/" ? "rounded-bl-md" : "rounded-md"
      }  flex justify-center 
        ${
          completed
            ? `bg-red-600 ${currentUrl === "/" ? "bg-opacity-50" : ""} `
            : days === 0 && hours < 10
            ? "bg-amber-600"
            : `bg-green-600 ${currentUrl === "/" ? "bg-opacity-50" : ""}`
        }`}
    >
      {completed ? (
        <span>Auction Finished</span>
      ) : currentUrl === "/" ? (
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
      ) : (
        <div>
        {zeroPad(days)}
        <span className="text-xs"> d: </span>
        {zeroPad(hours)}
        <span className="text-xs"> h: </span>
        {zeroPad(minutes)}
        <span className="text-xs"> m: </span>
        {zeroPad(seconds)}
        <span className="text-xs"> s</span>
      </div>
      )}
    </div>
  );
};

function CountDownTimer({ auctionEnd }: Props) {
  const setOpen = useBidStore((state) => state.setOpen);
  const pathname = usePathname();

  function auctionFinished() {
    if (pathname.startsWith("/auctions/details")) {
      setOpen(false);
    }
  }

  return (
    <div>
      <Countdown
        date={auctionEnd}
        renderer={renderer}
        onComplete={auctionFinished}
      />
    </div>
  );
}

export default CountDownTimer;
