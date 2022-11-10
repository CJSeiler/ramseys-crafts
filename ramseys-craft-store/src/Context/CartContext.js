import React, { useState } from "react"

const CartContext = React.createContext()

function CartContextProvider(props) {
    const savedCart = JSON.parse(localStorage.getItem('cart'))
    const [cartItems, setCartItems] = useState(savedCart || [])
    localStorage.setItem("cart", JSON.stringify(cartItems))

    function addToCart(item) {
        setCartItems(prevCart => {
            // check if cart already has item
            if(!prevCart.includes(item)) {
                item.quantity = 1
                return [...prevCart, item]
            } else {
                console.log("Already in cart")
                return prevCart
            }
        })
        console.log("item added")
    }

    function removeCartItem(product) {
        if(window.confirm("Are you sure you want to remove this item?")) {
            setCartItems(prevCart => prevCart.filter(item => item !== product))
            console.log("item removed")
        }
    }

    function emptyCart() {
        localStorage.clear("cart")
        setCartItems([])
        console.log("cart emptied")
    }

    function increaseQuantity(product) {
        setCartItems(cartItems.map(prevItem => {
            if(product === prevItem) {
                return {...prevItem, quantity: prevItem.quantity + 1}
            } else {
                return {...prevItem}
            }
        }))
        console.log("item quantity increased")
    }
    function decreaseQuantity(product) {
        setCartItems(cartItems.map(prevItem => {
            if(product === prevItem && prevItem.quantity > 1 ) {
                return {...prevItem, quantity: prevItem.quantity - 1}
            } else {
                return {...prevItem}
            }
        }))
        console.log("item quantity decreased")
    }

    
    return (
        <CartContext.Provider 
            value={{
                cartItems,
                increaseQuantity,
                decreaseQuantity,
                addToCart,
                removeCartItem,
                emptyCart
            }}>
            {props.children}
        </CartContext.Provider>
    )
}

export {CartContextProvider, CartContext}