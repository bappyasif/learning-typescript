import { ChangeEvent, ReactElement, memo } from "react"
import { CartItemType, ReducerAction, ReducerActionType } from "../contexts/CartProvider"

type CartLineItemPropsType = {
    item: CartItemType,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType
}

export const CartLineItem = ({ item, dispatch, REDUCER_ACTIONS }: CartLineItemPropsType): ReactElement => {
    const img: string = new URL(`../images/${item.sku}.jpg`, import.meta.url).href
    const lineTotal: number = (item.quantity * item.price)
    const highestQty: number = 20 > item.quantity ? 20 : item.quantity
    const optionValues: number[] = [...Array(highestQty).keys()].map(i => i + 1)
    const options: ReactElement[] = optionValues.map(val => {
        return (
            <option key={`option-${val}`} value={val}>{val}</option>
        )
    })
    const onChnageQty = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch({
            type: REDUCER_ACTIONS.QUANTITY,
            payload: { ...item, quantity: Number(e.target.value) }
        })
    }
    const onRemoveFromCart = () => dispatch({
        type: REDUCER_ACTIONS.REMOVE,
        payload: item
    })
    const content = (
        <li className="cart__item">
            <img src={img} alt={item.name} className="cart__img" />
            <div aria-label="Item Name">{item.name}</div>
            <div aria-label="Price Per Item">{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(item.price)}</div>
            <label htmlFor="itemnQty" className="offscreen">Item Quantity</label>
            <select name="itemQty" id="itemQty" className="cart__select" aria-label="Item Quantity" onChange={onChnageQty}>
                {options}
            </select>
            <div className="cart__item-subtotal" aria-label="item subtotal">
                {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(lineTotal)}
            </div>
            <button className="cart__button" aria-label="remove item from cart" title="remove item from cart" onClick={onRemoveFromCart}>
                X
            </button>
        </li>
    )
    return content
}

// 2nd argument for memozied function component
// object referential equality check
function areItemEqual({item: prevItem}: CartLineItemPropsType, {item: nextItem}: CartLineItemPropsType) {
    return Object.keys(prevItem).every(key => {
        return prevItem[key as keyof CartItemType] === nextItem[key as keyof CartItemType]
    })
}

// iprovements with memoized component
const MemoizedCartLineItem = memo<typeof CartLineItem>(CartLineItem, areItemEqual)

export default MemoizedCartLineItem