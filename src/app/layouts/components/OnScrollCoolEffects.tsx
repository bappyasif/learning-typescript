"use client"

import React, { useEffect, useState } from 'react'

export const OnScrollCoolEffects = () => {
    const [observer, setObserver] = useState<IntersectionObserver>()
    const observerMethod = () => {
        const obs = new IntersectionObserver(entries => {
            console.log(entries);
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show")
                    // entry.target.classList.remove("hideNow")
                } else {
                    entry.target.classList.remove("show")
                    // entry.target.classList.add("hideNow")
                }
            })
        })
        setObserver(obs)
    }

    const CheckObserver = () => {
        const hiddenElements = document.querySelectorAll(".hideNow")
        hiddenElements.forEach(el => observer?.observe(el))
    }

    window.addEventListener("scroll", CheckObserver)

    useEffect(() => {
        observerMethod()
    }, [])

    return (
        <div>
            <h2>OnScrollCoolEffects</h2>
            <FirstComp />
            <SecondComp />
            <ThirdComp />
            <FourthComp />
        </div>
    )
}

const FirstComp = () => {
    return (
        <div className='hideNow h-96 my-10 flex justify-center items-center'>
            <h2>Component One</h2>
            <p>Sub Text</p>
        </div>
    )
}

const SecondComp = () => {
    return (
        <div className='hideNow h-96 my-10 flex justify-center items-center'>
            <h2>Component Two</h2>
            <p>Sub Text More Subtext</p>
        </div>
    )
}

const ThirdComp = () => {
    return (
        <div className='hideNow h-96 my-10 flex justify-center items-center'>
            <h2>Component Third</h2>
            <p>Sub Text</p>
        </div>
    )
}

const FourthComp = () => {
    return (
        <div className="h-96 my-10 flex justify-center items-center gap-x-2">
            ?!
            <div className="logo hideNow">
                <p className='bg-red-600 p-2 h-6'></p>
                {/* <img
                    src="https://api.dicebear.com/6.x/adventurer/svg?seed=Smokey"
                    alt="avatar" /> */}
            </div>
            <div className="logo hideNow">
                <p className='bg-blue-600 p-2 h-6'></p>
                {/* <img
                    src="https://api.dicebear.com/6.x/adventurer/svg?seed=Muffin"
                    alt="avatar" /> */}
            </div>
            <div className="logo hideNow">
                <p className='bg-violet-600 p-2 h-6'></p>
                {/* <img
                    src="https://api.dicebear.com/6.x/adventurer/svg?seed=Patches"
                    alt="avatar" /> */}
            </div>
            <div className="logo hideNow">
                <p className='bg-yellow-600 p-2 h-6'></p>
                {/* <img
                    src="https://api.dicebear.com/6.x/adventurer/svg?seed=Simba"
                    alt="avatar" /> */}
            </div>
        </div>
    )
}