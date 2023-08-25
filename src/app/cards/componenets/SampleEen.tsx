"use client"

import React, { useEffect, useState } from 'react'
import star from "../../favicon.ico"
import Image from 'next/image'

export const SampleEen = () => {
    const [liftUp, setLiftUp] = useState(false)
    const handleClick = () => {
        setLiftUp(prev => !prev)
    }
    return (
        <div>
            <h1>Sample Een</h1>
            <div
                className='relative w-96 grid justify-items-center bg-slate-800 rounded'
                onClick={handleClick}
            >
                <Image
                    className={`transition-all duration-700 ${liftUp ? "-translate-y-24 skew-y-12 -translate-x-9 opacity-80 z-0" : "-translate-y-0 skew-y-0 translate-x-0  opacity-100 z-10"}`}
                    src={star}
                    alt='star png'
                    width={265}
                    height={265}
                />
                {/* {
                    liftUp ? <CardDetails /> : null
                } */}
                <CardDetails hideIt={!liftUp} />

                <h2>Item Card</h2>
            </div>
        </div>
    )
}

export const CardDetails = ({ hideIt }: { hideIt: boolean }) => {
    const allItems = items.map(item => <p key={item.name} className='flex gap-x-2'><span>{item.name}</span> : <span>{item.value}</span></p>)

    return (
        <div className={`grid grid-cols-2 justify-items-center absolute bottom-10 transition-all duration-1000 ${hideIt ? "opacity-0" : "opacity-100"}`}>
            {allItems}
        </div>
    )
}

// const CardDetails = () => {
//     const [delayDone, setDelayDone] = useState(false)

//     const allItems = items.map(item => <p key={item.name} className='flex gap-x-2'><span>{item.name}</span> : <span>{item.value}</span></p>)

//     useEffect(() => {
//         setTimeout(() => setDelayDone(true), 400)
//     }, [])

//     return (
//         <div className='grid grid-cols-2 justify-items-center absolute bottom-10'>
//             {delayDone ? allItems : null}
//         </div>
//     )
// }

export const items = [
    { name: "Cuisine", value: "Bengali" },
    { name: "Type", value: "Main Dish" },
    { name: "Category", value: "Keto" },
    { name: "Nutrition", value: "1234kcal" }
]