import { calculateItemPrice,
    calculateCartSubtotal,
    calculateShippingPrice,
    calculateTaxPrice,
    calculateTotalOrderPrice 
   } from "./calculateProductPrices.js"
import Product from "../Models/ProductModel.js"

//verify total price with database prices
const verifyOrder = async (cartItems, totalPrice) => {
    try {
        let verifiedSubtotalPrice = 0
        // loop through order items and get each one from the database
        for (const item of cartItems) {
            const product = await Product.findById(item.product)
            const price = product.price

        // verify that the order quantity doesn't exceed the amount in stock
            if(item.qty > product.countInStock) {
                throw new Error("Not enough quantity")
            }
        
        // calculate the subtotal for each order item and add to the verified total accumulator
            const qty = item.qty
            const itemTotalPrice = calculateItemPrice(qty, price)
            verifiedSubtotalPrice += Number(itemTotalPrice)
        }

        const verifiedTaxPrice = calculateTaxPrice(verifiedSubtotalPrice)
        const verifiedShippingPrice = calculateShippingPrice(verifiedSubtotalPrice)
        const verifiedTotalPrice = calculateTotalOrderPrice(verifiedSubtotalPrice, verifiedShippingPrice, verifiedTaxPrice)
        console.log(totalPrice, verifiedTotalPrice)
        // checks if the order total matches the prices from the database to prevent client error or malpractice
        return Number(verifiedTotalPrice) === Number(totalPrice) ? true : false

    } catch (error) {
        console.log(error)
    }
}

export default verifyOrder