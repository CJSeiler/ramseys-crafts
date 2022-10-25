import React from "react"
import { Link } from "react-router-dom"

export function ProductCard(props) {
    return (
        <div className="product-card">
            <Link to={`/products/${props.id}`}>
                <img src={props.img} className="product-card-image" alt={props.title}/>
            </Link>
            <h4 className="product-card-title">{props.title}</h4>
            <p className="product-card-price">${props.price}</p>
        </div>
    )
}