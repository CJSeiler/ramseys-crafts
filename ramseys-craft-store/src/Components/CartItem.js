import React, { useContext } from "react"
import { CartContext } from "../Context/CartContext"

export function CartItem(props) {
    const { increaseQuantity, decreaseQuantity, removeCartItem } = useContext(CartContext)
    

    return (
        <div className="cart-item-container">
            <div className="cart-item">
                <img src={props.img} alt={props.title} />
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <p>quantity: {props.quantity}</p>
                <button onClick={()=> increaseQuantity(props.item)}>+</button>
                <button onClick={()=> decreaseQuantity(props.item)}>-</button>
            </div>

            <button onClick={()=> removeCartItem(props.item)}>Remove from cart</button>
        </div>
    )
        
}