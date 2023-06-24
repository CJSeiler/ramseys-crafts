import { handleApiCall } from "../../utils/APIHandler";
import { 
    USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL, 
    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_DETAILS_RESET,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
} from "./../Constants/UserConstants";

// LOGIN
export const login = (email, password) => async(dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST })
    
        const config = {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            data: {
                email,
                password,
            },
        };

        const data = await handleApiCall("api/users/login", config);
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data});
        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message 
                    ? error.response.data.message
                    : error.message,
        });
    }
};

// LOGOUT
export const logout = () => (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: USER_LOGOUT});
    dispatch({ type: USER_DETAILS_RESET});
};

// REGISTER
export const register = (name, email, password) => async(dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST });
    
        const config = {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            data: {
                name,
                email,
                password,
            }
        };

        const data = await handleApiCall("api/users", config);
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.message 
                    ? error.response.data.message
                    : error.message,
        }); 
    }
};

// UPDATE PROFILE
export const updateUserProfile = (user) => async(dispatch, getState) => {
    try {
        dispatch({ type: USER_UPDATE_PROFILE_REQUEST })
    
        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${userInfo.token}`
            },
            data: {
                user,
            }
        };

        const data = await handleApiCall("api/users/profile", config);

        dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: data});
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;

        if (message === "Not authorized, token failed") {
            dispatch(logout());
            }

        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload: message
        });

        // thrown error necessary for showing error on frontend
        throw new Error(message);
    }
};