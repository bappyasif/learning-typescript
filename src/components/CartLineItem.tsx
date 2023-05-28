import { ChangeEvent, memo } from "react"
import { CartProviderPropsType, ReducerAction, ReducerActionType } from "../context/CartProvider"

type PropsType = {
    item: CartProviderPropsType,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType
}

const CartLineItem = ({ item, dispatch, REDUCER_ACTIONS }: PropsType) => {
    const img: string = new URL(`../images/${item.sku}.jpg`, import.meta.url).href
    const lineTotal: number = (item.price * item.quantity)
    const highestQty: number = 20 > item.quantity ? 20 : item.quantity
    const optionValues: number[] = [...Array(highestQty).keys()].map(i => i + 1)
    const options: React.ReactElement[] = optionValues.map(val => <option key={`opt${val}`} value={val}>{val}</option>)
    const onChangeQty = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch({ type: REDUCER_ACTIONS.QUANTITY, payload: { ...item, quantity: Number(e.target.value) } })
    }
    const onRemoveFromCart = () => dispatch({
        type: REDUCER_ACTIONS.REMOVE,
        payload: item
    })

    const content = (
        <li className="cart__item">
            <img src={img} alt={item.name} className="cart__img" />
            <div aria-aria-label={"Item Name"}>{item.name}</div>
            <div aria-aria-label={"Price Per Item"}>{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(item.price)}</div>

            <label htmlFor="itemQty" className="offscreen">Item Quantity</label>
            <select
                name="itemQty"
                id="itemQty"
                className="cart__select"
                value={item.quantity}
                aria-lebel="Item Quantity"
                onChange={onChangeQty}
            >
                {options}
            </select>

            <div className="cart__item-subtotal" aria-label="Line Item Subtotal">
                {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(lineTotal)}
            </div>

            <button
                className="cart__button"
                aria-label="remove item from cart"
                title="remove item from cart"
                onClick={onRemoveFromCart}
            >❌</button>
        </li>
    )
    return content
}

// export default CartLineItem

// improving upon already implemented app by including more memoization so that it does not re render unless there is a change in list items in cart

// we also need to make sure that passed in objects are equal so that it can decide on re-rendering or not
function areItemsEqual({ item: prevItem }: PropsType, { item: nextItem }: PropsType) {
    return Object.keys(prevItem).every(key => {
        return prevItem[key as keyof CartProviderPropsType] === nextItem[key as keyof CartProviderPropsType]
    })
}

const MemoizedCartLineItem = memo<typeof CartLineItem>(CartLineItem, areItemsEqual)

export default MemoizedCartLineItem