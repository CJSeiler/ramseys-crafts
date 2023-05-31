const calculateItemSubtotal = (qty, price) => {
    return (qty * price) / 100;
};

const calculateSubtotal = (cartItems) => {
    return cartItems.reduce((acc, item) => {
        return acc + item.price * item.qty / 100;
    }, 0).toFixed(2);
};

const calculateShipping = (cartItemsLength, subtotal) => {
    if(cartItemsLength === 0) {
        return "0.00";
    } else {
        return (subtotal > 100 ? "0.00" : "20.00");
    }
};

const calculateTax = (subtotal) => {
    return (0.08 * subtotal).toFixed(2);
};

const calculateTotal = (subtotal, shipping, tax) => {
    const totalPrice = (
        Number(subtotal) + 
        Number(shipping) + 
        Number(tax)
        );

    return totalPrice.toFixed(2);
};

export { 
    calculateItemSubtotal,
    calculateSubtotal,
    calculateShipping,
    calculateTax,
    calculateTotal
   };  