"use client"

import { DropDown, DropdownDemo } from '@/components/DropDown'
import { MyListbox, MyListboxHorizontal } from '@/components/ListItems'
import TabsList from '@/components/TabsList'
import ToggleButtonExample, { DisclosureDemo } from '@/components/ToggleButton'
import React from 'react'


const HeadlessUiDemoPage = () => {
  return (
    <div className='flex flex-col gap-y-4 w-60'>
        <h1>HeadlessUiDemoPage</h1>
        <DropDown />
        <DropdownDemo />
        <MyListbox />
        <MyListboxHorizontal />
        <ToggleButtonExample />
        <DisclosureDemo />
        <TabsList />
    </div>
  )
}

export default HeadlessUiDemoPage