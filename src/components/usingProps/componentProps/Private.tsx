import { Login } from "./Login"
import { secretPropType } from "./Secret"

type privatePropsType = {
    isLoggedIn: boolean,
    // Component: React.ComponentType
    // if Componnet prop is expecting any props as well then simply add it into its inference by importing it from that component
    component: React.ComponentType<secretPropType>
}
export const Private = ({isLoggedIn, component: Component}: privatePropsType) => {
  return (
    <>
    <div>Private</div>
    {
        isLoggedIn
        ? <Component name="ab" />
        : <Login />
    }
    </>
  )
}
