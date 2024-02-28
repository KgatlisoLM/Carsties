'use client'

import Link from "next/link";
import React from "react";
import { PiCarProfileLight } from "react-icons/pi";

function Logo() {
    


  return (
    <>
      <Link href="/">
        <div className="flex items-center gap-1 font-semibold text-3xl text-red-500">
          <PiCarProfileLight size={34} />
          <div className="font-serif">CarZone</div>
        </div>
      </Link>
    </>
  );
}

export default Logo;
