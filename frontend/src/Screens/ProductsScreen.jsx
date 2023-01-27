import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { listProduct } from "../Redux/Actions/ProductActions"
import { ProductCard } from "../Components/ProductCard"
import Navbar from "../Components/Navbar"

export default function Products() {
    const dispatch =  useDispatch()
    const productList = useSelector((state) => state.productList)
    const { loading, error, products } = productList
    
    useEffect(()=>{
        dispatch(listProduct())
    }, [dispatch])
    const productsElements = products.map(product => {
        const {_id, image, name, description, price} = product
        return (
            <ProductCard
                key={_id}
                id={_id} 
                image={image}
                name={name}
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
                {loading ? <h1>Loading...</h1> : productsElements}
            </div>
        </>
    )
}