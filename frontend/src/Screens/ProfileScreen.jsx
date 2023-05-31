import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProfileUpdateForm from "../Components/profileComponents/ProfileUpdateForm";
import OrdersList from "../Components/profileComponents/OrdersList";
import { logout } from "../Redux/Actions/UserActions";
import { listOrders } from "../Redux/Actions/OrderActions";
import { formatDate } from "../utils/utils";
import profileIcon from "../icons/profile-icon.svg"

const ProfileScreen = () => {
    const [tab, setTab] = useState("settings");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const isLoggedIn = userInfo ? true : false;
    const { loading, error, orders} = useSelector(state => state.orderList);

    useEffect(() => {
        if(!isLoggedIn) {
            navigate("/login");
        }

        dispatch(listOrders());
    }, [dispatch, navigate, isLoggedIn]);

    return (
        <div className="profile-container">
            <div className="profile">
                <div className="profile__accent"></div>
                <img src={profileIcon} alt="profile icon" />

                <div className="profile__details">
                    <div>
                        <p className="profile__name bold">{isLoggedIn ? userInfo.name : null}</p>
                        <p className="profile__date" >Joined {isLoggedIn ? formatDate(userInfo.createdAt) : null}</p>
                        <button
                            className="logout-button"
                            aria-label="logout button"
                            onClick={() => {
                                dispatch(logout());
                                navigate("/login");
                            }}
                        >
                            Logout
                        </button>
                    </div>
                </div>

                <div className="profile__tabs">
                    <div className={`profile__settings-tab ${tab === "settings" ? "selected-tab" : ""}`}>
                        <button 
                            aria-label="show profile settings"
                            onClick={() => setTab("settings")}
                        >
                            PROFILE SETTINGS
                        </button>
                    </div>

                    <div className={`profile__orders-tab ${tab === "orders" ? "selected-tab" : ""}`}>
                        <button 
                            aria-label="shows order list"
                            onClick={() => setTab("orders")}
                        >
                            ORDERS LIST
                        </button>
                        <p className="profile__orders-indicator">{orders ? orders.length : null}</p>
                    </div>
                </div>
            </div>

            {tab === "settings" 
                ? 
                <ProfileUpdateForm /> 
                : 
                <OrdersList loading={loading} error={error} orders={orders} />
            }
        </div>
    );
};

export default ProfileScreen;