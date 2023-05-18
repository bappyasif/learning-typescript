import { useEffect, useRef } from "react"

export const DomRef = () => {
    // const ref = useRef<HTMLElement>(null)
    // when we know that on mount we will always have an html element we can use non negetive assertion
    // by doing so we dont have to use an optional chaining anymore on ref's current instance
    const inputRef = useRef<HTMLInputElement>(null!)
    useEffect(() => {
        // ref.current?.focus()
        inputRef.current.focus()
    }, [])
    return (
        <>
            <div>DomRef</div>
            <input type="text" placeholder="dom ref auto focus" ref={inputRef} />
        </>
    )
}
