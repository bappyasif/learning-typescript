import { ReactElement, useState } from "react"
import {AiOutlineMenuFold} from "react-icons/ai"
import { Menu } from "./Menu";


export const Header = (): ReactElement => {
  const [show, setShow] = useState<boolean>(false);

  const closeMenu = () => setShow(false);

  const openMenu = () => setShow(true);

  return (
    <div className="flex justify-around text-4xl">
        <p>Greetings :)</p>
        <p onClick={openMenu}><AiOutlineMenuFold /></p>
        {
          show
          ? <Menu closeMenu={closeMenu} />
          : null
        }
    </div>
  )
}
