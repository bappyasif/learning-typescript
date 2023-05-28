import { useContext } from "react";
import { ProductsCtx, UseProductsCtxType } from "../context/ProductsProvider";

const useProducts = (): UseProductsCtxType => {
    return useContext(ProductsCtx)
}

export default useProducts