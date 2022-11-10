import React, { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { CartItem } from "../Components/CartItem"

export default function Cart() {
    const { emptyCart, cartItems } = useContext(CartContext)
    const isCartEmpty = cartItems.length === 0
    if(isCartEmpty) {
        return (
            <h1>Cart is empty</h1>
        )
    }
    const cartItemElements = cartItems.map(item => {
        return (
            <CartItem 
                key={item.id}
                item={item} 
                img={item.img} 
                title={item.title}
                description={item.description}
                price={item.price}
                quantity={item.quantity}
            />
        )
    })

    function calculateTotalPrice() {
        return cartItems.reduce((accumulator, value) => {
            return accumulator + (value.quantity * value.price)
        }, 0)
    }

    return (
        <div className="cart-container flex-column">
            <h2 className="cart-heading">Cart</h2>
            <p className="cart-price-heading">Price</p>
            {cartItemElements}
            <p className="cart-total-price">Total: ${calculateTotalPrice().toFixed(2)}</p>
            <button className="empty-cart-button" onClick={()=> emptyCart()}>Empty Cart</button>
        </div>
    )
}