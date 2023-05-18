import { BasicPropTypes } from "../basicProps/basicPropTypes"

export const GetFromAnotherComponent = (props: React.ComponentProps<typeof BasicPropTypes>) => {
    return (
        <>
            <div>GetFromAnotherComponent</div>
            {props.isLoggedIn ? "Ahoy" : "Nee"}
            {props.counts}
            {props.test}
        </>
    )
}
