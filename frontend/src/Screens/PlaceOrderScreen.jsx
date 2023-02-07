import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { calculateShippingPrice,
         calculateTaxPrice,
         calculateCartSubtotal,
         calculateTotalOrderPrice, 
        } from "../utils"
import Navbar from "./../Components/Navbar"
import shaw from "../images/shaw.jpg"
import userIcon from "../icons/user-solid.svg"
import truckIcon from "../icons/truck-solid.svg"
import locationIcon from "../icons/location-dot-solid.svg"

const PlaceOrderScreen = () => {
    
    const dispatch = useDispatch()
    
    const cart = useSelector(state => state.cart)
    const userLogin = useSelector(state => state.userLogin)
    
    const { cartItems, shippingAddress, paymentMethod } = cart
    const { userInfo } = userLogin
    
    // Calculate Price
    cart.subTotalPrice = calculateCartSubtotal(cartItems)
    cart.shippingPrice = calculateShippingPrice(cart.subTotalPrice)
    cart.taxPrice = calculateTaxPrice(cart.subTotalPrice)
    cart.totalPrice = calculateTotalOrderPrice(cart.subTotalPrice, cart.shippingPrice, cart.taxPrice)

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

    return (
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
                            <p>{userInfo.name}</p>
                            <p>{userInfo.email}</p>
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
                    <p className="order-price-info__label">Products</p>
                    <p className="order-price-info__amount">${calculateCartSubtotal(cartItems)}</p>

                    <p className="order-price-info__label">Shipping</p>
                    <p className="order-price-info__amount">${cart.shippingPrice}</p>

                    <p className="order-price-info__label">Tax</p>
                    <p className="order-price-info__amount">${cart.taxPrice}</p>

                    <p className="order-price-info__label">Total</p>
                    <p className="order-price-info__amount">${cart.totalPrice}</p>

                    <button className="order-button">PLACE ORDER</button>
                </div>

            </div>
        </>
    )
}

export default PlaceOrderScreen