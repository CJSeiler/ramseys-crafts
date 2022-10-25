import { productsData } from "../data.js/productsData"
import { ProductCard } from "../Components/ProductCard"
import '../App.css' 
export default function Products() {
    const productsElements = productsData.map(product => {
        const {id, img, title, description, price} = product
        return (
            <ProductCard
                key={id}
                id={id} 
                img={img}
                title={title}
                description={description}
                price={price}
            />       
        )
    })
    return (
        <div className="products-container">
            <h2 className="products-heading">Products</h2>
            {productsElements}
        </div>
    )
}