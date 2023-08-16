import { createContext } from "react"

export type StateType = {
    theme: string,
    fontSize: number
}

// this will throw error in ContextProvider
// export type ActionType = {
//     type: "CHANGE_THEME" | "CHANGE FONTSIZE",
//     payload?: number
// }

// discriminated unions
export type ThemeActionType = {
    type: "CHANGE_THEME"
}

export type FontSizeActionType = {
    type: "CHANGE FONTSIZE",
    payload: number
}

export const INITIAL_STATE: StateType = {
    theme: "dark",
    fontSize: 20
}

export const reducerFn = (state: StateType, action: ThemeActionType | FontSizeActionType) => {
    switch (action.type) {
        case "CHANGE_THEME":
            // state.theme = "light"
            return { ...state, theme: state.theme === "dark" ? "light" : "dark" }
        case "CHANGE FONTSIZE":
            // state.fontSize = 29
            return { ...state, fontSize: action.payload }
        default:
            return state
    }
}