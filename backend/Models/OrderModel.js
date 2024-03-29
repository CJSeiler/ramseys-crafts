import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
    {
       user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User"
       },
       orderItems: [
        {
            name: { type: String, required: true },
            qty: { type: Number, required: true},
            image: { type: String, required: true },
            price: { type: Number, required: true},
            description: { type: String, required: true },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "Product"
            },
        },
       ],
       shippingAddress: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
       },
       paymentMethod: {
        type: String,
        required: true,
        default: "Credit Card"
       },
       paymentResult: {
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email_address: { type: String },
       },
       subtotal: {
        type: Number,
        required: true,
        default: 0,
       },
       tax: {
        type: Number,
        required: true,
        default: 0,
       },
       shipping: {
        type: Number,
        required: true,
        default: 0,
       },
       total: {
        type: Number,
        required: true,
        default: 0,
       },
    },
    {
        timestamps: true,
    }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;