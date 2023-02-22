import React, { useState, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import Toast from "../LoadingError/Toast"
import Message from "../LoadingError/Error"
import Loading from "./../LoadingError/Loading"
import { toast } from "react-toastify"
import { updateUserProfile } from "../../Redux/Actions/UserActions"

const ProfileUpdateForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const toastId = useRef(null);

    const userDetails = useSelector(state => state.userDetails);
    const { loading, error, user } = userDetails;

    const userUpdateProfile = useSelector(state => state.userUpdateProfile);
    const { loading: updateLoading} = userUpdateProfile;
    const dispatch = useDispatch();

    useEffect(() => {
        if(user) {
            setFormData({
                name: user.name,
                email: user.email,
                password: "",
                confirmPassword: "",
            });
        }
    }, [dispatch, user]);

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
                toastId.current = toast.error("Password does not match");
              }
        } else {
            const { name, email, password } = formData;
            dispatch(updateUserProfile({id: user._id, name, email, password}));
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.success("Profile Updated");
              }
        }
    }

    return (
        <>
            <Toast />
            {error && <Message variant="alert-danger">{error}</Message>}
            {updateLoading && <Loading />}
            <form className="profile-update-form" onSubmit={handleSubmit}>
                    <label>
                            Name:
                            <input 
                                type="text" 
                                name="name"
                                // value defaults to empty string to prevent uncontrolled to controlled input error 
                                value={formData.name || ""} 
                                onChange={(e) => handleChange(e)}
                                required 
                            />
                        </label>

                        <label>
                            Email:
                            <input 
                                type="email" 
                                name="email" 
                                value={formData.email || ""} 
                                onChange={(e) => handleChange(e)}
                                required 
                            />
                        </label>

                        <label>
                            Password:
                            <input 
                                type="password" 
                                name="password" 
                                value={formData.password || ""} 
                                onChange={(e) => handleChange(e)}
                                required 
                            />
                        </label>

                        <label>
                            Confirm Password:
                            <input 
                                type="password" 
                                name="confirmPassword" 
                                value={formData.confirmPassword || ""} 
                                onChange={(e) => handleChange(e)}
                                required 
                            />
                        </label>
                        <button>UPDATE PROFILE</button>
                    </form>
        </>
    );
};

export default ProfileUpdateForm;