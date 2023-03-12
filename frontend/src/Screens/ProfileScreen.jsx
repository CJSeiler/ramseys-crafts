import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { getUserDetails } from "../Redux/Actions/UserActions";
import ProfileUpdateForm from "../Components/profileComponents/profileUpdateForm";

const ProfileScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    
    const userLogin = useSelector(state => state.userLogin) || null;
    const { userInfo } = userLogin;

    const isLoggedIn = userInfo ? true : false

    useEffect(() => {
        if(!isLoggedIn) {
            navigate("/login");
        }
        dispatch(getUserDetails("profile"));
    }, [dispatch, navigate, isLoggedIn]);

    return (
        <div className="profile-container">
            <div className="profile-details">
                <div></div>
                <div>
                    <p className="profile-name">{isLoggedIn ? userInfo.name : null}</p>
                    <p className="profile-date">Joined {isLoggedIn ? moment(userInfo.createdAt).format("LL") : null}</p>
                </div>
                <p>PROFILE SETTINGS</p>
                <p>ORDERS LIST</p>
            </div>
            <ProfileUpdateForm />
        </div>
    );
};

export default ProfileScreen;