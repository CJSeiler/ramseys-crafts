import React, { useContext } from "react"
import { CartContext } from "../Context/CartContext"

export function CartItem(props) {
    const { increaseQuantity, decreaseQuantity, removeCartItem } = useContext(CartContext)
    

    return (
        <div className="cart-item-container">
            <div className="cart-item flex-column">
                <img className="cart-item-image" src={props.img} alt={props.title} />

                <div className="cart-item-details flex-row">
                    <div className="cart-item-details-description">
                        <h3 className="cart-item-details-title">{props.title}</h3>
                        <p>{props.description}</p>
                    </div>

                    <div className="cart-item-details-quantity flex-row">
                        <p>quantity:</p>

                        <button className="increase-button" onClick={()=> increaseQuantity(props.item)}>+</button>
                        {props.quantity}
                        <button className="decrease-button"onClick={()=> decreaseQuantity(props.item)}>-</button>
                        <button className="cart-item-remove-button" onClick={()=> removeCartItem(props.item)}>Remove from cart</button>
                    </div>

                </div>

                <p className="cart-item-price">${(props.quantity * props.price).toFixed(2)}</p>
            </div>      
        </div>          
    )
        
}