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
        <>
            <div className="register-container flex">
                {error && <Message variant={"alert-danger"}>{error}</Message>}
                {loading && <Loading />}

                <form className="register-form flex" onSubmit={(e) => handleSubmit(e)}>
                    <label>
                        Name:
                        <input 
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            onChange={(e) => handleChange(e)}
                            required 
                        />
                    </label>

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

                    <label>
                        Confirm Password:
                        <input 
                            type="password" 
                            name="confirmPassword" 
                            value={confirmPassword} 
                            onChange={(e) => handleChange(e)}
                            required 
                        />
                    </label>

                    <button className="register-form-btn">REGISTER</button>
                    <Link to="/login" className="register-form-link">
                        <p>Already have an account? Sign in!</p>
                    </Link>
                </form>
            </div>
        </>
    );
};

export default RegisterScreen;