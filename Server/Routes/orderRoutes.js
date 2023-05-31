import express from "express";
import asyncHandler from "express-async-handler";
import protect from "../Middleware/AuthMiddleware.js";
import { verifyOrder, verifyShippingAddress} from "../utils/verifyOrder.js";
import Order from "./../Models/OrderModel.js";


const orderRouter = express.Router();

// CREATE ORDER
orderRouter.post("/", protect, asyncHandler(async (req, res) => {
    const {
        orderItems, 
        shippingAddress, 
        paymentMethod, 
        subtotal, 
        tax, 
        shipping, 
        total,
    } = req.body;

    const addressValidation = await verifyShippingAddress(shippingAddress);
    console.log(addressValidation);
   
   if (!await verifyOrder(orderItems, total)) {
        res.status(400);
        throw new Error("Order prices do not match");
    }

    if(addressValidation.error) {
        res.status(addressValidation.error.code);
        res.json(addressValidation.error);
    }

    if(addressValidation.result.verdict.hasUnconfirmedComponents) {
        throw new Error("invalid address");
    }
    
    if (orderItems && orderItems.length === 0) {
        res.status(400);
        throw new Error("No order items");
    } else {
        const order = new Order({
            orderItems,
            user: req.user._id, 
            shippingAddress, 
            paymentMethod, 
            subtotal, 
            tax,
            shipping, 
            total, 
        });

        const createOrder = await order.save();
        res.status(201).json(createOrder);
    }
}));

// GET ORDER
orderRouter.get("/", protect, asyncHandler(async (req, res) => {
    const order = await Order.find({ user: req.user._id }).sort({ _id: -1 });
    res.json(order);
}));

// GET ORDER BY ID
orderRouter.get("/:id", protect, asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate("user", "name email");

    if(order) {
        res.json(order);
    } else {
        res.status(404);
        throw new Error("Order not found");
    }
}));

export default orderRouter;