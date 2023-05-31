 

const CheckoutTotal = ({ cart }) => {
    return (
        <div className="checkout__total">
            <h3>Order Summary</h3>
            <div className="checkout__prices">
                <p className="price__label">Subtotal</p>
                <p className="price__amount">${cart.subtotal}</p>

                <p className="price__label">Shipping</p>
                <p className="price__amount">${cart.shipping}</p>

                <p className="price__label tax">Tax</p>
                <p className="price__amount">${cart.tax}</p>

                <p className="price__label bold">Total</p>
                <p className="price__amount bold">${cart.total}</p> 
            </div>
        </div>
    );
};

export default CheckoutTotal;