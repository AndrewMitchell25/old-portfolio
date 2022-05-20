import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('portfolio_contact_serv', 'portfolio_contact_form', form.current, 'uOEIZCFc2iNCwUbis')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return(
        <div className="contact">
            <h1 className='contact-title'>Contact Me</h1>
            <div className="contact-text">
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li><input className="contact-form-boxes" type="text" name="user_name" placeholder="Name" required /></li>
                            <li><input className="contact-form-boxes" type="text" name="user_email" placeholder="Email" required /></li>
                            <li><input className="contact-form-boxes" type="text" name="subject" placeholder="Subject" required /></li>
                            <li><textarea className="contact-form-boxes" name="message" placeholder="Message" required /></li>
                            <li><input className="contact-form-boxes" type="submit" value="Send"/></li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    );
}