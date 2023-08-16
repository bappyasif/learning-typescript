"use client"

import React, { useState } from 'react'
import SearchManufacurer from './SearchManufacurer'

export const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState("")
    const handleSubmit = () => { }
    return (
        <form action="" onSubmit={handleSubmit}>
            <div className='searchbar__item'>
                <SearchManufacurer
                    manufacturer={manufacturer}
                    setManufacturer={setManufacturer}
                />
            </div>
        </form>
    )
}
