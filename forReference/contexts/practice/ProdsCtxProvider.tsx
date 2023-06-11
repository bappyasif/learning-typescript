import { ReactElement, createContext, useState } from "react";

export type ProdType = {
    sku: string,
    name: string,
    price: number
}

const initState: ProdType[] = [];

type UseProdsCtxType = {
    prods: ProdType[]
}

const initProdsCtxState: UseProdsCtxType = {
    prods: []
}

const ProdsCtx = createContext<UseProdsCtxType>(initProdsCtxState);

type ChildrenType = {
    children: ReactElement | ReactElement[]
}

const ProdsCtxProvider = ({ children }: ChildrenType): ReactElement => {
    const [prods, setProds] = useState<ProdType[]>([])
    // either we can fetch prods or directly initialize with data for simplicity
    return (
        <ProdsCtx.Provider value={{ prods }}>
            {children}
        </ProdsCtx.Provider>
    )
}