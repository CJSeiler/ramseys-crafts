import { 
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_UPDATE_QTY,
    CART_SAVE_SHIPPING_ADDRESS,
} from "../Constants/CartConstants";
import axios from "axios";

// ADD PRODUCT TO CART
export const addToCart = (id, qty) => async(dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            description: data.description,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty,
        }
    });

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// REMOVE PRODUCT FROM CART
export const removeFromCart = id => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    });

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// UPDATE CART QUANTITY
export const updateCartQuantity = (id, qty) => async(dispatch, getState) => {
    const cartItems = getState().cart.cartItems;
    const currentProduct = cartItems.find(item => item.product === id);
    const { product, name, description, image, price, countInStock } = currentProduct;

    if (currentProduct) {
        dispatch({
            type: CART_UPDATE_QTY,
            payload: {
                product: product,
                name: name,
                description: description,
                image: image,
                price: price,
                countInStock: countInStock,
                qty: qty,
            }
        });
    }

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// SAVE SHIPPING ADDRESS
export const saveShippingAddress = data => dispatch => {
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data
    });

    localStorage.setItem("shippingAddress", JSON.stringify(data));
};