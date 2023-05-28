import useCart from "../hooks/useCart"
import useProducts from "../hooks/useProducts"
import Product from "./Product"

const ProductsList = () => {
    const {REDUCER_ACTIONS, dispatch, cart} = useCart()
    const {products} = useProducts()
    
    let pageContent: React.ReactElement | React.ReactElement[] = <p>Loading....</p>

    if(products?.length) {
        pageContent = products.map(product => {
            const inCart: boolean = cart.some(item => item.sku === product.sku)
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

    const content = (
        <main className="main main--products">
            {pageContent}
        </main>
    )

  return content
}

export default ProductsList