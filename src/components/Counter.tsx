import { useState } from "react"

type SimpleCounterProps = {
    children: React.ReactNode,
    setCount: React.Dispatch<React.SetStateAction<number>>
}

export const SimpleCounter = ({ setCount, children }: SimpleCounterProps) => {
    return (
        <>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
            <button onClick={() => setCount(prev => prev - 1)}>-</button>
            <p>{children}</p>
        </>
    )
}

export const Counter = () => {
    const [count, setCount] = useState<number>(1)
    return (
        <>
            <div>Counter -- {count}</div>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
            <button onClick={() => setCount(prev => prev - 1)}>-</button>
        </>
    )
}
