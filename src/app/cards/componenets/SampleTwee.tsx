"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import star from "../../favicon.ico"
import { CardDetails } from './SampleEen'
export const SampleTwee = () => {
    const [liftUp, setLiftUp] = useState(false)
    const handleClick = () => {
        setLiftUp(prev => !prev)
    }
    return (
        <div>
            <h1>Sample Twee</h1>
            <div
                className='relative w-96 grid justify-items-center bg-slate-800 rounded'
                onClick={handleClick}
            >
                <Image
                    className={`transition-all duration-700 ${liftUp ? "-translate-y-14 scale-50 opacity-80 z-0" : "-translate-y-0 scale-100 opacity-100 z-10"}`}
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
