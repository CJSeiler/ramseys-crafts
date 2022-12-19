import React, { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { CartContext } from "../Context/CartContext"
import { productsData } from "../data/products"
import Navbar from "../Components/Navbar"

/**
 * @component
 * @ProductDetails
 * 
 * @returns 
 */
export default function ProductDetails() {
    const { addToCart, cartItems } = useContext(CartContext)
    let { productID } = useParams()
    const currentProduct = productsData.find(item => item.id === Number(productID))
    const { title, image, description, price } = currentProduct
    const isInCart = cartItems.some(item => item.id === currentProduct.id)

    return (
        <>
            <Navbar />
            <div className="product-container flex">
                <h2 className="product-title">{title}</h2>
                <img className="product-image" src={image} alt={title}/>
                <p className="product-description">{description}</p>
                <p className="product-price bold">${price / 100}</p>

                <div>
                    <button
                        className={`add-to-cart-button ${isInCart ? "disabled-button" : ""}`}
                        onClick={()=> addToCart(currentProduct)}
                        disabled={isInCart}
                    >Add to cart</button>

                    {isInCart ? <span>added to cart!</span> : ""}
                </div>
                {isInCart ? <Link to="/cart" className="cart-link">Go to cart</Link> : ""}
            </div>
        </>
    )
}