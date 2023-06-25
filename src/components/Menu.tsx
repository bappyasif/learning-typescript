import { AiOutlineClose } from "react-icons/ai"

type MenuProp = {
    closeMenu: () => void
}

export const Menu = ({ closeMenu }: MenuProp) => {
    const renderItems = () => menuItems.map(item => <RenderMenuItem key={item} item={item} closeMenu={closeMenu} />)

    return (
        <div
            className="absolute left-0 top-0 py-40 
            flex gap-10 justify-center items-center
            bg-slate-400 h-screen w-screen
           z-40"
        >
            <RenderImage />
            <div className="flex flex-col gap-12 items-center">
                {renderItems()}
            </div>
            <button
                className="absolute right-20 top-20
                outline outline-2 rounded-full"
                onClick={closeMenu}
            >
                {<AiOutlineClose />}
            </button>
        </div>
    )
}

const RenderImage = () => {
    return (
        <img
            className="h-full w-1/3"
            src={`https://source.unsplash.com/random/?Profile,User`}
            alt="User Picture"
        />
    )
}

type ItemProp = {
    item: string,
    closeMenu: () => void
}

const RenderMenuItem = ({ item, closeMenu }: ItemProp) => {
    return (
        <div className="text-right w-full hover:bg-slate-600 px-6">
            <a onClick={closeMenu} href={`#${item}`}>{item}</a>
        </div>
    )
}

const menuItems = ["Home", "Resume", "Skills", "Mentions", "Portfolio", "Testimonials", "Contact"]
