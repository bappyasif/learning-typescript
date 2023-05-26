import { createContext, useCallback, useContext, useReducer } from "react";

type initStateProps = {
    count: number;
    text: string;
}

export const initialState: initStateProps = { count: 0, text: "" }

const enum REDUCER_ACTION_TYPE {
    INCREMENT,
    DECREMENT,
    USER_INPUT
}

type ReducerAction = {
    type: REDUCER_ACTION_TYPE,
    payload?: string
}

const reducer = (state: initStateProps, action: ReducerAction): initStateProps => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.INCREMENT:
            return { ...state, count: state.count + 1 }
        case REDUCER_ACTION_TYPE.DECREMENT:
            return { ...state, count: state.count - 1 }
        case REDUCER_ACTION_TYPE.USER_INPUT:
            // return { ...state, text: action.payload }
            // null calescing, if it s empty give it value of empty string
            return { ...state, text: action.payload ?? "" }
        default:
            throw new Error("action type didnt match")
    }
}

export const useCounterCtx = (initialState: initStateProps) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    // using calllback hook so that changing this values wont cause them rerendering or recreating these functions on every re-render
    const handleIncrement = useCallback(() => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT }), [])
    const handleDecrement = useCallback(() => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT }), [])
    const handleTextInput = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => dispatch({ type: REDUCER_ACTION_TYPE.USER_INPUT, payload: evt.target.value }), [])

    return { state, handleIncrement, handleDecrement, handleTextInput }
}

type UseCounterCtxType = ReturnType<typeof useCounterCtx>

const counterCtxInitValues: UseCounterCtxType = {
    state: initialState,
    handleIncrement: (): void => { },
    handleDecrement: (): void => { },
    handleTextInput: (evt: React.ChangeEvent<HTMLInputElement>): void => { }
}

export const CounterCtx = createContext<UseCounterCtxType>(counterCtxInitValues)

type ChildrenType = {
    children: React.ReactElement
}

export const CounterProvider = ({ children, ...initialState }: ChildrenType & initStateProps): React.ReactElement => {
    return <CounterCtx.Provider value={useCounterCtx(initialState)}>
        {children}
    </CounterCtx.Provider>
}

type UseCounterHookType = {
    count: number,
    handleIncrement: () => void,
    handleDecrement: () => void
}

export const useCounter = (): UseCounterHookType => {
    const {state: {count}, handleIncrement, handleDecrement, handleTextInput} = useContext(CounterCtx)

    return {
        count, handleIncrement, handleDecrement
    }
}

type UseCounterTextHookType = {
    text: string,
    handleTextInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const useCounterText = (): UseCounterTextHookType => {
    const {state: {text}, handleTextInput} = useContext(CounterCtx)

    return {
        text, handleTextInput
    }
}