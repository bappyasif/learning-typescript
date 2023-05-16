import { useReducer } from "react"

type statePropsType = {
    count: number
}

type actionTypes = {
    type: "incr" | "decr", // this way we stricting type value to only these two options anything else will be thrown error
    payload: number
}

type resetType = {
    type: "reset"
}

// using discreminated unions, where either this type or that type is val;id for dispatch action types
type actionPropsTypes = actionTypes | resetType

// without using discriminated unions
// type actionPropsTypes = {
//     // type: string, // if we leave it like this any string can be used and which is not always useful
//     type: "incr" | "decr", // this way we stricting type value to only these two options anything else will be thrown error
//     payload: number
// }

const initialState = {
    count: 0
}

const counterReducers = (state: statePropsType, action: actionPropsTypes) => {
    switch (action.type) {
        case "incr":
            return { count: state.count + action.payload }
        case "decr":
            return { count: state.count - action.payload }
        case "reset":
            return initialState
        default:
            return state
    }
}

export const CounterExample = () => {
    const [state, dispatch] = useReducer(counterReducers, initialState)

    return (
        <>
            <h2>Count: {state.count}</h2>
            <button onClick={() => dispatch({type: "reset"})}>Reset Counts</button>
            <button onClick={() => dispatch({ type: "incr", payload: 10 })}>increment by 10</button>
            <button onClick={() => dispatch({ type: "decr", payload: 10 })}>decrement by 10</button>
        </>
    )
}