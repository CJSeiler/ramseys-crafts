import React, { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { CartItem } from "../Components/cartComponents/CartItem"
import Navbar from "../Components/Navbar"

export default function Cart() {
    const { emptyCart, cartItems } = useContext(CartContext)
    const isCartEmpty = cartItems.length === 0
    if(isCartEmpty) {
        return (
            <>
                <Navbar />
                <div className="cart-container">
                    <h1>Cart is empty</h1>
                </div>  
            </>
        )
    }
    const cartItemElements = cartItems.map(item => {
        console.log(cartItems)
        console.log(item.image)
        return (
            <CartItem 
                key={item.id}
                item={item} 
                image={item.image} 
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
        <>
            <Navbar />
            <div className="cart-container flex">
                <h2 className="cart-heading">Cart</h2>
                <p className="cart-price-heading">Price</p>
                {cartItemElements}
                <p className="cart-total-price">Total: ${calculateTotalPrice() / 100}</p>
                <button className="empty-cart-button" onClick={()=> emptyCart()}>Empty Cart</button>
            </div>
        </>
    )
}