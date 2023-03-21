import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails } from "../Redux/Actions/OrderActions";
import Loading from "../Components/LoadingError/Loading";
import Message from "../Components/LoadingError/Error";

const OrderDetailsScreen = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { orderDetails } = useSelector(state => state.order);

    const {
            loading,
            error,
            shippingAddress, 
            paymentMethod, 
            orderItems,
            user,
            _id,
        } = orderDetails || {};

    useEffect(() => {
        dispatch(getOrderDetails(id));
    }, [dispatch, id]);

    const orderItemElements = orderItems && orderItems.map(item => {
        return (
            <div className="order-item" key={item.name}>
                <img src={item.image} alt={item.name} />

                <div>
                    <p>{item.name} Whos that hat Whos that hat</p>
                    <p>Qty: {item.qty}</p>
                </div>

                <p>${item.price / 100}</p>
            </div>
        )
    });

    return (
        <div className="order-details-container">
            {loading ? 
                <Loading />
                :
                error ? 
                    <Message variant="alert-danger">{error}</Message>
                    :
                    user && 
                        <div className="order-details">
                            <h1>Thank you for your order!</h1>

                            <div className="order-details__customer">
                                <div>
                                    <h3>Order Number</h3>
                                    <p>{_id}</p>
                                </div>

                                <div>
                                    <h3>Payment</h3>
                                    <p>{paymentMethod}</p>
                                </div>

                                <div>
                                    <h3>Billing Address</h3>
                                    <p>{user.name}</p>
                                    <p>{shippingAddress.address}</p>
                                    <p>{shippingAddress.city}, {shippingAddress.state}</p>
                                    <p>{shippingAddress.postalCode}</p>
                                </div>

                                <div>
                                    <h3>Delivery Address</h3>
                                    <p>{user.name}</p>
                                    <p>{shippingAddress.address}</p>
                                    <p>{shippingAddress.city}, {shippingAddress.state}</p>
                                    <p>{shippingAddress.postalCode}</p>
                                </div>

                                <div>
                                    <h3>Email</h3>
                                    <p>{user.email}</p>
                                </div>

                                <Link to="/products">CONTINUE SHOPPING</Link>
                            </div>

                            <div className="order-details__items">
                                <h2>Order Summary</h2>
                                
                                <div className="order-items-container">
                                    {orderItemElements}
                                </div>

                                <div className="order-details__subtotal">
                                    <p className="lt-font"> Subtotal</p>
                                    <p>${orderDetails.totalPrice}</p>
                                </div>

                                <div className="order-details__shipping">
                                    <p className="lt-font">Shipping</p>
                                    <p>${orderDetails.shippingPrice}</p>
                                </div>

                                <div className="order-details__total">
                                    <p>Total</p>
                                    <p>${orderDetails.totalPrice}</p>
                                    <p className="lt-font">Including ${orderDetails.taxPrice} in tax</p>
                                </div>
                            </div>
                        </div>
            }
        </div>
    );
};

export default OrderDetailsScreen;