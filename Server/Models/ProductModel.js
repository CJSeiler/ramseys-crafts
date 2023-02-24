import mongoose from "mongoose"

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        image: {
            type: String,
            require: true,
        },
        description: {
            type: String,
            require: true,
        },
        price: {
            type: Number,
            require: true,
            default: 0
        },
        countInStock: {
            type: Number,
            require: true,
            default: 0,
        },
        category: {
            type: String,
            require: true,
        }
    }
)

const Product = mongoose.model("Product", productSchema)

export default Product