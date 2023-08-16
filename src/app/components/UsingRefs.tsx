"use client"

import { useEffect, useRef } from "react"

function UsingRefs() {
    const inpRef = useRef<HTMLInputElement>(null)
    const uNameInpRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inpRef.current?.focus()
    }, [])

    const handleUserName = () => {
        console.log(`user name is : ${uNameInpRef.current?.value}`)
    }

    return (
        <div>
            <h2>UsingRefs</h2>
            <div>
                <input ref={inpRef} type="text" placeholder="focus here" />
                <input ref={uNameInpRef} type="text" placeholder="user name" />
                <button onClick={handleUserName}>Send</button>
            </div>
        </div>
    )
}

export default UsingRefs