import mongoose from "mongoose"

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
       subtotalPrice: {
        type: Number,
        required: true,
        default: 0,
       },
       taxPrice: {
        type: Number,
        required: true,
        default: 0,
       },
       shippingPrice: {
        type: Number,
        required: true,
        default: 0,
       },
       totalPrice: {
        type: Number,
        required: true,
        default: 0,
       },
    },
    {
        timestamps: true,
    }
)

const Order = mongoose.model("Order", orderSchema)

export default Order