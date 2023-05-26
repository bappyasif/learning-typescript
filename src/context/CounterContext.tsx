import { createContext, useCallback, useReducer } from "react";

type InitStatePropsType = {
    count: number;
    text: string;
}

const initialState = { count: 0, text: "" }

const enum REDUCER_ACTION_TYPE {
    INCREMENT,
    DECREMENT,
    USER_INPUT
}

type ReducerAction = {
    type: REDUCER_ACTION_TYPE,
    payload?: string
}

const reducer = (state: InitStatePropsType, action: ReducerAction): InitStatePropsType => {
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

const useCounterContext = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleIncrement = useCallback(() => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT }), [])
    const handleDecrement = useCallback(() => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT }), [])
    const handleUserTextInput = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => dispatch({ type: REDUCER_ACTION_TYPE.USER_INPUT, payload: evt.target.value }), [])

    return { state, handleIncrement, handleDecrement, handleUserTextInput }
}

// we need to pass on initial value to what this context is going to hold
// we also need to provide type which will be handled on this context
type UseCounterContextType = ReturnType<typeof useCounterContext>

const counterContextInitialValues = {
    state: initialState,
    handleIncrement: (): void => { },
    handleDecrement: (): void => { },
    handleUserTextInput: (e: React.ChangeEvent<HTMLInputElement>) => { }
}
// option 1 -- no error
export const CounterContext = createContext<typeof counterContextInitialValues>(counterContextInitialValues)

// option 2 -- no error
// export const CounterContext = createContext<UseCounterContextType>(counterContextInitialValues)

// option 3 -- not sure why user input change handler is throwing error for signature mismatches!!
// export const CounterContext = createContext<typeof useCounterContext>(counterContextInitialValues)

// Counter Provider
type ChildrenType = {
    children: React.ReactElement
}
export const CounterContextProvider = ({ children }: ChildrenType) => {
    return (
        <CounterContext.Provider value={useCounterContext()}>
            {children}
        </CounterContext.Provider>
    )
}

export const useOnlyCounterHook = () => {
    const { state: { count }, handleIncrement, handleDecrement } = useCounterContext()

    return { count, handleIncrement, handleDecrement }
}

export const useOnlyUserInputChangeHook = () => {
    const { state: { text }, handleUserTextInput } = useCounterContext()

    return { text, handleUserTextInput }
}