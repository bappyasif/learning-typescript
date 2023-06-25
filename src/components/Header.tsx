import { ReactElement, useState } from "react"
import {AiOutlineMenuFold} from "react-icons/ai"
import { Menu } from "./Menu";


export const Header = (): ReactElement => {
  const [show, setShow] = useState<boolean>(false);

  const closeMenu = () => setShow(false);

  const openMenu = () => setShow(true);

  return (
    <div className="flex justify-between text-4xl mb-16">
        <p>Greetings :)</p>
        <button onClick={openMenu}><AiOutlineMenuFold /></button>
        {
          show
          ? <Menu closeMenu={closeMenu} />
          : null
        }
    </div>
  )
}
