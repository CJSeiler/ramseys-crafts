import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { calculateShippingPrice,
         calculateTaxPrice,
         calculateTotalCartPrice,
         calculateTotalOrderPrice, 
        } from "../utils"
import Navbar from "./../Components/Navbar"
import shaw from "../images/shaw.jpg"

const PlaceOrderScreen = () => {
    
    const dispatch = useDispatch()
    
    const cart = useSelector(state => state.cart)
    const userLogin = useSelector(state => state.userLogin)
    
    const { cartItems, shippingAddress, paymentMethod } = cart
    const { userInfo } = userLogin
    
    // Calculate Price
    console.log(calculateShippingPrice(cartItems))
    cart.itemsPrice = calculateTotalCartPrice(cartItems)
    cart.shippingPrice = calculateShippingPrice(cartItems)
    cart.taxPrice = calculateTaxPrice(cartItems)
    cart.totalPrice = calculateTotalOrderPrice(cart.itemsPrice, cart.shippingPrice, cart.taxPrice) 

    const orderItemsElements = cartItems.map(item => {
        return (
            <div className="order-items-info flex" key={item.product}>
                <img src={shaw} alt={item.name} height="100px" width="100px"/>
                <p>{item.name}</p>
                <p>QUANTITY: {item.quantity}</p>
                <p>SUBTOTAL: ${item.price / 100}</p>
            </div>
        )
    })



    return (
        <>
            <Navbar />
            <div className="order-container">
                <div className="order-customer-info-container flex">
                    <div className="order-customer-info flex">
                        <img src="" alt=""/>
                        <div className="order-customer-info-right">
                            <h2>Customer</h2>
                            <p>{userInfo.name}</p>
                            <p>{userInfo.email}</p>
                        </div>
                    </div>

                    <div className="order-customer-info flex">
                        <img src="" alt=""/>
                        <div className="order-customer-info-right">
                            <h2>Order info</h2>
                            <p>Shipping: {shippingAddress.city}</p>
                            <p>Payment: {paymentMethod}</p>
                        </div>
                    </div>

                    <div className="order-customer-info flex">
                        <img src="" alt=""/>
                        <div className="order-customer-info-right">
                            <h2>Deliver to</h2>
                            <p>Address: {shippingAddress.address}</p>
                        </div>
                    </div>
                </div>

                <div className="order-items-container">
                    {orderItemsElements}
                </div>

                <div className="order-price-info">
                    <div>
                        <p>Products</p>
                        <p>${calculateTotalCartPrice(cartItems)}</p>
                    </div>

                    <div>
                        <p>Shipping</p>
                        <p>${cart.shippingPrice}</p>
                    </div>

                    <div>
                        <p>Tax</p>
                        <p>$5</p>
                    </div>

                    <div>
                        <p>Total</p>
                        <p>$5678</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlaceOrderScreen