import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { removeFromCart, updateCartQuantity } from "../../Redux/Actions/CartActions.js"
import { calculateItemPrice } from "../../utils.js"
import img from "../../images/shaw.jpg"

export function CartItem(props) {

    const dispatch = useDispatch()

    const currentItem = useSelector(state => state.cart.cartItems.find(x => x.product === props.id))
    const [qty, setQty] = useState(currentItem.qty || 0)

    const removeFromCartHandle = id => {
        dispatch(removeFromCart(id))
    }

    const handleChange = e => {
        setQty(Number(e.target.value))
    }

    useEffect(() => {
        // prevents dispatch from running on mount
        if(currentItem.qty !== qty) {
            dispatch(updateCartQuantity(props.id, qty))
        }
    }, [dispatch, props.id, qty, currentItem.qty])

    return (
        <div className="cart-item flex">
            <img className="cart-item-image" src={img} alt={props.name} />
            <div className="cart-item-right">
                <h3 className="cart-item-title">{props.name}</h3>            
                <div className="cart-item-qty flex">
                    <select className="cart-item-qty-input" value={qty} onChange={(e) => handleChange(e)}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </select>
                    <button 
                        className="cart-item-remove-button"
                        onClick={() => removeFromCartHandle(props.id)}
                        >Remove from cart</button>
                </div>
            
                <p className="cart-item-price">Price: ${calculateItemPrice(qty, props.price)}</p>
            </div>
        </div>      
                 
    )
        
}