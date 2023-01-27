import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { saveShippingAddress } from "../Redux/Actions/CartActions"
import Navbar from './../Components/Navbar';

const ShippingScreen = () => {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart
    console.log(shippingAddress);

    const [formData, setFormData] = useState({
        address: shippingAddress.address,
        city: shippingAddress.city,
        postalCode: shippingAddress.postalCode,
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = e => {
        const {name, value} = e.target

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress(formData))
        navigate("/payment")
    }

    return (
        <>
            <Navbar/>
            <div className="shipping-container flex">
                <form className="shipping-form" onSubmit={handleSubmit}>
                    <h1>DELIVERY ADDRESS</h1>

                    <label>
                        Address:
                        <input 
                            type="text" 
                            name="address" 
                            value={formData.address} 
                            onChange={(e) => handleChange(e)}
                            required 
                        />
                    </label>
                    <label>
                        City:
                        <input 
                            type="text" 
                            name="city" 
                            value={formData.city} 
                            onChange={(e) => handleChange(e)}
                            required 
                        />
                    </label>
                    <label>
                        Postal Code:
                        <input 
                            type="text" 
                            name="postalCode" 
                            value={formData.postalCode} 
                            onChange={(e) => handleChange(e)}
                            maxLength="5"
                            required 
                        />
                    </label>
                    <button>CONTINUE</button>               
                </form>
            </div>
        </>
    )
}

export default ShippingScreen