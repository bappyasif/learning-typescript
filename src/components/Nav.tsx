import { HeaderPropsType } from "./Header"

export const Nav = ({ viewCart, setViewCart }: HeaderPropsType) => {
    const button = viewCart ? <button onClick={() => setViewCart(false)}>View Products</button> : <button onClick={() => setViewCart(true)}>View Cart</button>

    const content = (
        <nav className="nav">
            {button}
        </nav>
    )
    return content;
}
