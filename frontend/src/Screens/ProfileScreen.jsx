import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import moment from "moment"
import { getUserDetails } from "../Redux/Actions/UserActions";
import Navbar from '../Components/Navbar';
import ProfileUpdateForm from "../Components/profileComponents/profileUpdateForm";

const ProfileScreen = () => {
    const dispatch = useDispatch()
    
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        dispatch(getUserDetails("profile"))
    }, [dispatch])

    return (
        <>
            <Navbar />
            <div className="profile-container flex">
                <div className="profile-details">
                    <div></div>
                    <div>
                        <p className="profile-name">{userInfo.name}</p>
                        <p className="profile-date">Joined {moment(userInfo.createdAt).format("LL")}</p>
                    </div>
                    <p>PROFILE SETTINGS</p>
                    <p>ORDERS LIST</p>
                </div>
                <ProfileUpdateForm />
            </div>
        </>
    )
}

export default ProfileScreen