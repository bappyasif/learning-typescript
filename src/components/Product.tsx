import { ReactElement, memo } from "react"
import { ReducerAction, ReducerActionType, } from "../contexts/CartProvider"
import { ProductType } from "../contexts/ProductsProvider"

type ProductPropsType = {
    product: ProductType,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType,
    inCart: boolean
}

export const Product = ({ product, dispatch, REDUCER_ACTIONS, inCart }: ProductPropsType): ReactElement => {

    // handling dynamic images from project root file sysytem
    // earlier way (not valid in vite anymore but still okay in createReactApp)
    // const img: string = require(`../images/${product.sku}.jpg`)

    // better way of handling dynmic images which works well in both CRA and VITE
    const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url).href
    console.log(img)

    const onAddToCart = () => dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, quantity: 1 } })

    const itemInCart = inCart ? ' → Item in Cart: ✔️' : null

    const content = (
        <article className="product">
            <h3>{product.name}</h3>
            <img src={img} alt={product.name} className="product__img" />
            <p>{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(product.price)} {itemInCart}</p>
            <button onClick={onAddToCart}>Add to Cart</button>
        </article>
    )

    return content
}

// some improvements for product component as well with memo to reduce re rendering
// checking a refential equality checks of products between renders
function areProductsEqual({product: prevProd, inCart: prevInCart}: ProductPropsType, {product: nextProd, inCart: nextInCart}: ProductPropsType) {
    return (
        Object.keys(prevProd).every(key => {
            return prevProd[key as keyof ProductType] === nextProd[key as keyof ProductType] && prevInCart  === nextInCart
        })
    )
}

const MemoizedProduct = memo<typeof Product>(Product, areProductsEqual)

export default MemoizedProduct