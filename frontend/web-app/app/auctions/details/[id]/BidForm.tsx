'use client'
import { placeBidForAuction } from '@/app/actions/auctionActions';
import { useBidStore } from '@/hooks/useBidStore';
import React from 'react'
import { Field, FieldValues, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';


type Props = {
    auctionId: string;
    highBid: number
}


function BidForm({auctionId, highBid}: Props) {
 const {register, handleSubmit, reset, formState: {errors} } = useForm();
 const addBid = useBidStore(state => state.addBid);

 const zaFormat = (price: any) => {
  price = new Intl.NumberFormat("en-ZA", {
    currency: "ZAR",
    minimumFractionDigits: 0,
  }).format(price);

  return price;
};

 function onSubmit(data: FieldValues) {
   if(data.amount <= highBid) {
      reset();
      return toast.error('Bid must be at least R' + zaFormat(highBid  + 1));
   }
    
    placeBidForAuction(auctionId, +data.amount).then(bid => {
        if(bid.error) throw bid.error;
        addBid(bid);
        reset();
    }).catch(err => toast.error(err.message))
 }




  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex items-center border-2 rounded-lg py-2'>
        <input
           type='number'
           {...register('amount')}
           className='input-custom text-sm text-gray-600'
           placeholder={`Enter your bid (minimum bid is R${zaFormat(highBid + 1)})`}
        />
    </form>
  )
}

export default BidForm