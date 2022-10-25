import React, { useContext } from "react"
import { useParams } from "react-router-dom"
import { CartContext } from "../Context/CartContext"
import { productsData } from "../data/productsData"

export default function ProductDetails() {
    const { addToCart } = useContext(CartContext)
    let { productID } = useParams()
    const currentProduct = productsData.find(item => item.id === Number(productID))
    return (
        <div className="product-container">
            <h1>{currentProduct.title}</h1>
            <img src={currentProduct.image} alt={currentProduct.title}/>
            <p>{currentProduct.description}</p>
            <button onClick={()=> addToCart(currentProduct)}>+</button>
        </div>
    )
}