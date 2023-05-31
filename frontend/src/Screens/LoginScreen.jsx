import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Message from "../Components/LoadingError/Error";
import Loading from "../Components/LoadingError/Loading";
import { login } from "../Redux/Actions/UserActions";

const LoginScreen = () => {
    const [formData, setFormData] = useState({
        email: "example@example.com",
        password: "example",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userLogin = useSelector(state => state.userLogin);
    const { error, loading, userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            navigate("/profile");
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
        dispatch(login(formData.email, formData.password));
    };

    return (
        <div className="login-container">
            {error && <Message variant={"alert-danger"}>{error}</Message>}
            {loading && <Loading />}
            <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
                <div className="login-form__group">
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

                <div className="login-form__group">
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
                
                <button type="submit">LOGIN</button>

                <Link to="/register" aria-label="link to create acccount">
                    <p className="register-link">Create Account</p>
                </Link>
            </form>
        </div>
    );
};

export default LoginScreen;