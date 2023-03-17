import { 
    ORDER_CREATE_REQUEST, 
    ORDER_CREATE_SUCCESS, 
    ORDER_CREATE_FAIL,
    ORDER_LIST_REQUEST,
    ORDER_LIST_SUCCESS,
    ORDER_LIST_FAIL, 
} from "./../Constants/OrderConstants"
import { CART_CLEAR_ITEMS } from "../Constants/CartConstants"
import axios from "axios"
import { logout } from "./UserActions"

// CREATE ORDER
export const createOrder = order => async(dispatch, getState) => {
    try {
        dispatch({ type: ORDER_CREATE_REQUEST })

        const {
            userLogin: { userInfo }
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            }
        };

        const { data } = await axios.post(`/api/orders`, order, config);
        dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });
        dispatch({ type: CART_CLEAR_ITEMS, payload: data });

        localStorage.removeItem("cartItems");
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;

        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }

        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: message,
        });
    }
};

// GET USER ORDERS
export const listOrders = () => async (dispatch, getState) => {
    try {
        dispatch({ type: ORDER_LIST_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const { data } = await axios.get(`api/orders/`, config);
        dispatch({ type: ORDER_LIST_SUCCESS, payload: data });
    } catch (error) {
        const message = 
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;

        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }

        dispatch({
            type: ORDER_LIST_FAIL,
            payload: message,
        });
    }
};
