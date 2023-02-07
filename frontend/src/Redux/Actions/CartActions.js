import { 
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_UPDATE_QTY,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_PAYMENT_METHOD,
    CART_SAVE_GUEST_INFO,
} from "../Constants/CartConstants"

// ADD PRODUCT TO CART
export const addToCart = (id, qty) => async(dispatch, getState) => {
    const response = await fetch(`/api/products/${id}`, { method: "GET" })
    const data = await response.json()

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
    })

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}

// REMOVE PRODUCT FROM CART
export const removeFromCart = id => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    })

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}

// UPDATE CART QUANTITY
export const updateCartQuantity = (id, qty) => async(dispatch, getState) => {
    const response = await fetch(`/api/products/${id}`, { method: "GET" })
    const data = await response.json()

    dispatch({
        type: CART_UPDATE_QTY,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty,
        }
    })

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}

// SAVE SHIPPING ADDRESS
export const saveShippingAddress = data => dispatch => {
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data
    })

    localStorage.setItem("shippingAddress", JSON.stringify(data))
}

// SAVE PAYMENT METHDO
export const savePaymentMethod = data => dispatch => {
    dispatch({
        type: CART_SAVE_PAYMENT_METHOD,
        payload: data
    })

    localStorage.setItem("paymentMethod", JSON.stringify(data))
}

// SAVE GUEST INFO
export const saveGuestInfo = data => dispatch => {
    dispatch({
        type: CART_SAVE_GUEST_INFO,
        payload: data
    })

    localStorage.setItem("guestInfo", JSON.stringify(data))
}