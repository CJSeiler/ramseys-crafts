import { useState } from "react"
import Navbar from "../Components/Navbar"



export default function Contact() {
    const [contactForm, setContactForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "What would you like to say?"
    })

    const handleChange = (e) => {
        const target = e.target
        const {name, value} = target

        setContactForm(prevForm => {
            return {
                ...prevForm,
                [name]: value
            }
        })
    }

    console.log(contactForm);

    return (
        <div>
            <Navbar />
            <div className="contact-container">
                <div className="contact-image">Big Image</div>
                <form className="contact-form flex">
                    <p className="contact-form-heading">Say Hello!</p>
                    <div className="contact-form-group flex">
                        <label htmlFor="firstName">First name: </label>
                        <input id="firstName" type="text" name="firstName" value={contactForm.firstName} onChange={(e)=> handleChange(e)}/>
                    </div>

                    <div className="contact-form-group flex">
                        <label htmlFor="lastName">Last name: </label>
                        <input id="lastName" type="text" name="lastName" value={contactForm.lastName} onChange={(e)=> handleChange(e)}/>
                    </div>

                    <div className="contact-form-group flex">
                        <label htmlFor="email">Email: </label>
                        <input id="email" type="email" name="email" value={contactForm.email} onChange={(e)=> handleChange(e)}/>
                    </div>

                    <div className="contact-form-group flex">
                        <label htmlFor="message">Message: </label>
                        <textarea id="message" name="message" value={contactForm.message} onChange={(e)=> handleChange(e)}></textarea>
                    </div>
                </form>
                <div className="contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56365.58588564635!2d-82.60796461582365!3d27.99851225557447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2ea1c17534867%3A0x1ffcff0c10a1dfe5!2sTown%20&#39;N&#39;%20Country%2C%20FL!5e0!3m2!1sen!2sus!4v1671168235374!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="contact-details">Contact details</div>
            </div>
        </div>
    )
}