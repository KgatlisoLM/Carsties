'use client'

import React from 'react'
import { Toaster } from 'react-hot-toast';

function ToasterProvider() {
  return (
    <Toaster  position='top-center'/>
  )
}

export default ToasterProvider;