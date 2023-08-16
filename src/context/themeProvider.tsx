"use client"

import { createContext, useReducer } from "react"
import { FontSizeActionType, INITIAL_STATE, StateType, ThemeActionType, reducerFn } from "./theme"

export const ThemeContext = createContext<{
    state: StateType,
    dispatch: React.Dispatch<ThemeActionType | FontSizeActionType>
}>({
    state: INITIAL_STATE, dispatch: () => { }
})

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducerFn, INITIAL_STATE)
    return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>
}