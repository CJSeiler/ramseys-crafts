import { Link } from "react-router-dom";

const HomeScreen = () => {
    return (
        <div className="home-wrapper">
          <div className="hero">
            <h1 className="heading bold">Ramsey's Crafts</h1>
            <p className="subheading">Handmade Crochet Clothing</p>
            <Link className="hero__link" to="/products">Shop Now</Link>
          </div>

          <section className="categories-container">
            <div className="category-card hats">
              <Link to="/products?category=hat" className="category-card__link" aria-label="Link to hat products">Hats</Link>
            </div>

            <div className="category-card sweaters">
              <Link to="/products?category=sweater" className="category-card__link" aria-label="Link to sweater products">Sweaters</Link>
            </div>

            <div className="category-card yarn">
              <Link to="/products?category=yarn" className="category-card__link" aria-label="Link to yarn products">Yarn</Link>
            </div>
          </section> {/* closes categories container */}
        </div> /* closes home-wrapper */
    );
};

export default HomeScreen;