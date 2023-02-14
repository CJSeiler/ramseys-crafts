const calculateItemPrice = (qty, price) => {
    return (qty * price) / 100
}

const calculateCartSubtotal = (cartItems) => {
    return cartItems.reduce((acc, item) => {
        return acc + item.price * item.qty / 100
    }, 0).toFixed(2)
}

const calculateShippingPrice = (cartItemsSubtotal) => {
    const shippingPrice = cartItemsSubtotal > 100 ? 0 : 20
    return shippingPrice.toFixed(2)
}

const calculateTaxPrice = (cartSubtotalPrice) => {
    return (0.08 * cartSubtotalPrice).toFixed(2)
}

const calculateTotalOrderPrice = (cartSubTotalPrice, cartShippingPrice, cartTaxPrice) => {
    const totalPrice = (
        Number(cartSubTotalPrice) + 
        Number(cartShippingPrice) + 
        Number(cartTaxPrice)
        )
    return totalPrice.toFixed(2)
}

export { calculateItemPrice,
         calculateCartSubtotal,
         calculateShippingPrice,
         calculateTaxPrice,
         calculateTotalOrderPrice 
        }