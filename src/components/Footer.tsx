import { useCart } from "../hooks"

type FooterPropsType = {
    viewCart: boolean
}

export const Footer = ({ viewCart }: FooterPropsType) => {
    const { totalItems, totalPrice } = useCart()
    const year: number = new Date().getFullYear()
    const componentContent = viewCart
        ? <p>Shopping Cart &copy; {year}</p>
        : (
            <>
                <p>Total Items: {totalItems}</p>
                <p>Total Price: {totalPrice}</p>
                <p>Shopping Cart &copy; {year}</p>
            </>
        )

    const footerContent = (
        <footer className="footer">
            {componentContent}
        </footer>
    )

    return footerContent
}
