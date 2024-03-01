import Heading from '@/app/components/Heading';
import React from 'react'
import AuctionForm from '../../AuctionForm';
import { getDetailedViewData } from '@/app/actions/auctionActions';

async function Update({params}: {params: {id: string}}) {
  const data = await getDetailedViewData(params.id);
  
  return (
    <div className='container mt-5 mx-auto mb-5'>
        <Heading title='Update your auction' subtitle='Please update the details of you car'/>
        <AuctionForm auction={data}/>
    </div>
  )
}

export default Update;