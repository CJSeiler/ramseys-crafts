const calculateItemPrice = (qty, price) => {
    return (qty * price) / 100
}

const calculateTotalCartPrice = (cartItems) => {
    return Number(cartItems.reduce((acc, item) => {
        return acc + item.price * item.qty / 100
    }, 0).toFixed(2))
}

const calculateShippingPrice = (cartItemsPrice) => {
    const shippingPrice = cartItemsPrice > 100 ? 0 : 20
    return Number(shippingPrice.toFixed(2))
}

const calculateTaxPrice = (cartItemsPrice) => {
    return Number((0.15 * cartItemsPrice).toFixed(2))
}

const calculateTotalOrderPrice = (itemsPrice, shippingPrice, taxPrice) => {
    return Number((itemsPrice + shippingPrice + taxPrice).toFixed(2))
}

export { calculateItemPrice,
         calculateTotalCartPrice,
         calculateShippingPrice,
         calculateTaxPrice,
         calculateTotalOrderPrice 
        }