import { productsData } from "../data/products"
import { ProductCard } from "../Components/productComponents/ProductCard"
import Navbar from "../Components/Navbar"

export default function Products() {
    const productsElements = productsData.map(product => {
        const {id, image, title, description, price} = product
        return (
            <ProductCard
                key={id}
                id={id} 
                image={image}
                title={title}
                description={description}
                price={price / 100}
            />       
        )
    })
    return (
        <>
            <Navbar />
            <div className="products-container">
                <h2 className="products-heading">Products</h2>
                {productsElements}
            </div>
        </>
    )
}