export default function Contact() {
    return(
        <div>
            <div className="contact">
                <div className="contact-text">
                    <h1>Contact Me</h1>
                    <div className="contact-form">
                        <form>
                            <ul>
                                <li><input className="contact-form-boxes" type="text" name="name" placeholder="Name" required /></li>
                                <li><input className="contact-form-boxes" type="text" name="email" placeholder="Email" required /></li>
                                <li><input className="contact-form-boxes" type="text" name="subject" placeholder="Subject" required /></li>
                                <li><textarea className="contact-form-boxes" name="message" placeholder="Message" required /></li>
                                <li><input className="contact-form-boxes" type="submit" value="Send"/></li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}