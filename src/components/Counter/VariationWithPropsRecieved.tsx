import { ReactNode } from "react"

type VariationProps = {
    children: ReactNode,
    // setCount(v: number): void
    setCount: React.Dispatch<React.SetStateAction<number>>
}

export const VariationWithPropsRecieved = ({ children, setCount }: VariationProps) => {
    return (
        <div>
            <div>Counter - With Props Recieved</div>
            {/* <h1>Count Is: {count}</h1> */}
            {children}
            <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
            <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
        </div>
    )
}
