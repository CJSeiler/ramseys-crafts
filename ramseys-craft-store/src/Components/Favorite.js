import { Link } from "react-router-dom"
export default function Favorite(props) {
    return (
        <div className="favorite-card flex-column">
            <Link to={`products/${props.id}`}>
                <img src={props.image} alt="favorite product" />
            </Link>
            <p className="favorite-title bold">{props.title}</p>
        </div> 
    )
}