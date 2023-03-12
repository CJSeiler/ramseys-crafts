import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../Redux/Actions/UserActions";
import Message from "../Components/LoadingError/Error";
import Loading from "../Components/LoadingError/Loading";

const RegisterScreen = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [confirmPassword, setConfirmPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userRegister = useSelector(state => state.userRegister);
    const { error, loading, userInfo } = userRegister;

    useEffect(() => {
        if (userInfo) {
            navigate("/");
        }
    }, [navigate, userInfo]);

    const handleChange = e => {
        const {name, value} = e.target;

        if (name === "confirmPassword") {
            setConfirmPassword(value);
        }

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.password === confirmPassword) {
            dispatch(register(formData.name, formData.email, formData.password));
        } else {
            console.log("passwords dont match");
        }
    }
        
    return (
        <div className="register-container">
            {error && <Message variant={"alert-danger"}>{error}</Message>}
            {loading && <Loading />}

            <form className="register-form" onSubmit={(e) => handleSubmit(e)}>
                <div className="register-form__group">
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text"
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={(e) => handleChange(e)}
                        required 
                    />
                </div>

                <div className="register-form__group">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email"
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={(e) => handleChange(e)}
                        required 
                    />
                </div>

                <div className="register-form__group">
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password"
                        name="password" 
                        value={formData.password} 
                        onChange={(e) => handleChange(e)}
                        required 
                    />
                </div>

                <div className="register-form__group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input 
                        type="password" 
                        id="confirmPassword"
                        name="confirmPassword" 
                        value={confirmPassword} 
                        onChange={(e) => handleChange(e)}
                        required 
                    />
                </div>

                <button className="register-form-btn" type="submit">REGISTER</button>
                <Link to="/login" className="register-form-link" aria-label="link to register">
                    <p>Already have an account? Sign in!</p>
                </Link>
            </form>
        </div>
    );
};

export default RegisterScreen;