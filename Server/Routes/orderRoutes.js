import express from "express"
import asyncHandler from "express-async-handler"
import protect from "../Middleware/AuthMiddleware.js"
import verifyOrder from "../utils/verifyOrder.js"
import Order from "./../Models/OrderModel.js"


const orderRouter = express.Router()

// CREATE ORDER
orderRouter.post("/", protect, asyncHandler(async (req, res) => {
    const {
        orderItems, 
        shippingAddress, 
        paymentMethod, 
        subtotalPrice, 
        taxPrice, 
        shippingPrice, 
        totalPrice,
    } = req.body

   
   if (!await verifyOrder(orderItems, totalPrice)) {
        res.status(400)
        throw new Error("Order prices do not match")
   }
    
    if (orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error("No order items")
    } else {
        const order = new Order({
            orderItems,
            user: req.user._id, 
            shippingAddress, 
            paymentMethod, 
            subtotalPrice, 
            taxPrice, 
            shippingPrice, 
            totalPrice, 
        })

        const createOrder = await order.save()
        res.status(201).json(createOrder)
    }
}))

export default orderRouter