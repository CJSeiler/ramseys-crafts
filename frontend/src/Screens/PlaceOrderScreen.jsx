import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import OrderItems from "../Components/PlaceOrderComponents/OrderItems.jsx";
import CheckoutForm from "../Components/PlaceOrderComponents/CheckoutForm.jsx";
import userIcon from "../icons/user-solid.svg";
import truckIcon from "../icons/truck-solid.svg";
import locationIcon from "../icons/location-dot-solid.svg";

const PlaceOrderScreen = () => {
    const navigate = useNavigate();
    
    const cart = useSelector(state => state.cart);
    const userLogin = useSelector(state => state.userLogin);
    
    const { 
        cartItems, 
        shippingAddress,
        } = cart;
    
    const { userInfo } = userLogin;
    const isLoggedIn = userInfo ? true : false;

    useEffect(() => {
        if(!isLoggedIn) {
            navigate("/login");
        }

        if(!shippingAddress) {
            navigate("/shipping");
        }
    }, [navigate, isLoggedIn, shippingAddress]);
    
    /* checking userInfo allows the useEffect function to run without an error */
    return (
        userInfo &&
            <div className="order__container">
                <section className="customer__container">
                    <div className="customer">
                        <div className="customer__icon">
                            <img  src={userIcon} alt="user icon"/>
                        </div>

                        <div className="customer__details">
                            <h2>Customer</h2>
                            
                            <p>{userInfo.name}</p>
                            <p>{userInfo.email}</p>
                        </div>
                    </div>

                    <div className="customer">
                        <div className="customer__icon">
                            <img src={truckIcon} alt="truck icon"/>
                        </div>

                        <div className="customer__details">
                            <h2>Order info</h2>
                            <p>Shipping: {shippingAddress.city}, {shippingAddress.state}</p>
                        </div>
                    </div>

                    <div className="customer">
                        <div className="customer__icon">
                            <img src={locationIcon} alt="location icon"/>
                        </div>

                        <div className="customer__details">
                            <h2>Deliver to</h2>
                            <p>Address: {shippingAddress.address}</p>
                            <p>{shippingAddress.apartment ? `APT: ${shippingAddress.apartment}` : null}</p>
                        </div>
                    </div>
                </section>

                <section className="items__container">
                    <OrderItems cartItems={cartItems} />
                </section>

                <CheckoutForm cart={cart} />
            </div>       
    );
};

export default PlaceOrderScreen;