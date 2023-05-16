import { createContext } from "react";
import { theme } from "./theme";

type themeCtxPropsType = {
    children: React.ReactNode
}

export const ThemeCtx = createContext(theme)

export const ThemeContextProvider = ({ children }: themeCtxPropsType) => {
    return <ThemeCtx.Provider value={theme}>{children}</ThemeCtx.Provider>
}