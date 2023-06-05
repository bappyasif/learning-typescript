import { ReactNode, useState } from "react"

type ChildrenType = {
    children: (count: number) => ReactNode
}

export const PreCursor = ({ children }: ChildrenType) => {
    const [count, setCount] = useState<number>(0)
    const handleIncrement = () => setCount(prev => prev + 1)
    const handleDecrement = () => setCount(prev => prev - 1)
    return (
        <div>
            <h2>PreCursor UseCase</h2>
            <h2>{children(count)}</h2>
            <button onClick={handleIncrement}>incr</button>
            <button onClick={handleDecrement}>decr</button>
        </div>
    )
}
