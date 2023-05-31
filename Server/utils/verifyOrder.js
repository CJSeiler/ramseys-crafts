import { 
    calculateItemSubtotal,
    calculateShipping,
    calculateTax,
    calculateTotal,
   } from "./calculateProductPrices.js";
import Product from "../Models/ProductModel.js";
import axios from "axios"

//verify total price with database prices
const verifyOrder = async (cartItems, total) => {
    let verifiedSubtotal = 0;

    // loop through order items and get each one from the database
    for (const item of cartItems) {
        const product = await Product.findById(item.product);
        const price = product.price;

        // verify that the order quantity doesn't exceed the amount in stock
        if(item.qty > product.countInStock) {
            throw new Error("Not enough quantity");
        }
        
        // calculate the subtotal for each order item and add to the verified total accumulator
        const qty = item.qty;
        const subtotal = calculateItemSubtotal(qty, price);
        verifiedSubtotal += Number(subtotal);
    }

    const verifiedTax = calculateTax(verifiedSubtotal);
    const verifiedShipping = calculateShipping(verifiedSubtotal);
    const verifiedTotal = calculateTotal(verifiedSubtotal, verifiedShipping, verifiedTax);
    // checks if the order total matches the prices from the database to prevent client error or malpractice
    return Number(verifiedTotal) === Number(total) ? true : false;
};

const verifyShippingAddress = async (shippingAddress) => {
    const url = `https://addressvalidation.googleapis.com/v1:validateAddress?key=${process.env.GOOGLE_API_KEY}`;

    const formattedAddress = {
        address: {
            regionCode: "US",
            locality: shippingAddress.city,
            addressLines: [shippingAddress.address, shippingAddress.apt]
        }
    };

    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
    };

    try {
        const { data } = await axios.post(url, JSON.stringify(formattedAddress), config);
        return data;
    } catch (error) {
        throw new Error("invalid address");
    }
};

export { verifyOrder, verifyShippingAddress }; 