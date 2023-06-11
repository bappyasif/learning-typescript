import { ReactElement } from "react"
import {AiOutlineMenuFold} from "react-icons/ai"


export const Header = (): ReactElement => {

  return (
    <div className="flex justify-around text-4xl">
        <p>Greetings :)</p>
        <p><AiOutlineMenuFold /></p>
    </div>
  )
}
