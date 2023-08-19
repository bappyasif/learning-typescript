"use client"

import { DropDown, DropdownDemo } from '@/components/DropDown'
import React from 'react'


const HeadlessUiDemoPage = () => {
  return (
    <div className='flex flex-col gap-y-4 w-60'>
        <h1>HeadlessUiDemoPage</h1>
        <DropDown />
        <DropdownDemo />
    </div>
  )
}

export default HeadlessUiDemoPage