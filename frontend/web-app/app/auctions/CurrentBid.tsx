import React from 'react';

type Props = {
    amount?: number
    reservePrice: number
}

function CurrentBid({amount, reservePrice}: Props) {

    const zaFormat = (price: any) => {
        price =  new Intl.NumberFormat('en-ZA', {
             currency: 'ZAR',
             minimumFractionDigits: 0
       }).format(price);
     
       return price;
     };


   const text = amount ? 'R' + zaFormat(amount)  : 'No bids';
   const color = amount ? zaFormat(amount) > zaFormat(reservePrice) ? 'bg-green-600' : 'bg-amber-600' : 'bg-red-600'
   


  return (
    <div className={`
       border-2 border-white text-white py-1 px-2 rounded-lg flex
       justify-center ${color}
    `}>
      {text}
    </div>
  )
}

export default CurrentBid;