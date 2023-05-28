import { useContext } from "react";
import { CartCtx, UseCartCtxType } from "../context/CartProvider";

const useCart = (): UseCartCtxType => {
    return useContext(CartCtx)
}

export default useCart