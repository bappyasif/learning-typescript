import { ChangeEvent, useContext } from "react"
import { CounterCtx } from "../context/CounterCtx"

type UseCounterHookType = {
    count: number,
    handleIncrement: () => void,
    handleDecrement: () => void
}

export const useCounter = (): UseCounterHookType => {
    const { state: { count }, handleIncrement, handleDecrement } = useContext(CounterCtx)
    return {
        count, handleIncrement, handleDecrement
    }
}

type UseTextHookType = {
    text: string,
    handleTextInput: (e: ChangeEvent<HTMLInputElement>) => void
}

export const useTextChange = (): UseTextHookType => {
    const { state: { text }, handleTextInput } = useContext(CounterCtx)

    return {
        text, handleTextInput
    }
}