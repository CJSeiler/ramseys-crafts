import { Link } from "react-router-dom"
import { productsData } from "../data/products"
import Favorite from "../Components/Favorite"
// import Header from "../Components/Header"
import Navbar from "../Components/Navbar"

/**
 * @component
 * @Home
 * favoriteProducts filters the favorite products data from productsData file
 * favoriteElements return the elements for each favorite product
 * @returns home page with current favorite products
 */
export default function Home() {
    const favoriteProducts = productsData.filter(product => product.isFavorite)
    const favoriteElements = favoriteProducts.map(product => {
      const {id, image, title} = product

      return (
          <Favorite
            key={id} 
            id={id}
            image={image}
            title={title}
          />
        ) 
    })

    // <section className="favorite-cards flex">
    //   {favoriteElements}
    // </section>

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