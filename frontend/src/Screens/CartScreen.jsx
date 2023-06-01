import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { calculateSubtotal } from "../utils/priceUtils";
import CartItem from "../Components/CartComponents/CartItem";

const CartScreen = () => {
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const isCartEmpty = cartItems.length === 0;

    const totalItems = cartItems.reduce((acc, item) => {
        return acc + item.qty;
    }, 0);

 
    const cartItemElements = cartItems.map(item => {
        return (
            <CartItem 
                key={item.product}
                id={item.product}
                image={item.image} 
                name={item.name}
                description={item.description}
                price={item.price}
                qty={item.qty}
            />
        );
    });

    return isCartEmpty ?  
        (
            <div className="cart-container">
                <div className="cart-header__empty">
                    <h2>Your cart is empty.</h2>
                    <Link to="/products" className="empty-cart-link" aria-label="link to products">Start Shopping!</Link>
                </div>
            </div>  
        ) : (
            <div className="cart-container">
                <h2 className="cart-header">Total Cart Items ({totalItems})</h2>

                {cartItemElements}

                <p className="cart-total-price">Subtotal: ${calculateSubtotal(cartItems)}</p>

                <Link to="/shipping" className="cart-checkout-link" aria-label="link to checkout">CHECKOUT</Link>
            </div>
        );
};

export default CartScreen;