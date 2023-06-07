import { WithUseReducerHook } from "./WithHook"
import { CounterContextProvider, initState } from "./context/CounterContext"

const PracticingUsingReducersWithContextHook = () => {

    return (
        <div>
            <br />
            <hr />
            <span>using useReducer with useContext hook now together</span>
            <hr />
            <br />
            <CounterContextProvider count={initState.count} text={initState.text}>
                <WithUseReducerHook>
                    {(val: number) => <>Count Now : {val}</>}
                </WithUseReducerHook>
            </CounterContextProvider>
        </div>
    )
}

export default PracticingUsingReducersWithContextHook