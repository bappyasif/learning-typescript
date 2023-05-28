import { createContext, useEffect, useState } from "react"

type ProductsPropsType = {
    sku: string,
    name: string,
    price: number
}

const initState: ProductsPropsType | [] = []

type UseProductsContextType = {
    products: ProductsPropsType[]
}

const initContextState: UseProductsContextType = {
    products: []
}

const ProductsContext = createContext<UseProductsContextType>(initContextState)

export type ChildrenType = {
    children: React.ReactElement | React.ReactElement[]
}

export const ProductsProvider = ({children}: ChildrenType): React.ReactElement => {
    const [products, setProducts] = useState<ProductsPropsType[]>(initState)

    useEffect(() => {
        const fetchProducts = async(): Promise<ProductsPropsType[]> => {
            
            const data = await fetch("http://localhost:3600/products").then(res => res.json()).catch(err => err instanceof Error && console.log(err.message))
            
            return data
        }

        fetchProducts().then(data => setProducts(data))

    }, [])

    return (
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
}