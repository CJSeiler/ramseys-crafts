import { productsData } from "../data/productsData"
import Favorite from "../Components/Favorite"
import Header from "../Components/Header"
export default function Home() {
    const favoriteProducts = productsData.filter(product => product.isFavorite)
    const favoriteElements = favoriteProducts.map(product => {
      const {id, image, title, description } = product
      return (
          <Favorite
            key={id} 
            id={id}
            image={image}
            title={title}
            description={description}
          />
        ) 
    })

    return (
        <div className="home-wrapper">
            <Header />
            <h3 className="app-banner">Shop our favorites!</h3>
            <main>
              <div className="main-favorite-cards">
                  {favoriteElements}
              </div>
            </main>
        </div>
    )
}