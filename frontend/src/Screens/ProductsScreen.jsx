import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../Redux/Actions/ProductActions";
import ProductCard from "../Components/ProductCard.jsx";
import Loading from "../Components/LoadingError/Loading.jsx";
import Message from "../Components/LoadingError/Error.jsx";

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
            
    // productsElements will always be 0 while page is loading
    // this prevents displaying the error while loading
    if (!loading) {
        emptyElement = productsElements.length === 0 ? <Message variant="alert-danger">Oops... No products found.</Message> : null;
    }

    return (
        <div className="products-container">
            <div className="products-banner banner-image">
                <h1>PRODUCTS</h1>
            </div>
            {loading ? 
                <Loading /> 
                : 
                error ? 
                    <div className="products-screen__alert">
                        <Message variant="alert-danger">{error}</Message> 
                    </div>
                    :
                    <section>
                        <div className="products-filter">
                            <h3>Categories</h3>
                            <ul className="products-categories" aria-label="products categories">
                                <li>
                                    <Link 
                                        className="products-categories__link" 
                                        to="/products" 
                                        role="button"
                                        aria-current={category  ? "false" : "page"}
                                    >All</Link>
                                </li>

                                <li>
                                    <Link 
                                        className="products-categories__link" 
                                        to="/products?category=hat"
                                        aria-current={category === "hat" ? "page" : "false"}
                                        role="button"
                                    >Hats</Link>
                                </li>

                                <li>
                                    <Link 
                                        className="products-categories__link" 
                                        to="/products?category=sweater"
                                        aria-current={category === "sweater" ? "page" : "false"}
                                        role="button"
                                    >Sweaters</Link>
                                </li>

                                <li>
                                    <Link 
                                        className="products-categories__link" 
                                        to="/products?category=yarn" 
                                        aria-current={category === "yarn" ? "page" : "false"}
                                        role="button"
                                    >Yarn</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="products-list">
                            {/* render Loading if loading is true
                                render Message if loading is false but error is a truthy value
                                render productsElements if loading is false and error is undefined
                            */}
                            {productsElements}
                            {emptyElement}
                        </div>
                    </section>
            }
        </div>
    );
};

export default Products;