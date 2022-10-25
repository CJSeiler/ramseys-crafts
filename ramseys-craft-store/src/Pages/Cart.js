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
                quantity={item.quantity}
            />
        )
    })

    return (
        <div className="cart-container">
            {cartItemElements}
            <button onClick={()=> emptyCart()}>Empty Cart</button>
        </div>
    )
}