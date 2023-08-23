"use client"

import React, { useEffect, useState } from 'react'

export const SpannedScrolling = () => {
    const [scroll, setScroll] = useState<number>(0)

    const handleScroll = () => {
        if (scroll < 976 && window.scrollY < 976) {
            setScroll(window.scrollY)
        }
    }

    useEffect(() => {
        scroll > 0 && scroll < 976 && handleScroll()
    }, [scroll])

    useEffect(() => {
        // document.body.addEventListener("scroll", handleScroll)
        // document.querySelector(".scrollThis")?.addEventListener("scroll", handleScroll)
        document.addEventListener("scroll", handleScroll)
        // window.addEventListener("scroll", handleScroll)
    }, [])

    return (
        <div>
            <h2>SpannedScrolling</h2>
            <div className='flex flex-col'>
                <p
                    className='bg-red-800'
                    style={{
                        // width: scroll+"px"
                        width: (scroll / 976 * window.innerWidth - 20) + "px"
                    }}
                >top</p>
                <div
                    className='flex justify-between'
                // onScroll={handleScroll}
                >
                    <p
                        className='bg-red-900 self-end'
                        style={{
                            height: scroll + "px"
                        }}
                    >left</p>
                    <div className='flex flex-col gap-y-2 w-full scrollThis'>
                        <ComponentOne />
                        <ComponentTwo />
                    </div>
                    <p
                        className='bg-red-900 self-start'
                        style={{
                            height: scroll + "px"
                        }}
                    >right</p>
                </div>
                <p
                    className='bg-red-800 self-end'
                    style={{
                        // width: scroll+"px"
                        width: (scroll / 976 * window.innerWidth - 20) + "px"
                    }}
                >bottom</p>
            </div>

        </div>
    )
}

const ComponentOne = () => {
    return (
        <div className='h-96 w-full text-center bg-slate-600'>Component One</div>
    )
}

const ComponentTwo = () => {
    return (
        <div className='h-96 w-full text-center bg-slate-400'>Component Two</div>
    )
}