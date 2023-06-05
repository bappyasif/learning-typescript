import { PreCursor } from "./PreCursor"
import { WithUseReducerHook } from "./WithHook"

const UsingReducers = () => {

    return (
        <div>
            <PreCursor>
                {(val: number) => <>Count is : {val}</>}
            </PreCursor>
            <br />
            <hr />
            <span>now using useReducer hook</span>
            <hr />
            <br />
            <WithUseReducerHook>
                {(val: number) => <>Count Now : {val}</>}
            </WithUseReducerHook>
        </div>
    )
}

export default UsingReducers