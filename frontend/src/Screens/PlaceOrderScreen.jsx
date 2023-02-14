import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { calculateShippingPrice,
         calculateTaxPrice,
         calculateCartSubtotal,
         calculateTotalOrderPrice, 
        } from "../utils"
import { createOrder } from "../Redux/Actions/OrderActions"
import { ORDER_CREATE_RESET } from "../Redux/Constants/OrderConstants"
import Navbar from "./../Components/Navbar"
import Message from "../Components/LoadingError/Error"
import shaw from "../images/shaw.jpg"
import userIcon from "../icons/user-solid.svg"
import truckIcon from "../icons/truck-solid.svg"
import locationIcon from "../icons/location-dot-solid.svg"

const PlaceOrderScreen = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const cart = useSelector(state => state.cart)
    const userLogin = useSelector(state => state.userLogin)
    
    const { 
        cartItems, 
        shippingAddress, 
        paymentMethod, 
        guestInfo, 
        subtotalPrice, 
        shippingPrice, 
        taxPrice, 
        totalPrice 
    } = cart
    const isCartEmpty = cartItems.length === 0
    
    const { userInfo } = userLogin
    const isLoggedIn = userInfo ? true : false

    const orderCreate = useSelector((state) => state.orderCreate)
    const { order, success, error } = orderCreate
    
    useEffect(() => {
        if(!isLoggedIn && !guestInfo) {
            navigate("/guestcheckout")
        }
    }, [isLoggedIn, guestInfo, navigate])

    useEffect(() => {
        if (success) {
          navigate(`/order/${order._id}`)
          dispatch({ type: ORDER_CREATE_RESET })
        }
      }, [dispatch, navigate, success, order])

    const handlePlaceOrder = async () => {
        if(!isLoggedIn) {
            // navigate to guest confirmation screen
            console.log("guest order placed")
            navigate("/orderconfirmation")
        } else {
            dispatch(createOrder({
                orderItems: cartItems,
                shippingAddress: shippingAddress,
                paymentMethod: paymentMethod,
                subtotalPrice: Number(subtotalPrice),
                shippingPrice: Number(shippingPrice),
                taxPrice: Number(taxPrice),
                totalPrice: Number(totalPrice),
            }))
        }
    }
    
    // Calculate Price
    cart.subtotalPrice = calculateCartSubtotal(cartItems)
    cart.shippingPrice = calculateShippingPrice(cartItems.length, cart.subtotalPrice)
    cart.taxPrice = calculateTaxPrice(cart.subtotalPrice)
    cart.totalPrice = calculateTotalOrderPrice(cart.subtotalPrice, cart.shippingPrice, cart.taxPrice)

    const orderItemsElements = cartItems.map(item => {
        return (
            <div className="order-items-info flex" key={item.product}>
                <img src={shaw} alt={item.name} height="100px" width="100px"/>
                
                <div className="order-items-info-right flex">
                    <p className="order-item-name">
                        <Link to={`/products/${item.product}`} className="order-item-link">
                            {item.name}
                        </Link>
                    </p>
                    
                    <div className="order-item-quantity">
                        <p className="order-item-quantity__label">QUANTITY:</p>
                        <p className="bold">{item.qty}</p>
                    </div>

                    <div className="order-item-subtotal">
                        <p className="order-item-subtotal__label">SUBTOTAL:</p>
                        <p className="bold">${item.price * item.qty / 100}</p>
                    </div>
                </div>
            </div>
        )
    })

    /* checking userInfo allows the useEffect function to run without an error */
    return (
        (userInfo || guestInfo) && 
        <>
            <Navbar />
            <div className="order-container">
                <div className="order-customer-info-container flex">
                    <div className="order-customer-info flex">
                        <div className="order-customer-info__img flex">
                            <img src={userIcon} alt="user icon"/>
                        </div>

                        <div className="order-customer-info__details">
                            <h2>Customer</h2>
                            
                            <p>{userInfo ? userInfo.name : guestInfo.name}</p>
                            <p>{userInfo ? userInfo.email : guestInfo.email}</p>
                        </div>
                    </div>

                    <div className="order-customer-info flex">
                        <div className="order-customer-info__img flex">
                            <img src={truckIcon} alt="truck icon"/>
                        </div>
                        <div className="order-customer-info__details">
                            <h2>Order info</h2>
                            <p>Shipping: {shippingAddress.city}</p>
                            <p>Payment: {paymentMethod}</p>
                        </div>
                    </div>

                    <div className="order-customer-info flex">
                        <div className="order-customer-info__img flex">
                            <img src={locationIcon} alt="location icon"/>
                        </div>

                        <div className="order-customer-info__details">
                            <h2>Deliver to</h2>
                            <p>Address: {shippingAddress.address}</p>
                        </div>
                    </div>
                </div>

                <div className="order-items-container flex">
                    {orderItemsElements}
                </div>

                <div className="order-price-info">
                    {error && (
                        <div className="order-price-info__alert">
                            <Message variant="alert-danger">{error}</Message>
                        </div>
                    )}

                    <p className="order-price-info__label">Products</p>
                    <p className="order-price-info__amount">${cart.subtotalPrice}</p>

                    <p className="order-price-info__label">Shipping</p>
                    <p className="order-price-info__amount">${cart.shippingPrice}</p>

                    <p className="order-price-info__label">Tax</p>
                    <p className="order-price-info__amount">${cart.taxPrice}</p>

                    <p className="order-price-info__label">Total</p>
                    <p className="order-price-info__amount">${cart.totalPrice}</p>

                    
                    <button 
                        className="order-button"
                        onClick={handlePlaceOrder}
                        disabled={isCartEmpty}
                    >
                        PLACE ORDER
                    </button>
                </div>

            </div>
        </>
    )
}

export default PlaceOrderScreen