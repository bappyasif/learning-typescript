import { useContext } from "react";
import { CartContext, UseCartContextType } from "../contexts/CartProvider";
import { ProductsContext, UseProductsContextType } from "../contexts/ProductsProvider";

export const useCart = (): UseCartContextType => {
    return useContext(CartContext)
}

export const useProducts = (): UseProductsContextType => {
    return useContext(ProductsContext)
}