import { Link } from "react-router-dom";
import Loading from "../../Components/LoadingError/Loading";
import Message from "../../Components/LoadingError/Error";

const OrdersList = (props) => {
    const { loading, error, orders } = props
    console.log(orders);

    const ordersElements = orders.map((order, i) => {
        const date = new Date(order.createdAt);
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);

        return (
            <div className="order" key={order._id}>
                <div>
                    <Link className="order__link" to={`/order/${order._id}`}>{order._id}</Link>
                </div>
                <p>{formattedDate}</p>
                <p>${order.totalPrice}</p>
            </div>
        )
    })

    return (
        <div className="orders-list">
            {loading && <Loading />}
            <div className="orders-list__labels bold">
                <label>ID</label>
                <label>DATE</label>
                <label>TOTAL</label>
            </div>

            {error && <Message>{error}</Message>}
            
            {ordersElements}
        </div>
    );
};

export default OrdersList;