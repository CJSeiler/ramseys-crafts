import { Link } from "react-router-dom"
export default function Favorite(props) {
    return (
        <div className="favorite-card flex">
            <Link to={`products/${props.id}`}>
                <img className="favorite-card__img"src={props.image} alt="favorite product" />
            </Link>
            <p className="favorite-card__title bold">{props.title}</p>
        </div> 
    )
}