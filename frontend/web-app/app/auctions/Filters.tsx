import { useParamsStore } from '@/hooks/useParamsStore';
import { Button, ButtonGroup, Select } from 'flowbite-react';
import React from 'react'
import { AiOutlineClockCircle, AiOutlineSortAscending } from 'react-icons/ai';
import { BsFillStopCircleFill, BsStopwatchFill } from 'react-icons/bs';
import { GiFinishLine, GiFlame } from 'react-icons/gi';

type Props = {
    pageSize: number;
    setPageSize: (size: number) => void;
}

const pageSizeOp = [4, 8, 12];

const orderByOp = [
    {
        label: 'Alphabetical',
        value: 'make'
    },
    {
        label: 'Recently added',
        value: 'new'
    }
]

const filterByOp = [
    {
        label: 'Live Auctions',
        value: 'live'
    },
    {
        label: 'Completed',
        value: 'finished'
    }
]



function Filters() {
  const pageSize = useParamsStore(state => state.pageSize);
  const setParams = useParamsStore(state => state.setParams);
  const orderBy = useParamsStore(state => state.orderBy);
  const filterBy = useParamsStore(state => state.filterBy);




  return (
    <div className='flex justify-between items-center mb-4'>

          <div className='flex items-center gap-x-2'>
              <span className='font-semibold'>
                 Filter: 
              </span>
            {filterByOp.map(({label, value}) => (
              <Button
              key={value} 
              onClick={() => setParams({filterBy: value})}
               className={`rounded-full text-xs w-36 flex ${filterBy === value ? 'bg-red-500 text-white hover:text-red-500': ''}`} 
                color={`${filterBy === value ? 'red' : 'gray'}`}>
                  {label}
              </Button>
            ))}
             
          </div>

          <div className='flex items-center gap-x-2'>
              <span className='font-semibold'>
                 OrderBy: 
              </span>
              {orderByOp.map(({label, value}) => (
              <Button 
              key={value}
              onClick={() => setParams({orderBy: value})}
               className={`rounded-full text-xs w-36 flex ${orderBy === value ? 'bg-red-500 text-white hover:text-red-500': ''}`} 
                color={`${orderBy === value ? 'red' : 'gray'}`}>
                  {label}
              </Button>
            ))}
          </div>

          <div className='flex items-center gap-x-2'>
              <span className='font-semibold'>
                 Items: 
              </span>
              {pageSizeOp.map((value, i) => (
              <Button
               key={i}
               onClick={() => setParams({pageSize: value})}
               className={`rounded-full text-xs flex ${pageSize === value ? 'bg-red-500 text-white hover:text-red-500': ''}`} 
                color={`${pageSize === value ? 'red' : 'gray'}`}>
                  {value}
              </Button>
            ))}
          </div>
    </div>
  )
}

export default Filters;