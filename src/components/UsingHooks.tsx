import { useCallback, useEffect, useMemo, useRef, useState } from "react"

interface User {
    id: number,
    username: string
}

// useMemo is used to memoize a value, which is usually a high process required value, so that it doesnt have to re-calculate / redo it
type fibFuncProps = (n: number) => number

const fibFunc: fibFuncProps = (n) => {
    if (n < 2) return n

    return fibFunc(n - 1) + fibFunc(n - 2)
}

const smNum: number = 36

export const UsingHooks = () => {
    const [count, setCount] = useState<number>(0);
    const [user, setUser] = useState<User[] | null>(null)

    // in dev mode we will se mounting twice and clean function runs once thus unmounting will show up once
    useEffect(() => {
        console.log("mounting")

        return () => console.log("unmounting")
    }, [])

    // useCallback() hook is used for memoization, as in when its been created once and then reused when needed rather than recreating that function on every callback instance
    // const addtwo = useCallback(() => setCount(prev => prev + 2), [])
    // const addtwo = useCallback((evt: React.MouseEvent):void => setCount(prev => prev + 2), [])
    // const addtwo = useCallback((evt: React.MouseEvent<HTMLButtonElement>):void => setCount(prev => prev + 2), [])
    const addtwo = useCallback((evt: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>): void => setCount(prev => prev + 2), [])

    // useMemo will re calculate this result if smNum changes otherwise same value will be resued
    // const calcFib = useMemo(() => fibFunc(smNum), [smNum])
    const calcFib = useMemo<number>(() => fibFunc(smNum), [smNum])

    const smRef = useRef<HTMLInputElement>(null)
    console.log(smRef?.current)
    console.log(smRef?.current?.value)

    // const inputRef = useRef<HTMLInputElement>(null)
    // useEffect(() => {
    //     console.log("el", inputRef.current)
    //     console.log("val", inputRef.current?.value)
    // }, [inputRef.current?.value])

    return (
        <>
            <div>UsingHooks</div>
            <h2>Count: {count}</h2>
            <button onClick={addtwo}>+</button>
            <h2>Calculated Fibs of {smNum}: {calcFib}</h2>
            <input type="text" ref={smRef} />
            {/* <input ref={inputRef} type="text" /> */}
        </>
    )
}
