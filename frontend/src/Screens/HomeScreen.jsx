import { Link } from "react-router-dom"
import Navbar from "../Components/Navbar"

const HomeScreen = () => {
    return (
        <div className="home-wrapper">
          <Navbar />
          <header>
            <h1 className="heading bold">Ramsey's Crafts</h1>
            <p className="subheading">Handmade Crochet Clothing</p>
            <Link className="header__link" to="/products">Shop Now</Link>
          </header>
          <div className="categories-container flex">
            <div className="category-card hats">
              <Link to="/products/hats" className="category-card__link">Hats</Link>
            </div>

            <div className="category-card sweaters">
              <Link to="/products/sweaters" className="category-card__link">Sweaters</Link>
            </div>

            <div className="category-card yarn">
              <Link to="/products/yarn" className="category-card__link">Yarn</Link>
            </div>
          </div>
          
        </div>
    )
}

export default HomeScreen