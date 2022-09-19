export default function Menu(props) {
    return (
        <div className={`Menu-wrapper ${props.show ? "show" : "hide"}`}>
            <nav className="Menu-nav">
                <a className="Menu-nav-link" href="#">Home</a>
                <a className="Menu-nav-link" href="#">About</a>
                <a className="Menu-nav-link" href="#">Products</a>
                <a className="Menu-nav-link" href="#">Contact</a>
                <a className="Menu-nav-link" href="#">Cart</a>
            </nav>
        </div>
    )
}