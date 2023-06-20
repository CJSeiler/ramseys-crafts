import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../LoadingError/Toast.jsx";
import Message from "../LoadingError/Error.jsx";
import Loading from "../LoadingError/Loading.jsx";
import { toast } from "react-toastify";
import { updateUserProfile } from "../../Redux/Actions/UserActions";

const ProfileUpdateForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const toastId = useRef(null);
    const { userInfo } = useSelector(state => state.userLogin);

    const userUpdateProfile = useSelector(state => state.userUpdateProfile);
    const { loading, error } = userUpdateProfile;

    const dispatch = useDispatch();

    useEffect(() => {
        if(userInfo) {
            setFormData({
                name: userInfo.name,
                email: userInfo.email,
                password: "",
                confirmPassword: "",
            });
        }
    }, [dispatch, userInfo]);

    const handleChange = e => {
        const {name, value} = e.target;

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            // prevents the error from stacking multiple times
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error("Passwords do not match");
                return;
              }
        }

        const { name, email, password } = formData;

        // try catch block necessary to get error from api call. Can't use error from redux store.
        try {
            await dispatch(updateUserProfile({id: userInfo._id, name, email, password})); 
        } catch (error) {
            toast.current = toast.error("Update failed."); 
            return
        }
        
        toastId.current = toast.success("Profile Updated");
    };
    
    return (
        <div className="profile-form-container">
            <Toast />
            {loading && <Loading />}
            <form className="profile-form" onSubmit={handleSubmit}>
                {error && <Message variant="alert-danger">{error}</Message>}
                
                <div className="profile-form__group">
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name" 
                        type="text" 
                        name="name"
                        // value defaults to empty string to prevent uncontrolled to controlled input error 
                        value={formData.name || ""} 
                        onChange={(e) => handleChange(e)}
                        required 
                        />
                </div>

                <div className="profile-form__group">
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email" 
                        type="email" 
                        name="email" 
                        value={formData.email || ""} 
                        onChange={(e) => handleChange(e)}
                        required 
                        />
                </div>

                <div className="profile-form__group">
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password" 
                        type="password" 
                        name="password" 
                        value={formData.password || ""} 
                        onChange={(e) => handleChange(e)}
                        required 
                        />
                </div>

                <div className="profile-form__group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input 
                        id="confirmPassword"
                        type="password" 
                        name="confirmPassword" 
                        value={formData.confirmPassword || ""} 
                        onChange={(e) => handleChange(e)}
                        required 
                        />
                </div>

                <button className="profile-form__button" type="submit">UPDATE PROFILE</button>
            </form>
        </div>
    );
};

export default ProfileUpdateForm;