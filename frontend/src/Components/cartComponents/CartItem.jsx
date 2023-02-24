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
        <div className="cart-item flex">
            <img className="cart-item-image" src="../../../public/images/shaw.png" alt={props.name} />

            <p className="cart-item-price bold">${calculateItemPrice(currentItem.qty, props.price)}</p>
            
            <h3 className="cart-item__name bold">
                <Link to={`/products/${props.id}`} className="cart-item__link">
                    {props.name}
                </Link> 
            </h3>

            <p className="cart-item__description">{props.description}</p>
                    
            <select className="cart-item-qty-input" value={currentItem.qty} onChange={(e) => handleChange(e)}>
                {/* creates an array with the length eqaul to the count in stock to map out the appropriate amount of select options */}
                {[...Array(currentItem.countInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                   Qty {x + 1}
                </option>
                ))}
            </select>

            <button 
                className="cart-item-remove-button"
                onClick={() => removeFromCartHandle(props.id)}
            >
                <img src={closeMenu} alt="" />
            </button>
        </div>               
    );  
};

export default CartItem;