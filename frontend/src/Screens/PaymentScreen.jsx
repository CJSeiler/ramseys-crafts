import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "./../Redux/Actions/CartActions";

const PaymentScreen = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;
  
    if (!shippingAddress) {
        navigate("/shipping");
    }
  
    const [paymentMethod, setPaymentMethod] = useState("PayPal");

    const handleChange = e => {
        const { value } = e.target;
        setPaymentMethod(value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        navigate("/placeorder");
    }

    return (
        <>
            <div className="payment-container flex">
                <form className="payment-form" onSubmit={handleSubmit}>
                    <h1>SELECT PAYMENT METHOD</h1>
                    <div className="radio-container flex">
                        <input
                            className="payment-form-input"
                            type="radio"
                            value="PayPal"
                            onChange={e => handleChange(e)}
                            checked={paymentMethod === "PayPal"}
                        />

                        <label className="payment-form-label">PayPal or Credit Card</label>
                    </div>

                    <button>Continue</button>
                </form>
            </div>
        </>
    );
};

export default PaymentScreen;

