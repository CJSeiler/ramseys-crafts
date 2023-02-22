import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Message from "../Components/LoadingError/Error";
import Loading from "../Components/LoadingError/Loading";
import { login } from "../Redux/Actions/UserActions";

const LoginScreen = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userLogin = useSelector(state => state.userLogin);
    const { error, loading, userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            navigate("/")
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
        <>
            <div className="login-container flex">
                {error && <Message variant={"alert-danger"}>{error}</Message>}
                {loading && <Loading />}
                <form className="flex" onSubmit={(e) => handleSubmit(e)}>
                    <label>
                        Email:
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={(e) => handleChange(e)}
                            required 
                        />
                    </label>
                    <label>
                        Password:
                        <input 
                            type="password" 
                            name="password" 
                            value={formData.password} 
                            onChange={(e) => handleChange(e)}
                            required 
                        />
                    </label>
                    
                    <button>LOGIN</button>
                    <Link to="/register">
                        <p className="login-link">Create Account</p>
                    </Link>
                </form>
            </div>
        </>
    );
};

export default LoginScreen;