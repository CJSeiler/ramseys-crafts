import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../LoadingError/Error";
import { createOrder } from "../../Redux/Actions/OrderActions";
import { ORDER_CREATE_RESET } from "../../Redux/Constants/OrderConstants";
import CheckoutTotal from "./CheckoutTotal";
import {
    calculateSubtotal,
    calculateShipping,
    calculateTax,
    calculateTotal
    } from "../../utils/priceUtils";
import { formatCCExpiry, checkExpiration} from "../../utils/creditCardUtils";

const CheckoutForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cart = useSelector(state => state.cart);
    const { 
        cartItems, 
        shippingAddress, 
        subtotal, 
        shipping, 
        tax, 
        total,
    } = cart;
    const isCartEmpty = cart.cartItems.length === 0;

    const orderCreate = useSelector((state) => state.orderCreate);
    const { order, success, error } = orderCreate;

    // Calculate Prices
    cart.subtotal = calculateSubtotal(cartItems);
    cart.shipping = calculateShipping(cartItems.length, cart.subtotal);
    cart.tax = calculateTax(cart.subtotal);
    cart.total = calculateTotal(cart.subtotal, cart.shipping, cart.tax);

    const [formData, setFormData] = useState({
        cardName: "Joe Schmoe",
        cardNumber: "1234 1234 1234 1234",
        cardExpiration: "12/12",
        cardCVV: "123"
    });

    const [formError, setFormError] = useState("");

    const handleName = e => {
        const {name, value} = e.target;
        // removes all non letters except for spaces
        const formattedValue = value.replace(/[^a-zA-Z\s]/g, "")

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: formattedValue
            };
        });
    };

    const handleCardNumber = e => {
        const {name, value} = e.target;

        setFormData(prevFormData => {
            // Remove all non-digit characters
            const cleanValue = value.replace(/\D/g, '');
            // Insert space after every 4th digit
            const formattedValue = cleanValue.replace(/(\d{4})(?=\d)/g, '$1 ');
            
            return {
                ...prevFormData,
                [name] : formattedValue
            };
        })
    };   

    const handleCardExpiry = e => {
        const {name, value} = e.target;

        setFormData(prevFormData => {
            const formattedValue = formatCCExpiry(value);
            
            return {
                ...prevFormData,
                [name] : formattedValue
            };
        });

        if (value.length === 5) {
            // check if cc is expired and display error message if true
            if (checkExpiration(value)) {
                setFormError("Invalid Expiration.  Please Enter a valid expiration date.");
            } else {
                setFormError("");
            }
        }
    };   

    const handleCardCVV = e => {
        const { name, value } = e.target;
        // Remove all non-digit characters
        const formattedValue = value.replace(/[^0-9]/g, "");

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: formattedValue
            };
        });
    }

    const handlePlaceOrder = async (e) => {
        e.preventDefault();
        dispatch(createOrder({
            orderItems: cartItems,
            shippingAddress: shippingAddress,
            paymentMethod: "Credit Card",
            subtotal: Number(subtotal),
            shipping: Number(shipping),
            tax: Number(tax),
            total: Number(total),
        }));
    };

    // navigate to order page if order is successful
    useEffect(() => {
        if (success) {
          navigate(`/order/${order._id}`)
          // clear order data from redux
          dispatch({ type: ORDER_CREATE_RESET })
        }
    }, [dispatch, navigate, success, order]);

    return (
        <div className="checkout__container">
            <form className="checkout__form" onSubmit={handlePlaceOrder}>
                {formError && (
                    <p>{formError}</p>
                )}
                {error && (
                    <div className="price__alert">
                        <Message variant="alert-danger">{error}</Message>
                    </div>
                )}

                <h3>Payment Details</h3>

                <div className="checkout__form-group">
                    <label htmlFor="cardName">Cardholder Name:</label>
                    <input 
                        type="text" 
                        id="cardName"
                        name="cardName" 
                        value={formData.cardName}
                        onChange={(e) => handleName(e)}
                        required 
                    />
                </div>

                <div className="checkout__form-group">
                    <label htmlFor="cardNumber">Credit Card Number:</label>
                    <input 
                        type="text" 
                        id="cardNumber"
                        name="cardNumber" 
                        value={formData.cardNumber} 
                        onChange={(e) => handleCardNumber(e)}
                        maxLength={19}
                        required 
                    />
                </div>

                <div className="checkout__form-group">
                    <label htmlFor="cardExpiration">Expiry Date</label>
                    <input 
                        type="text" 
                        id="cardExpiration"
                        name="cardExpiration" 
                        value={formData.cardExpiration} 
                        onChange={(e) => handleCardExpiry(e)}
                        maxLength={5}
                        required 
                    />
                </div>

                <div className="checkout__form-group">
                    <label htmlFor="cardCVV">CVV:</label>
                    <input 
                        type="text" 
                        id="cardCVV"
                        name="cardCVV" 
                        value={formData.cardCVV} 
                        onChange={(e) => handleCardCVV(e)}
                        maxLength={3}
                        required 
                    />
                </div>

                <CheckoutTotal cart={cart}/>
                
                <button
                    type="submit" 
                    className="checkout__button"
                    onClick={handlePlaceOrder}
                    disabled={isCartEmpty}
                >
                    PLACE ORDER
                </button>
            </form>
        </div>
    )
};

export default CheckoutForm;