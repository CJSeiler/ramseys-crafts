import { 
    PRODUCT_LIST_FAIL, 
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS, 
    PRODUCT_DETAILS_FAIL, 
    PRODUCT_DETAILS_REQUEST, 
    PRODUCT_DETAILS_SUCCESS, 
} from "../Constants/ProductConstants"

// PRODUCT LIST
export const listProduct = () => async(dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })
        const response = await fetch("/api/products", { method: "GET"})
        const data = await response.json()
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data} )
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload:
                error.response && error.response.data.message 
                    ? error.response.data.message
                    : error.message,
        }) 
    }
}

// SINGLE PRODUCT
export const listSingleProduct = (id) => async(dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })
        const response = await fetch(`/api/products/${id}`, { method: "GET"})
        const data = await response.json()
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data} )
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message 
                    ? error.response.data.message
                    : error.message,
        }) 
    }
}
