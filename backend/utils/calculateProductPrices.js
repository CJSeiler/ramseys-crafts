const calculateItemSubtotal = (qty, price) => {
    return (qty * price) / 100;
};

const calculateShipping = (subtotal) => {
    const shipping = subtotal > 100 ? 0 : 20;
    return shipping.toFixed(2);
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

export { calculateItemSubtotal,
         calculateShipping,
         calculateTax,
         calculateTotal 
        };