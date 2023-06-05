import { useState } from "react"

export const Counter = () => {
    // when we have null as value or could be initially then we need to keep it in union while asserting type for useState hook
    // const [count, setCount] = useState<number | null>(null)

    // when we have undefined as value or could be initially then we need to keep it in union while asserting type for useState hook
    // const [count, setCount] = useState<number | undefined>()

    // ts will automatically inferred it as of type Number
    // const [count, setCount] = useState(0)

    // or we can explicitly define it in our scope for removing any confusing there might be
    const [count, setCount] = useState<number>(0)
    return (
        <div>
            <div>Counter</div>
            <h1>Count Is: {count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
            <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
        </div>
    )
}
