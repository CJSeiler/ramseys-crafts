import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveShippingAddress } from "../Redux/Actions/CartActions";

const ShippingScreen = () => {

    const cart = useSelector(state => state.cart);
    const { shippingAddress } = cart;

    const [formData, setFormData] = useState({
        address: shippingAddress.address,
        city: shippingAddress.city,
        state: shippingAddress.state,
        postalCode: shippingAddress.postalCode,
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = e => {
        const {name, value} = e.target;

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress(formData));
        navigate("/payment");
    }

    return (
        <div className="shipping-container">
            <form className="shipping-form" onSubmit={handleSubmit}>
                <h1>DELIVERY ADDRESS</h1>
                <div className="shipping-form__group">
                    <label htmlFor="address">Address:</label>
                    <input 
                        type="text" 
                        id="address"
                        name="address" 
                        value={formData.address} 
                        onChange={(e) => handleChange(e)}
                        required 
                    />
                </div>

                <div className="shipping-form__group">
                    <label htmlFor="city">City:</label>
                    <input 
                        type="text"
                        id="city"
                        name="city" 
                        value={formData.city} 
                        onChange={(e) => handleChange(e)}
                        required 
                    />
                </div>

                <div className="shipping-form__group">
                    <label htmlFor="state">State:</label>
                    <input 
                        type="text"
                        id="state"
                        name="state" 
                        value={formData.state} 
                        onChange={(e) => handleChange(e)}
                        required 
                    />
                </div>

                <div className="shipping-form__group">
                    <label htmlFor="postal">Postal Code:</label>
                    <input 
                        type="text"
                        id="postal"
                        name="postalCode" 
                        value={formData.postalCode} 
                        onChange={(e) => handleChange(e)}
                        maxLength="5"
                        required 
                    />
                </div>
                <button type="submit">CONTINUE</button>               
            </form>
        </div>
    );
};

export default ShippingScreen;