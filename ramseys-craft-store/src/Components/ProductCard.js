import React from "react"
import { Link } from "react-router-dom"

export function ProductCard(props) {
    return (
        <div className="product-card flex-column">
            <Link to={`/products/${props.id}`}>
                <img src={props.img} className="product-card-image" alt={props.title}/>
            </Link>
            <p className="product-card-title">{props.title}</p>
            <p className="product-card-price bold">${props.price}</p>
        </div>
    )
}