import { handleApiCall } from "../../utils/APIHanlder";
import { 
    ORDER_CREATE_REQUEST, 
    ORDER_CREATE_SUCCESS, 
    ORDER_CREATE_FAIL,
    ORDER_LIST_REQUEST,
    ORDER_LIST_SUCCESS,
    ORDER_LIST_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL, 
    } from "./../Constants/OrderConstants"
import { 
        CART_CLEAR_ITEMS, 
        CART_CLEAR_SHIPPING_ADDRESS 
    } from "../Constants/CartConstants"
import { logout } from "./UserActions"

// CREATE ORDER
export const createOrder = order => async(dispatch, getState) => {
    try {
        dispatch({ type: ORDER_CREATE_REQUEST })

        const {
            userLogin: { userInfo }
        } = getState();

        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
            data: order,
        };

        const data = await handleApiCall("api/orders", config);

        dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });
        dispatch({ type: CART_CLEAR_ITEMS, payload: data });
        dispatch({type: CART_CLEAR_SHIPPING_ADDRESS, payload: data});

        localStorage.removeItem("cartItems");
        localStorage.removeItem("shippingAddress");
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
            method: "GET",
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const data = await handleApiCall("api/orders/", config);

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

// GET ORDER DETAILS
export const getOrderDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: ORDER_DETAILS_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            },
        };

        const data = await handleApiCall(`api/orders/${id}`, config);
        dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        const message = 
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;

        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }

        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload: message,
        });
    }
};
