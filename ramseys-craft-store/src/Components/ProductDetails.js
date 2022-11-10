import React, { useContext } from "react"
import { useParams } from "react-router-dom"
import { CartContext } from "../Context/CartContext"
import { productsData } from "../data/productsData"

export default function ProductDetails() {
    const { addToCart } = useContext(CartContext)
    let { productID } = useParams()
    const currentProduct = productsData.find(item => item.id === Number(productID))
    return (
        <div className="product-container flex-column">
            <h2 className="product-title">{currentProduct.title}</h2>
            <img className="product-image" src={currentProduct.image} alt={currentProduct.title}/>
            <p className="product-description">{currentProduct.description}</p>
            <p className="product-price bold">${currentProduct.price}</p>
            <button onClick={()=> addToCart(currentProduct)}>Add to cart</button>
        </div>
    )
}