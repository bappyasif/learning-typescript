type CartProviderPropsType = {
    sku: string,
    name: string,
    price: number,
    quantity: number
}

type CartStateType = {cart: CartProviderPropsType[]}

const initCartState: CartStateType = {cart: []}