import { getDetailedViewData } from '@/app/actions/auctionActions';
import React from 'react'
import Heading from '@/app/components/Heading';
import CarImage from '../../CarImage';
import DetailedSpecs from './DetailedSpecs';
import { getCurrentUser } from '@/app/actions/authActions';
import { da } from 'date-fns/locale';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

async function Details({params}: {params: {id: string}}) {
  const data = await getDetailedViewData(params.id)
  const user = await getCurrentUser();

  return (<>
    <div className='container mt-5 mx-auto mb-5'>

      <div className='flex flex-col'>
         <h2 className='text-3xl font-semibold'>{data.model}</h2>
         <h2 className='text-5xl font-semibold'>{data.make}</h2>
      </div>

      <div className='grid grid-cols-2 gap-6 mt-3'>
         <div className='w-full aspect-h-10 aspect-w-16 rounded-lg overflow-hidden'>
             <CarImage imageUrl={data.imageUrl} model={data.model} make={data.make} />
         </div>
         <div className='border-2 rounded-lg p-2 bg-gray-200'>
            <Heading title='Bids'/>
         </div>
      </div>
      
       <div className='mt-3 grid grid-cols-1 rounded-lg'>
         <DetailedSpecs auction={data}/>
       </div> 
       <div className='w-full mt-4 flex justify-center gap-x-2'>
           {user?.username === data.seller && (<>
              <EditButton id={data.id}/>
              <DeleteButton id={data.id}/>
              </>)}
       </div>

    </div>

    </> )
}

export default Details;
