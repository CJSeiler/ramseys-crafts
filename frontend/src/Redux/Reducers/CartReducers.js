import { 
    CART_ADD_ITEM, 
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_CLEAR_SHIPPING_ADDRESS,
    CART_UPDATE_QTY,
    CART_CLEAR_ITEMS,
} from './../Constants/CartConstants';

export const cartReducer = (state = { cartItems:[], shippingAddress: {},}, action) => {
    let item, existItem;
    switch (action.type) {
        case CART_ADD_ITEM:
            item = action.payload;
            existItem = state.cartItems.find(x => x.product === item.product);
        
            if(existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x)
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                };
            }

        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.product !== action.payload)
            };

        case CART_UPDATE_QTY:
            item = action.payload;
            existItem = state.cartItems.find(x => x.product === item.product);
            if(existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x)
                };
            } else {
                return {
                    ...state,
                };
            }
        
        case CART_CLEAR_ITEMS:
            return {
                ...state,
                cartItems: []
            };

        case CART_SAVE_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress: action.payload
            };

        case CART_CLEAR_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress: {},
            };
            
        default:
            return {
                ...state,
                // must be defined here instead of initial state or items will show up empty
                cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
                shippingAddress: JSON.parse(localStorage.getItem("shippingAddress")) || {},
                paymentMethod: JSON.parse(localStorage.getItem("paymentMethod")) || null,
            };
    }
}