import { Link } from "react-router-dom"
export default function Favorite(props) {
    return (
        <div className="favorite-card">
            <Link to={`products/${props.id}`}>
                <img src={props.image} alt="favorite product" />
            </Link>
            <h3 className="favorite-title">{props.title}</h3>
            <p className="favorite-description">{props.description}</p>
        </div> 
    )
}