import { Link } from "react-router-dom";

const ProductCard = props => {
    return (
        <div className="product-card">
            <Link to={`/products/${props.id}`}>
                <img src={props.image} className="product-card__image" alt={`${props.title} link`}/>
            </Link>
            <p className="product-card__title">{props.name}</p>
            <p className="product-card__price">${props.price}</p>
        </div>
    );
};

export default ProductCard;