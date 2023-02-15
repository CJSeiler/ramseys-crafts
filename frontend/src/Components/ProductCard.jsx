import React from "react"
import { Link } from "react-router-dom"

export function ProductCard(props) {
    console.log(props.image)
    return (
        <div className="product-card flex">
            <Link to={`/products/${props.id}`}>
                <img src={props.image} className="product-card-image" alt={props.title}/>
            </Link>
            <p className="product-card-title">{props.name}</p>
            <p className="product-card-price bold">${props.price}</p>
        </div>
    )
}