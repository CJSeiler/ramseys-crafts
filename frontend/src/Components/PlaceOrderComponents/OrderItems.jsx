import { Link } from "react-router-dom";

const OrderItems = ({ cartItems }) => {
    const orderItemsElements = cartItems.map(item => {
        return (
            <div className="item" key={item.product}>
                <img src={item.image} alt={item.name}/>
                
                <div className="item__right">
                    <p className="item__name">
                        <Link to={`/products/${item.product}`} className="item__link">
                            {item.name}
                        </Link>
                    </p>
                    
                    <div className="item__quantity">
                        <p className="item__quantity-label" aria-label="item quantity">Qty:</p>
                        <p>{item.qty}</p>
                    </div>

                    <div className="item__subtotal">
                        <p className="item__subtotal-label">Subtotal:</p>
                        <p>${item.price * item.qty / 100}</p>
                    </div>
                </div>
            </div>
        );
    });

    return (orderItemsElements);
};

export default OrderItems;