import { productsData } from "../data/productsData"
import Favorite from "../Components/Favorite"
import Header from "../Components/Header"

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

    return (
        <div className="home-wrapper">
            <Header />
            <p className="banner bold">Shop our favorites!</p>
            <section className="favorites-container flex-row">
              <div className="favorite-cards flex-column">
                  {favoriteElements}
              </div>
            </section>
        </div>
    )
}