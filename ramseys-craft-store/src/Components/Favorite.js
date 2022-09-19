
export default function Favorite(props) {
    return (
        <div className="favorite-card">
            <img src={props.image} alt="favorite product" />
            <h3 className="favorite-title">{props.title}</h3>
            <p className="favorite-description">{props.description}</p>
        </div> 
    )
}