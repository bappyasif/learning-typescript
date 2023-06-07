import { ChangeEvent, ReactElement, createContext, useCallback, useReducer } from "react";

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
    // INCREMENT_BY_AMOUNT,
    // DECREMENT_BY_AMOUNT
}

type ReducerActionType = {
    type: REDUCER_ACTION_TYPE,
    payload?: string,
    // amount?: number
}

const reducer = (state: InitStateType, action: ReducerActionType): InitStateType => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.INCREMENT:
            return { ...state, count: state.count + 1 }
        // case REDUCER_ACTION_TYPE.INCREMENT_BY_AMOUNT:
        //     return { ...state, count: state.count + (action.amount ?? 2) }
        case REDUCER_ACTION_TYPE.DECREMENT:
            return { ...state, count: state.count - 1 }
        // case REDUCER_ACTION_TYPE.DECREMENT_BY_AMOUNT:
        //     return { ...state, count: state.count - (action.amount ?? 2) }
        case REDUCER_ACTION_TYPE.NEW_INPUT:
            // using null colascing to tell ts that if empty pass an empty string
            return { ...state, text: action.payload ?? '' }
        default:
            throw new Error("no matched case found")
    }
}

// using custom hook to handle context state and handlers
const useCounterCtx = (initState: InitStateType) => {
    const [state, dispatch] = useReducer(reducer, initState)
    
    const handleIncrement = useCallback(() => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT }), [])
    
    const handleDecrement = useCallback(() => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT }), [])
    
    const handleTextInput = useCallback((e: ChangeEvent<HTMLInputElement>) => dispatch({ type: REDUCER_ACTION_TYPE.NEW_INPUT, payload: e.target.value }), [])
    
    return {
        state, handleIncrement, handleDecrement, handleTextInput
    }
}

// using a type for CounterCtx whic will be of this (useCounterCtx) custom hook 
type UseCounterCtxType = ReturnType<typeof useCounterCtx>

// initializing this state context variable with UseConterCtxType required values so that it can be used in Context creation process
const initCtxState: UseCounterCtxType = {
    state: initState,
    handleIncrement: () => { },
    handleDecrement: () => { },
    handleTextInput: (e: ChangeEvent<HTMLInputElement>) => { }
}

// this requires an initial value for this CounterCtx which needs to be of type UseCounterCtx
// which is now served with initCtxState
export const CounterCtx = createContext<UseCounterCtxType>(initCtxState)

type Children = {
    // which means there will be only one "child", if were to pass on multiplke children then we would also have to include ReactElement[]
    children?: ReactElement | undefined
}

// every Context needs it's Provider
// we are also combining Types for parameters in this Context Provider function
export const CounterCtxProvider = ({ children, ...initCtxState }: Children & InitStateType) => {
    return (
        <CounterCtx.Provider value={useCounterCtx(initCtxState)}>
            {children}
        </CounterCtx.Provider>
    )
}