import { createContext, useEffect, useState } from "react"

export type ProductPropsType = {
    sku: string,
    name: string,
    price: number
}

// when choosing to do so for simplicity, but we can always fetch this over to our scope as we would have in a reallife project
const initState: ProductPropsType[] = [
    {
        "sku": "item0001",
        "name": "Widget",
        "price": 9.99
    },
    {
        "sku": "item0002",
        "name": "Premium Widget",
        "price": 19.99
    },
    {
        "sku": "item0003",
        "name": "Deluxe Widget",
        "price": 29.99
    }
]

// const initState: ProductPropsType | [] = []

export type UseProductsCtxType = {
    products: ProductPropsType[]
}

const initCtxState: UseProductsCtxType = {
    products: []
}

export const ProductsCtx = createContext<UseProductsCtxType>(initCtxState)

type ChildrenType = {
    children?: React.ReactElement | React.ReactElement[]
}

export const ProdsProvider = ({children}: ChildrenType): React.ReactElement => {
    const [products, setProducts] = useState<ProductPropsType[]>(initState)
    
    // useEffect(() => {
    //     const fetchProducts = async(): Promise<ProductPropsType[]> => {
    //         const data = await fetch("http://localhost:3600/products").then(res=>res.json()).catch(err => err instanceof Error && console.log(err.message))
    //         return data
    //     }

    //     fetchProducts().then(products => setProducts(products))
    // }, [])

    console.log(products, "PROIDUYCTSSS")

    return <ProductsCtx.Provider value={{products}}>
        {children}
    </ProductsCtx.Provider>
}