"use client"

import React, { useState } from 'react'

export const ScrollView = () => {
    const [scrolledAmount, setScrolledAmount] = useState<number>(0)

    const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const target = e.currentTarget
        setScrolledAmount(target.scrollTop)
        console.log(e.currentTarget.clientHeight, target.scrollLeft, target.scrollHeight, target.scrollTop)
    }

    return (
        <div
            className={`scrollHero h-96 flex items-center justify-between`}
        >
            {/* <p className='w-9 h-full bg-red-900'>left</p> */}
            {/* <p className={`w-9 h-[${scrolledAmount}px] bg-red-900`}>left</p> */}
            <p 
                className={`w-4 bg-red-900 self-start`}
                style={{
                    // height: scrolledAmount+"px"
                    // height: (scrolledAmount / 384) * 100+"%"
                    height: (scrolledAmount / 884) * 100+"%"
                }}
            ></p>
            <h2
                className='hideScrollbar h-24 overflow-y-scroll text-6xl w-20 bg-slate-600 text-center'
                onScroll={e => handleScroll(e)}
            >
                <p className='flex flex-col gap-y-2'>{"ScrollView".split("").map((ch, idx) => <span key={ch + idx}>{ch}</span>)}</p>
            </h2>
            <p 
                className={`w-4 bg-red-900 self-start`}
                style={{
                    height: (scrolledAmount / 884) * 100+"%"
                }}
            ></p>
        </div>
    )
}
