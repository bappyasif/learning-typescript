import { useContext } from "react"
import { ThemeCtx } from "./ctxProvider"

export const Box = () => {
    const themeCtx = useContext(ThemeCtx)
  return (
    <div
        style={{
            backgroundColor: themeCtx.primary.main,
            color: themeCtx.primary.text
        }}
    >Box</div>
  )
}
