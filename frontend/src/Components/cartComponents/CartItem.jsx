import React, { useContext } from "react"
import { CartContext } from "../../Context/CartContext"

export function CartItem(props) {
    const { increaseQuantity, decreaseQuantity, removeCartItem } = useContext(CartContext)
    console.log(props.image);    

    function calculateItemPrice() {
        return (props.quantity * props.price) / 100
    }
    return (
        <div className="cart-item">
            <img className="cart-item-image" src={props.image} alt={props.title} />
            <h3 className="cart-item-title">{props.title}</h3>
            <p className="cart-item-description">{props.description}</p>
            
            <div className="cart-item-quantity flex">
                <p>quantity:</p>
            
                <div className="quanitity-counter flex">
                    <button className="increase-button" onClick={()=> increaseQuantity(props.item)}>+</button>
                    <p>{props.quantity}</p>
                    <button className="decrease-button"onClick={()=> decreaseQuantity(props.item)}>-</button>
                </div>

                <button className="cart-item-remove-button" onClick={()=> removeCartItem(props.item)}>Remove from cart</button>
            </div>
        
            <p className="cart-item-price">${calculateItemPrice()}</p>
        </div>      
                 
    )
        
}