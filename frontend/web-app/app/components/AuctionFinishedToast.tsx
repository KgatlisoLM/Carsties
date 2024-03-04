import { Auction, AuctionFinished } from '@/types/Index';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

type Props = {
    finishedAuction: AuctionFinished
    auction: Auction
}


function AuctionFinishedToast({auction, finishedAuction}: Props) {

    const zaFormat = (price: any) => {
        price =  new Intl.NumberFormat('en-ZA', {
             currency: 'ZAR',
             minimumFractionDigits: 0
       }).format(price);
     
       return price;
     };



  return (
    <Link href={`/auctions/details/${auction.id}`} className='flex flex-col items-center'>
    <div className='flex flex-row items-center gap-2'>
       <Image
          src={auction.imageUrl}
          alt={`${auction.make} ${auction.model}`}
          height={80}
          width={80}
          className='rounded-lg w-auto h-auto'
       />
       <div className='flex flex-col'>
         <span>Auction for {auction.make} {auction.model} has finished.</span>
         {finishedAuction.itemSold && finishedAuction.amount ? (
            <p>Congrats to {finishedAuction.winner} who has won this auction for R{zaFormat(finishedAuction.amount)}</p>
         ): (
            <p>This Item did not sell</p>
         )}
       </div>
     
    </div>
 </Link>
  )
}

export default AuctionFinishedToast;