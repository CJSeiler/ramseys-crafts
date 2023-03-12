import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveGuestInfo } from "../Redux/Actions/CartActions";

const GuestCheckoutScreen = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (userInfo) {
            navigate("/");
        }
    }, [navigate, userInfo]);

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
        // dispatch guest info to redux state to store guest name info
        dispatch(saveGuestInfo(formData));
        navigate("/placeorder");
    }

    return (
        <div className="guest-container">
            <form className="guest-checkout-form" onSubmit={(e) => handleSubmit(e)}>
                <h1>GUEST CHECKOUT</h1>
                
                <div className="guest-checkout-form__group">
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name" 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={(e) => handleChange(e)}
                        required 
                    />
                </div>

                <div className="guest-checkout-form__group">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={(e) => handleChange(e)}
                        required 
                    />
                </div>
                
                <button type="submit">CONTINUE</button>
            </form>
        </div>
    );
};

export default GuestCheckoutScreen;