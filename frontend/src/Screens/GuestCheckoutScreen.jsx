import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { saveGuestInfo } from "../Redux/Actions/CartActions"
import Navbar from "../Components/Navbar"

const GuestCheckoutScreen = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    })

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (userInfo) {
            navigate("/")
        }
    }, [navigate, userInfo])

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
        // dispatch guest info to redux state to store guest name info
        dispatch(saveGuestInfo(formData))
        navigate("/placeorder")
    }

    return (
        <>
            <Navbar />
            <div className="login-container flex">
                <form className="flex" onSubmit={(e) => handleSubmit(e)}>
                    <h1>Guest Checkout</h1>
                    <label htmlFor="name">
                        Name:
                        <input
                            id="name" 
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            onChange={(e) => handleChange(e)}
                            required 
                        />
                    </label>

                    <label htmlFor="email">
                        Email
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={(e) => handleChange(e)}
                            required 
                        />
                    </label>
                    
                    <button>CONTINUE</button>
                </form>
            </div>
        </>
    )
}

export default GuestCheckoutScreen