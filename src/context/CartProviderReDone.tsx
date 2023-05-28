// import { ProductsPropsType } from "./ProductsProviderReDone"

import { createContext, useMemo, useReducer } from "react"
import { ChildrenType } from "./ProductsProviderReDone"

type CartPropsType = {
    // ...ProductsPropsType,
    sku: string,
    name: string,
    price: number,
    qty: number
}

type CartStateType = {
    cart: CartPropsType[]
}

const initCartState: CartStateType = {
    cart: []
}

////////////////////////////////////
// Reducer Function Related Code //
////////////////////////////////////

const REDUCER_ACTION_TYPE = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    QUANTITY: "QUANTITY",
    SUBMIT: "SUBMIT"
}

type ReducerActionType = typeof REDUCER_ACTION_TYPE

type ReducerActionPropsType = {
    type: string,
    payload?: CartPropsType
}

const reducer = (state: CartStateType, action: ReducerActionPropsType): CartStateType => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.ADD: {
            if (!action.payload) {
                throw new Error("action.payload is missing in ADD action")
            }
            
            const { sku, price, name } = action.payload

            const filteredCart: CartPropsType[] = state.cart.filter(item => item.sku !== sku)

            const itemExists: CartPropsType | undefined = state.cart.find(item => item.sku === sku)

            // updating quantity by 1 ehen found item otherwise giving it a value of 1
            const qty: number = itemExists ? itemExists.qty + 1 : 1

            return { ...state, cart: [...filteredCart, { name, price, qty, sku }] }
        }
        case REDUCER_ACTION_TYPE.REMOVE: {
            if (!action.payload) {
                throw new Error("action.payload is missing in REMOVE action")
            }

            const { sku } = action.payload

            const filteredCart: CartPropsType[] = state.cart.filter(item => item.sku !== sku)

            return { ...state, cart: [...filteredCart] }
        }
        case REDUCER_ACTION_TYPE.QUANTITY: {
            if (!action.payload) {
                throw new Error("action.payload is missing in QUANTITY action")
            }

            const { sku, qty } = action.payload

            const itemExists: CartPropsType | undefined = state.cart.find(item => item.sku === sku)

            if(!itemExists) {
                throw new Error("Item must exist to be able update its quantity")
            }
            
            const updatedItem: CartPropsType = {...itemExists, qty}
            
            const filteredCart: CartPropsType[] = state.cart.filter(item => item.sku !== sku)

            return {...state, cart: [...filteredCart, updatedItem]}
        }
        case REDUCER_ACTION_TYPE.SUBMIT: {
            // we are simply emptying our existing cart
            // inm real app it could be storing data to a db or elsewhere and other related logic in it
            return { ...state, cart: [] }
        }
        default:
            throw new Error("Unidentified reducer action type")
    }
}

////////////////////////////////////
// context function related code //
//////////////////////////////////

const useCartContext = (initCartState: CartStateType) => {
    const [state, dispatch] = useReducer(reducer, initCartState)

    // memoizing reducer action functiuo so that it does not cause any re-render of any sort
    const REDUCER_ACTIONS = useMemo(() => {
        return REDUCER_ACTION_TYPE
    }, [])

    const totalItems: number = state.cart.reduce((prevValue, currItm) => prevValue + currItm.qty, 0)

    const sumValue:number = state.cart.reduce((prevValue, curr) => prevValue + (curr.qty * curr.price), 0)

    const totalPrice = new Intl.NumberFormat("en-US", {currency: "USD", style: "currency"}).format(sumValue)

    const sliceLastFourDigits = (arr:CartPropsType) => Number(arr.sku.slice(-4))

    const cart = state.cart.sort((a, b) => {
        const itemA = sliceLastFourDigits(a)
        const itemB = sliceLastFourDigits(b)
        return itemA - itemB
    })

    return {dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart}
}

////////////////////////////////////
// Context Provider related code //
////////////////////////////////////

type UseCartContextType = ReturnType<typeof useCartContext>;

const initCartContextState: UseCartContextType = {
    dispatch: () => {},
    REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
    totalItems: 0,
    totalPrice: '',
    cart: []
}

const CartContext = createContext<UseCartContextType>(initCartContextState)

export const CartProvider = ({children}: ChildrenType): React.ReactElement => {
    return (
        <CartContext.Provider value={useCartContext(initCartState)}>
            {children}
        </CartContext.Provider>
    )
}