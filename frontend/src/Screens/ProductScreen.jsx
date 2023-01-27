import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Navbar from "../Components/Navbar"
import { useDispatch, useSelector } from 'react-redux';
import { listSingleProduct } from "../Redux/Actions/ProductActions.js"
import { addToCart } from "../Redux/Actions/CartActions.js"
import imageHolder from "../images/sweater_gray.jpg"
/**
 * @component
 * @ProductDetails
 * 
 * @returns 
 */
export default function ProductDetails() {
    const [qty, setQty] = useState(1)
    const { productId } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {
        dispatch(listSingleProduct(productId))
    }, [dispatch, productId])

    const addToCartHandle = e => {
        e.preventDefault()
        navigate("/cart")
        dispatch(addToCart(productId, qty))
    }

    const handleChange = e => {
        setQty(Number(e.target.value))
    }
    
    console.log(product.countInStock);
    const { title, image, description, price } = product

    return (
        <>
            <Navbar />
            <div className="product-container flex">
                <h2 className="product-title">{title}</h2>
                <img className="product-image" src={imageHolder} alt={title}/>
                <p className="product-description">{description}</p>
                <p className="product-price bold">${price / 100}</p>
                <p>Quantity: </p>
                <select
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

                <div>
                    <button
                        className={`add-to-cart-button`}
                        onClick={(e)=> addToCartHandle(e)}
                    >Add to cart</button>
                </div>
            </div>
        </>
    )
}