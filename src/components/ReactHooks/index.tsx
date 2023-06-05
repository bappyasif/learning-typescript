import { KeyboardEvent, MouseEvent, useCallback, useEffect, useMemo, useRef, useState } from "react"

type User = {
    id: number,
    username: string
}

type FibFun = (n: number) => number

const fibFun: FibFun = (n) => {
    if (n < 2) return n
    return fibFun(n - 1) + fibFun(n - 2)
}

const smNum: number = 36

const ReactHooks = () => {
    // type can be inferred as User or Undefined
    // const [count, setCount] = useState<User[] | undefined>()

    // we are using assetions to giving false informaation to compiler to regard that empty object as an User type, which can be very error prone if we dont handle it with care, but this way of initializing is also possible
    // const [count, setCount] = useState<User>({} as User)

    // type can be of User or empty array
    // const [count, setCount] = useState<User[]>([])

    const [count, setCount] = useState<number>(0)
    const [users, setUsers] = useState<User[] | null>(null)

    useEffect(() => {
        console.log("mounting")
        console.log("users", users)

        return () => console.log("unmounting")
    }, [users])

    // using useCallback hook to memoize a function so that it doesnt have to recreate on each action or render
    // const addTwo = useCallback(() => setCount(prev => prev + 2), [])

    // we can be more specific in describing return type and props type if there is any
    // const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>):void => setCount(prev => prev + 2), [])
    // const addTwo = useCallback((e: KeyboardEvent<HTMLButtonElement>):void => setCount(prev => prev + 2), [])

    const addTwo = useCallback((): void => setCount(prev => prev + 2), [])

    // useMemo will memoize a value, usually very expensive calculation that you usually want do just once and then use that from memory rather than re calculating it each time
    // const fibCalc = useMemo(() => fibFun(smNum), [smNum])
    // alternative define type for useMemo return type
    const fibCalc = useMemo<number>(() => fibFun(smNum), [smNum])

    const inputRef = useRef<HTMLInputElement>(null)
    console.log(inputRef.current)
    console.log(inputRef.current?.value)

    return (
        <div>
            <h1>count is {count}</h1>
            <button onClick={addTwo}>Incr Count By 2</button>
            {/* <button onClick={e => addTwo()}>Incr Count By 2</button> */}
            <h2>fibonacci calculated : {fibCalc}</h2>
            <input type="text" placeholder="type here...." ref={inputRef} />
            <p>{inputRef.current?.value}</p>
        </div>
    )
}

export default ReactHooks