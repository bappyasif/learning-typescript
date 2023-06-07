import { ChangeEvent, useContext } from "react"
import { CounterContext } from "../context/CounterContext"

type CounterHookType = {
    count: number,
    handleIncrement: () => void,
    handleDecrement: () => void,
    handleIncrementByAmount: () => void,
    handleDecrementByAmount: () => void,
}

export const useCounter = (): CounterHookType => {
    const { state: { count }, handleIncrement, handleDecrement, handleDecrementByAmount, handleIncrementByAmount } = useContext(CounterContext)

    return {
        count, handleIncrement, handleDecrement, handleDecrementByAmount, handleIncrementByAmount
    }
}

type TextHandleHookType = {
    text: string,
    handleTextInput: (e: ChangeEvent<HTMLInputElement>) => void
}

export const useHandleText = (): TextHandleHookType => {
    const { state: { text }, handleTextInput } = useContext(CounterContext)

    return {
        text, handleTextInput
    }
}