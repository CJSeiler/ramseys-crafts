import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listSingleProduct } from "../Redux/Actions/ProductActions.js";
import { addToCart } from "../Redux/Actions/CartActions.js";
import Loading from "../Components/LoadingError/Loading"
import Message from "../Components/LoadingError/Error"

const ProductDetails = () => {
    const [qty, setQty] = useState(1);
    const { productId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(listSingleProduct(productId));
    }, [dispatch, productId]);

    const addToCartHandle = e => {
        e.preventDefault();
        navigate("/cart");
        dispatch(addToCart(productId, qty));
    }

    const handleChange = e => {
        setQty(Number(e.target.value));
    }
    
    const { name, image, description, price } = product;

    return (
        loading ? 
            <Loading /> 
            : 
            error ?
                <div className="product-screen__alert">
                    <Message variant="alert-danger">{error}this is your message</Message> 
                </div> 
                :
                <div className="product-container">
                    <img className="product__image" src={image} alt={name}/>
                    <div className="product-container__right">
                        <h3 className="product__name">{name}</h3>
                        <p className="product__price">${price / 100}</p>
                        <p className="product__description">{description}</p>

                        <div className="product-quantity-container">
                            <label htmlFor="quantity" className="sr-only">Quantity: </label>

                            <select
                                id="quantity"
                                value={qty}
                                onChange={e => handleChange(e)}
                                >
                                {/* generates the amount of select options based on the
                                    the amount of stock available  */}
                                {[...Array(product.countInStock).keys()].map(
                                    (x) => (
                                    <option key={x + 1} value={x + 1}>
                                        {x + 1}
                                    </option>
                                    )
                                )}
                            </select>

                            <p className="sr-only">use the arrow keys to navigate the quantity options and press enter to select</p>

                            <button
                                className="add-to-cart-button"
                                onClick={(e)=> addToCartHandle(e)}
                            >
                                ADD TO CART
                            </button>
                        </div> { /* closes product-quantity-container */}
                    </div> {/* closes product-container__right */}
                </div> /* closes product-container*/
    );
};

export default ProductDetails;