import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateCartQuantity } from "../../Redux/Actions/CartActions.js";
import { calculateItemPrice } from "../../utils.js";
import closeMenu from "../../icons/close-menu.png";

const CartItem = (props) => {
    const dispatch = useDispatch();
    const currentItem = useSelector(state => state.cart.cartItems.find(x => x.product === props.id));

    const removeFromCartHandle = id => {
        dispatch(removeFromCart(id));
    };

    const handleChange = e => {
        dispatch(updateCartQuantity(props.id, Number(e.target.value)));
    };

    return (
        <div className="cart-item">
            <img className="cart-item__image" src={props.image} alt={props.name} />

            <h3 className="cart-item__name">
                <Link to={`/products/${props.id}`} className="cart-item__link" aria-label="link to product">
                    {props.name}
                </Link> 
            </h3>

            <div>
                <label htmlFor="qty">Quantity: </label>
                <select id="qty" className="cart-item__qty-input" value={currentItem.qty} onChange={(e) => handleChange(e)}>
                    {/* creates an array with the length eqaul to the count in stock to map out the appropriate amount of select options */}
                    {[...Array(currentItem.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                    {x + 1}
                    </option>
                    ))}
                </select>
                <p className="sr-only">use the arrow keys to navigate the quantity options and press enter to select</p>
            </div>

            <p className="cart-item__price">${calculateItemPrice(currentItem.qty, props.price)}</p>

            <button 
                className="cart-item__remove-button"
                onClick={() => removeFromCartHandle(props.id)}
            >
                <img src={closeMenu} alt="remove item from cart" />
            </button>
        </div>               
    );  
};

export default CartItem;