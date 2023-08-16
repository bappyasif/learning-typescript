"use client"

import { ThemeContext } from "@/context/themeProvider"
import { useContext } from "react"

export const ThemeChanger = () => {
    const { state, dispatch } = useContext(ThemeContext)

    return (
        <div>
            <h2>ThemeChanger</h2>
            <div className="flex gap-4">
                <button className={`${state.theme === "dark" ? "bg-slate-200 text-slate-800" : "bg-slate-600"} px-4`} onClick={() => dispatch({ type: "CHANGE_THEME" })}>Change Theme</button>
                <button className="bg-slate-600 px-4" onClick={() => dispatch({ type: "CHANGE FONTSIZE", payload: 29 })} style={{fontSize: state.fontSize}}>Change FontSize</button>
            </div>
        </div>
    )
}
