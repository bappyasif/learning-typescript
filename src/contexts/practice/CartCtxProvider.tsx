import { ReactElement, createContext, useMemo, useReducer } from "react"
import { ProdType } from "./ProdsCtxProvider"

type CartItemType = {
    // ...ProdType,
    sku: string,
    name: string,
    price: number,
    qty: number
}

type CartStateType = {
    cart: CartItemType[]
}

const REDUCER_ACTION_TYPE = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    QUANTITY: "QUANTITY",
    SUBMIT: "SUBMIT"
}

type ReducerAction = {
    type: string,
    payload?: CartItemType
}

const reducer = (state: CartStateType, action: ReducerAction): CartStateType => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.ADD: {
            if (!action.payload) {
                throw new Error("action.payload is missing in ADD action")
            }

            const { sku, price, name } = action.payload;

            const filteredCart: CartItemType[] = state.cart.filter(item => item.sku !== sku)

            const itemExists: CartItemType | undefined = state.cart.find(item => item.sku === sku);

            const quantity: number = itemExists ? itemExists.qty + 1 : 1;

            return {
                ...state,
                cart: [...filteredCart, { sku, name, price, qty: quantity }]
            }
        }
        case REDUCER_ACTION_TYPE.REMOVE: {
            if (!action.payload) {
                throw new Error("action.payload is missing in REMOVE action")
            }

            const { sku } = action.payload;

            const filteredCart: CartItemType[] = state.cart.filter(item => item.sku !== sku)

            return {
                ...state, cart: [...filteredCart]
            }
        }
        case REDUCER_ACTION_TYPE.QUANTITY: {
            if (!action.payload) {
                throw new Error("action.payload is missing in QUANTITY action")
            }
            const { sku, qty } = action.payload;

            const itemExists: CartItemType | undefined = state.cart.find(item => item.sku === sku);

            if (!itemExists) {
                throw new Error("item must exists to be able to update quantity")
            }

            const updatedItem: CartItemType = { ...itemExists, qty }

            const filteredCart: CartItemType[] = state.cart.filter(item => item.sku !== sku)

            return {
                ...state,
                cart: [...filteredCart, updatedItem]
            }

        }
        case REDUCER_ACTION_TYPE.SUBMIT: {
            return {
                ...state, cart: []
            }
        }
        default:
            throw new Error("unidentified reducer action type is used")
    }
}

const useCartCtx = (initCartState: CartStateType) => {
    const [state, dispatch] = useReducer(reducer, initCartState);

    const REDUCER_ACTIONS = useMemo(() => {
        return REDUCER_ACTION_TYPE
    }, [])

    const totalItem: number = state.cart.reduce((previousValue, cartItem) => previousValue + cartItem.qty, 0)

    const totalPrice : string = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(state.cart.reduce((previousValue, cartItem) => previousValue + (cartItem.qty * cartItem.price), 0))

    const cart = state.cart.sort((a, b) => {
        const itemA = Number(a.sku.slice(-4))
        const itemB = Number(b.sku.slice(-4))
        return itemA - itemB
    })

    return {
        dispatch, REDUCER_ACTIONS, totalItem, totalPrice, cart
    }
}

type UseCartCtxType = ReturnType<typeof useCartCtx>

const initCartCtxState: UseCartCtxType = {
    cart: [],
    dispatch: () => {},
    REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
    totalItem: 0,
    totalPrice: ''
}

const CartCtx = createContext<UseCartCtxType>(initCartCtxState);

type ChildrenType = {
    children: ReactElement | ReactElement[]
}

export const CartCtxProvider = ({children}:ChildrenType): ReactElement => {
    return (
        <CartCtx.Provider value={useCartCtx(initCartCtxState)}>
            {children}
        </CartCtx.Provider>
    )
}