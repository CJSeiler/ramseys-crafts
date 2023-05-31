import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveShippingAddress } from "../Redux/Actions/CartActions";
import Dropdown from "../Components/StateDropdown";

const ShippingScreen = () => {

    const cart = useSelector(state => state.cart);
    const { shippingAddress } = cart;

    const [formData, setFormData] = useState({
        address: shippingAddress.address || "410 Terry Ave N",
        apartment: shippingAddress.apartment || "",
        city: shippingAddress.city || "Seattle",
        state: shippingAddress.state || "Washington",
        postalCode: shippingAddress.postalCode || "98109",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        let regex;

        if (name === "address" || name === "apartment") {
            // restrict to numbers and letters
            regex = /^[a-zA-Z0-9\s]*$/;
        } else if (name === "city" || name === "state") {
            // restrict to letters
            regex = /^[a-zA-Z\s]*$/;
        } else {
            //restrict to numbers
            regex = /^[0-9]*$/;
        }
        
        if(regex.test(value)) {
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    [name]: value
                };
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress(formData));
        navigate("/placeorder");
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
                        maxLength={60}
                        required 
                    />
                </div>

                <div className="shipping-form__group">
                    <label htmlFor="apartment">Apartment No.</label>
                    <input 
                        type="text" 
                        id="apartment"
                        name="apartment" 
                        value={formData.apartment} 
                        onChange={(e) => handleChange(e)}
                        maxLength={10}
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
                        maxLength={20}
                        required 
                    />
                </div>

                <Dropdown handler={handleChange} state={formData.state}/>

                <div className="shipping-form__group">
                    <label htmlFor="postal">Postal Code:</label>
                    <input 
                        type="text"
                        id="postal"
                        name="postalCode" 
                        value={formData.postalCode} 
                        onChange={(e) => handleChange(e)}
                        maxLength={5}
                        required 
                    />
                </div>
                <button type="submit">CONTINUE</button>               
            </form>
        </div>
    );
};

export default ShippingScreen;