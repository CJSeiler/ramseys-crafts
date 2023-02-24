import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import emailjs from "@emailjs/browser";

const ContactScreen = () => {
    const captchaRef = useRef(null);
    const form = useRef(null);

    const [contactForm, setContactForm] = useState({
        from_name: "",
        email_id: "",
        message: ""
    });

    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const target = e.target;
        const { name, value } = target;
        
        setContactForm(prevForm => {
            return {
                ...prevForm,
                [name]: value
            };
        });
    };

    const sendEmail = () => {
        emailjs.sendForm(
            process.env.REACT_APP_EMAIL_SERVICE_ID,
            process.env.REACT_APP_EMAIL_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAIL_PUBLIC_KEY
            )
            .then((response) => {
                return;
            }, (error) => {
                setErrorMessage(error.response.data.message);
            });
        };
        
    const handleSubmit = async (e) =>{
        e.preventDefault();

        const token = captchaRef.current.getValue();
        captchaRef.current.reset();

        try {
            const response = await axios.post("/api/contact/verify-token", { token });
            if (response.status === 200) {
                sendEmail();
            }
        } catch (error) {
            setErrorMessage(e.response.data.message);
        }   
    }

    return (
        <div className="contact-container">
            <div className="contact-image">
                <h1>CONTACT</h1>
            </div>

            <div className="contact-bottom">
                <div className="contact-map">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56365.58588564635!2d-82.60796461582365!3d27.99851225557447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2ea1c17534867%3A0x1ffcff0c10a1dfe5!2sTown%20&#39;N&#39;%20Country%2C%20FL!5e0!3m2!1sen!2sus!4v1671168235374!5m2!1sen!2sus" 
                        title="Ramsey's Craft Store" 
                        width="600" 
                        height="300" 
                        allowFullScreen={true} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade" 
                        aria-hidden="true">
                    </iframe>
                    <a className="sr-only" href="https://goo.gl/maps/omEQPbkK6SmxbcSw5">Link to store location in google maps</a>
                </div>

                <form className="contact-form" onSubmit={handleSubmit} ref={form}>
                    <p className="contact-form__heading">Send us a message!</p>
                    {errorMessage && <p className="alert">{errorMessage}</p>}

                    <div className="contact-form__group">
                        <label htmlFor="from_name">Name: </label>
                        <input 
                            id="from_name" 
                            type="text" 
                            name="from_name" 
                            value={contactForm.from_name} 
                            onChange={(e)=> handleChange(e)}
                            placeholder="John Doe"
                            required
                        />
                    </div>

                    <div className="contact-form__group">
                        <label htmlFor="email_id">Email: </label>
                        <input 
                            id="email_id" 
                            type="email" 
                            name="email_id" 
                            value={contactForm.email_id} 
                            onChange={(e)=> handleChange(e)}
                            placeholder="example@example.com"
                            required
                        />
                    </div>

                    <div className="contact-form__group">
                        <label htmlFor="message">Message: </label>
                        <textarea 
                            id="message" 
                            name="message" 
                            value={contactForm.message} 
                            onChange={(e)=> handleChange(e)}
                            placeholder="What would you like to say?"
                            required
                        >
                        </textarea>
                    </div>
                    
                    <ReCAPTCHA
                        className="contact-form__recaptcha"
                        sitekey={process.env.REACT_APP_SITE_KEY} 
                        ref={captchaRef}
                    />

                    <button type="submit">SUBMIT</button>
                </form>

            </div>
        </div>
    );
};

export default ContactScreen;