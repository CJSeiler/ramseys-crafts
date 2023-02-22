import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../Redux/Actions/ProductActions";
import ProductCard from "../Components/ProductCard";
import Loading from "../Components/LoadingError/Loading";
import Message from "../Components/LoadingError/Error";

const Products = () => {
    const dispatch =  useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category");
    let filteredProducts;
    let emptyElement;

    if (category) {
        filteredProducts = products.filter(product => product.category === category);
    }

    
    useEffect(() => {
        dispatch(listProduct());
    }, [dispatch]);
    
    // if theres a category query string in the url, then filter the products based on the category
    const productsElements = category ? 
    filteredProducts.map(product => {
        const {_id, image, name, description, price} = product;
        return (
            <ProductCard
            key={_id}
            id={_id} 
            image={image}
            name={name}
            description={description}
            price={price / 100}
            />       
            );
        })
        :
        products.map(product => {
            const {_id, image, name, description, price} = product;
            return (
                <ProductCard
                key={_id}
                id={_id} 
                image={image}
                name={name}
                description={description}
                price={price / 100}
                />       
                );
            });
            
    if (!loading) {
        emptyElement = productsElements.length === 0 ? <p>Oops... No products found.</p> : null;
    }
            return (
                <>
            <div className="products-container">
                <h2 className="products-heading">Products</h2>
                {/* render Loading if loading is true
                    render Message if loading is false but error is a truthy value
                    render productsElements if loading is false and error is undefined
                */}
                {loading ? 
                    <Loading /> 
                    : 
                    error ? 
                        <Message variant="alert-danger">{error}</Message> 
                        :
                        productsElements
                }
                {emptyElement}
            </div>
        </>
    );
};

export default Products;