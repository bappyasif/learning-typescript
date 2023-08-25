"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import star from "../../favicon.ico"
import { items } from './SampleEen'


export const SampleDrie = () => {
    const [moveIt, setMoveIt] = useState(false)

    const handleClick = () => {
        setMoveIt(prev => !prev)
    }

    return (
        <div>
            SampleDrie
            <div
                className='relative w-96 grid justify-items-center rounded'
                onClick={handleClick}
            >
                <Image
                    className={`transition-all duration-700 ${moveIt ? "h-96 translate-x-32" : "h-52 translate-x-0"} z-10`}
                    src={star}
                    alt='star png'
                    width={265}
                    height={265}
                />

                <SquareElem showIt={moveIt} />

                <CircleElem stopIt={!moveIt} />

                {/* {
                    liftUp ? <CardDetails /> : null
                } */}
                {/* <CardDetails hideIt={!liftUp} /> */}

                {/* <h2>Item Card</h2> */}
            </div>
        </div>
    )
}

const SquareElem = ({showIt}: {showIt:boolean}) => {
    return (
        <div className={`absolute top-6 rounded-xl transition-all duration-1000 ${showIt ? "bg-slate-400 h-[415px] w-[650px]" : "bg-slate-800 h-40 w-36"}`}>
            <AnotherCardDetails hideIt={!showIt} />
        </div>
    )
}

const AnotherCardDetails = ({hideIt}: {hideIt:boolean}) => {
    const allItems = items.map(item => <p key={item.name} className='flex gap-x-2 text-xl px-4 my-1'><span className=''>{item.name}</span> : <span>{item.value}</span></p>)

    return (
        <div className={`grid grid-cols-1 justify-items-start transition-all duration-500 ${hideIt ? "-translate-y-20 opacity-0" : "translate-y-0 opacity-100"} py-2`}>
            {allItems}
        </div>
    )
}

const CircleElem = ({stopIt}: {stopIt:boolean}) => {
    return (
        <div className={`absolute top-6 h-40 w-56 transition-all duration-1000 ${stopIt ? "bg-slate-400 animate-spin" : "bg-slate-400 -z-10"} rounded-full`}></div>
    )
}