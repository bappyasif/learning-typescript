import { WithUseReducerHook } from "./WithHook"

const UsingReducersAndContext = () => {

    return (
        <div>
            <br />
            <hr />
            <span>now using useReducer and useContext hook together</span>
            <hr />
            <br />
            <WithUseReducerHook>
                {(val: number) => <>Count Now : {val}</>}
            </WithUseReducerHook>
        </div>
    )
}

export default UsingReducersAndContext