import { Link } from "react-router-dom";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import { formatDate } from "../../utils/utils";

const OrdersList = (props) => {
    const { loading, error, orders } = props;

    const ordersElements = orders.map((order, i) => {
        const date = formatDate(order.createdAt);

        return (
            <div className="order" key={order._id}>
                <div>
                    <Link className="order__link" to={`/order/${order._id}`} aria-label="link to order details">{order._id} </Link>
                </div>
                <p>{date}</p>
                <p>${order.total}</p>
            </div>
        );
    });

    return (
        ordersElements.length === 0 ? 
            (
                <div className="orders-list__empty">
                    <h2>No Orders</h2> 
                </div>
            )

            : 

            (
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
            )
    );
};

export default OrdersList;