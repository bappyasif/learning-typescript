import { ReactElement, createContext, useEffect, useState } from "react"

type ProductType = {
    sku: string,
    name: string,
    price: number
}
const initState: ProductType[] = []

// initializing it with hard coded data for simplicity
// const initState: ProductType[] = [
//     {
//         "sku": "item0001",
//         "name": "Widget",
//         "price": 9.99
//     },
//     {
//         "sku": "item0002",
//         "name": "Premium Widget",
//         "price": 19.99
//     },
//     {
//         "sku": "item0003",
//         "name": "Deluxe Widget",
//         "price": 29.99
//     }
// ]

type UseProductsContextType = {
    products: ProductType[]
}

const initContextState: UseProductsContextType = {
    products: []
}

const ProductContext = createContext<UseProductsContextType>(initContextState)

type ChildrenType = {
    children?: ReactElement | ReactElement[] | undefined
}

export const ProductsContextProvider = ({ children }: ChildrenType): ReactElement => {
    const [products, setProducts] = useState<ProductType[]>(initState)
    
    // alternatively when we would like to fetch for initial data instead hardcoding it as above initState value
    useEffect(() => {
        const fetchProducts = async (): Promise<ProductType[]> => {

            const data = await fetch("http://localhost:3600/prodcuts").then(res => res.json()).catch(err => err instanceof Error && console.log(err.message))

            return data
        }

        fetchProducts().then(data => setProducts(data))

    }, [])
    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    )
}