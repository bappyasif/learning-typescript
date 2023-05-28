import { createContext, useMemo, useReducer } from "react"

export type CartProviderPropsType = {
    sku: string,
    name: string,
    price: number,
    quantity: number
}

type CartStateType = { cart: CartProviderPropsType[] }

const initCartState: CartStateType = { cart: [] }

const REDUCER_ACTION_TYPE = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    QUANTITY: "QUANTITY",
    SUBMIT: "SUBMIT"
}

export type ReducerActionType = typeof REDUCER_ACTION_TYPE

export type ReducerAction = {
    type: string,
    payload?: CartProviderPropsType
}

const reducer = (state: CartStateType, action: ReducerAction): CartStateType => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.ADD: {
            if (!action.payload) {
                throw new Error("action.payload is missing in ADD action")
            }
            const { sku, name, price } = action.payload;
            const filteredCart: CartProviderPropsType[] = state.cart.filter(item => item.sku !== sku);

            const itemExist: CartProviderPropsType | undefined = state.cart.find(item => item.sku === sku)

            // updating quantity when already exists otherwise giving it a value of 1
            const qty: number = itemExist ? itemExist.quantity + 1 : 1

            // updating cart state
            return { ...state, cart: [...filteredCart, { sku, name, price, quantity: qty }] }
        }
        case REDUCER_ACTION_TYPE.REMOVE: {
            if (!action.payload) {
                throw new Error("action.payload is missing in REMOVE action")
            }

            const { sku } = action.payload;
            const filteredCart: CartProviderPropsType[] = state.cart.filter(item => item.sku !== sku);

            return { ...state, cart: [...filteredCart] }
        }
        case REDUCER_ACTION_TYPE.QUANTITY: {
            if (!action.payload) {
                throw new Error("action.payload is missing in QUANTITY action")
            }

            const { sku, quantity } = action.payload;

            const itemExist: CartProviderPropsType | undefined = state.cart.find(item => item.sku === sku)

            if (!itemExist) {
                throw new Error("Item must exist in order to update its quantity")
            }

            const updatedItem: CartProviderPropsType = { ...itemExist, quantity }

            const filteredCart: CartProviderPropsType[] = state.cart.filter(item => item.sku !== sku);

            return { ...state, cart: [...filteredCart, updatedItem] }
        }
        case REDUCER_ACTION_TYPE.SUBMIT: {
            return { ...state, cart: [] }
        }
        default:
            throw new Error("Unidentified reducer action type")
    }
}

const useCartCtx = (initCartState: CartStateType) => {
    const [state, dispatch] = useReducer(reducer, initCartState)

    // memoizing reducer actionm functrion causing any re-render
    const REDUCER_ACTIONS = useMemo(() => {
        return REDUCER_ACTION_TYPE
    }, [])

    const totalItems: number = state.cart.reduce((prev, curr) => {
        return prev + curr.quantity
    }, 0)

    // formating total price with USD using Intl.NumberFormat()
    const totalPrice = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(state.cart.reduce((prevValue, currItem) => prevValue + (currItem.quantity * currItem.price), 0))

    const cart = state.cart.sort((a, b) => {
        const itemA = Number(a.sku.slice(-4))
        const itemB = Number(b.sku.slice(-4))
        return itemA - itemB
    })

    return {dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart}
}

export type UseCartCtxType = ReturnType<typeof useCartCtx>

const initCartCtxState: UseCartCtxType = {
    dispatch: () => {},
    REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
    totalItems: 0,
    totalPrice: '',
    cart: []
}

export const CartCtx = createContext<UseCartCtxType>(initCartCtxState)

type ChildrenType =  {children?: React.ReactElement | React.ReactElement[]}

export const CartProvider = ({children}:ChildrenType): React.ReactElement => {
    return(
        <CartCtx.Provider value={useCartCtx(initCartState)}>
            {children}
        </CartCtx.Provider>
    )
}