import { ChangeEvent, Children, ReactElement, createContext, useReducer } from "react";

type InitStateType = {
    count: number;
    text: string;
}

export const initState: InitStateType = {
    count: 0,
    text: ""
}

const enum REDUCER_ACTION_TYPE {
    INCREMENT,
    DECREMENT,
    NEW_INPUT,
    INCREMENT_BY_AMOUNT,
    DECREMENT_BY_AMOUNT
}

type ReducerActionType = {
    type: REDUCER_ACTION_TYPE,
    payload?: string,
    amount?: number
}

const reducer = (state: InitStateType, action: ReducerActionType): InitStateType => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.INCREMENT:
            return { ...state, count: state.count + 1 }
        case REDUCER_ACTION_TYPE.INCREMENT_BY_AMOUNT:
            return { ...state, count: state.count + (action.amount ?? 2) }
        case REDUCER_ACTION_TYPE.DECREMENT:
            return { ...state, count: state.count - 1 }
        case REDUCER_ACTION_TYPE.DECREMENT_BY_AMOUNT:
            return { ...state, count: state.count - (action.amount ?? 2) }
        case REDUCER_ACTION_TYPE.NEW_INPUT:
            // using null colascing to tell ts that if empty pass an empty string
            return { ...state, text: action.payload ?? '' }
        default:
            throw new Error("no matched case found")
    }
}

const useCounterContext = (initState: InitStateType) => {
    const [state, dispatch] = useReducer(reducer, initState)

    const handleIncrement = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT })

    const handleDecrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT })

    const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => dispatch({ type: REDUCER_ACTION_TYPE.NEW_INPUT, payload: e.target.value })

    const handleIncrementByAmount = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT_BY_AMOUNT, amount: 4 })

    const handleDecrementByAmount = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT_BY_AMOUNT, amount: 4 })

    return {
        state, handleIncrement, handleDecrement, handleTextInput,
        handleDecrementByAmount, handleIncrementByAmount
    }
}

type UseContextInitStateType = ReturnType<typeof useCounterContext>

const initCounterContextState: UseContextInitStateType = {
    state: initState,
    handleIncrement: () => { },
    handleDecrement: () => { },
    handleTextInput: (e: ChangeEvent<HTMLInputElement>) => { },
    handleDecrementByAmount: () => { },
    handleIncrementByAmount: () => { },
}

export const CounterContext = createContext<UseContextInitStateType>(initCounterContextState)

type Children = {
    children?: ReactElement | undefined
}

// notice how due to 2nd parameter type it was failing
// export const CounterContextProvider = ({children, ...initCounterContextState}: Children & UseContextInitStateType) => {
//     return (
//         <CounterContext.Provider value={useCounterContext(initCounterContextState)}>
//             {children}
//         </CounterContext.Provider>
//     )
// }

export const CounterContextProvider = ({ children, ...initCounterContextState }: Children & InitStateType) => {
    return (
        <CounterContext.Provider value={useCounterContext(initCounterContextState)}>
            {children}
        </CounterContext.Provider>
    )
}