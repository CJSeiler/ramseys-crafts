import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../LoadingError/Toast";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
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

    const { error, userInfo } = useSelector(state => state.userLogin);

    const userUpdateProfile = useSelector(state => state.userUpdateProfile);
    const { loading: updateLoading} = userUpdateProfile;
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

    const handleSubmit = (e) => {
        e.preventDefault();

        if(formData.password !== formData.confirmPassword) {
            // prevents the error from stacking multiple times
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error("Passwords do not match");
              }
        } else {
            const { name, email, password } = formData;
            dispatch(updateUserProfile({id: userInfo._id, name, email, password}));
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.success("Profile Updated");
            }
        }
    };
    
    return (
        <>
            <Toast />
            {updateLoading && <Loading />}
            <form className="profile-update-form" onSubmit={handleSubmit}>
                {error && <Message variant="alert-danger">{error}</Message>}
                
                <div className="profile-update-form__group">
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

                <div className="profile-update-form__group">
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

                <div className="profile-update-form__group">
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

                <div className="profile-update-form__group">
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

                <button className="profile-update-form__button" type="submit">UPDATE PROFILE</button>
            </form>
        </>
    );
};

export default ProfileUpdateForm;