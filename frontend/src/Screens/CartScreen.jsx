import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { calculateTotalCartPrice } from "../utils"
import { CartItem } from "../Components/cartComponents/CartItem"
import Navbar from "../Components/Navbar"

const CartScreen = () => {
    const cart = useSelector(state => state.cart)
    const {cartItems} = cart
    const isCartEmpty = cartItems.length === 0

    const totalItems = cartItems.reduce((acc, item) => {
        return acc + item.qty
    }, 0)
 
    const cartItemElements = cartItems.map(item => {
        return (
            <CartItem 
                key={item.product}
                id={item.product}
                image={item.image} 
                name={item.name}
                price={item.price}
                />
                )
            })
            

    return isCartEmpty ?  
        (
        <>
            <Navbar />
            <div className="cart-container">
                <div className="cart-header-empty">
                    <h2>Your cart is empty.</h2>
                    <Link to="/products" className="empty-cart-link">Start Shopping!</Link>
                </div>
            </div>  
        </>
        ) : (
        <>
            <Navbar />
            <div className="cart-container flex">
                <div className="cart-header">
                    <h2>Total Cart Items ({totalItems})</h2>
                </div>

                {cartItemElements}

                <p className="cart-total-price">Total: ${calculateTotalCartPrice(cartItems)}</p>


                <div className="cart-links flex">
                    <Link to="/products" className="cart-shopping-link">CONTINUE SHOPPING</Link>
                    <Link to="/shipping" className="cart-checkout-link">CHECKOUT</Link>
                </div>
            </div>
        </>
        )
}

export default CartScreen