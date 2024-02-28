'use client'

import React from 'react'
import Search from './Search';
import Filters from './Filters';

function SearchFilterBox() {
  return (
    <div className='border-2 shadow-lg p-5 rounded-md bg-white'>
        <div className="w-full">
            <div className="flex w-full mb-2">
               <h2 className="text-2xl font-semibold">Discover</h2> 
            </div>
            <div>
            <div className='mb-5'>
              <Search/>
            </div>
            <div className='mb-2'>
              <Filters />
            </div>
           
             
            </div>
        </div>
    </div>
  )
}

export default SearchFilterBox;