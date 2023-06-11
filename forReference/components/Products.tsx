import { ReactElement } from "react";
import { useCart, useProducts } from "../hooks"
import { Product } from "./Product";

export const Products = () => {
    const { REDUCER_ACTIONS, cart, dispatch } = useCart();
    const { products } = useProducts()

    let pageContent: ReactElement | ReactElement[] = <p>Loading....</p>

    if (products.length) {
        pageContent = products.map(product => {
            const inCart = cart.some(item => item.sku === product.sku)

            return (
                <Product
                    key={product.sku}
                    product={product}
                    dispatch={dispatch}
                    REDUCER_ACTIONS={REDUCER_ACTIONS}
                    inCart={inCart}
                />
            )
        })
    }

    const mainContent = (
        <main className="main main__products">
            {pageContent}
        </main>
    )

    return mainContent
}
