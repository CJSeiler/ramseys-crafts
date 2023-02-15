import { configureStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import { 
    productListReducer,
    productDetailsReducer,
} from './Reducers/ProductReducers'
import { cartReducer } from "./Reducers/CartReducers"
import { 
    userLoginReducer, 
    userRegisterReducer, 
    userDetailsReducer,
    userUpdateProfileReducer, 
} from "./Reducers/UserReducer"
import { orderCreateReducer } from "./Reducers/OrderReducers"

const initialState = {
    cart: {
        cartItems: [],
        shippingAddress: {},
        guestInfo: {},
    },
    userLogin: {
        userInfo: {}
    }
}

const devToolsEnhancer =
  process.env.NODE_ENV !== "production" &&
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f

const store = configureStore({
    reducer: {
        productList : productListReducer,
        productDetails: productDetailsReducer,
        cart: cartReducer,
        userLogin: userLoginReducer,
        userRegister: userRegisterReducer,
        userDetails: userDetailsReducer,
        userUpdateProfile: userUpdateProfileReducer,
        orderCreate: orderCreateReducer,
    },
    initialState,
    middleware: [thunk],
    devToolsEnhancer,
})

export default store