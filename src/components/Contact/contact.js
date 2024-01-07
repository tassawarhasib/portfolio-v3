import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


import './contact.css';

// ! Images Import
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YouTubeIcon from '../../assets/youtube.png';
import IntagramIcon from '../../assets/instagram.png';

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_EmailJS_SERVICE_ID, process.env.REACT_APP_EmailJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EmailJS_PUBLIC_KEY)
            .then((result) => {
                //   console.log(result.text);
                e.target.reset();
                alert('Email Sent');
            }, (error) => {
                console.log(error.text);
                alert('Oops!!! Something went wrong.');
            });
    };

    return (
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clinetDesc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim nulla atque nostrum sed fuga ipsam fugiat architecto tempore deleniti sunt?
                </p>
                <div className="clientImgs">
                    <img src={Walmart} alt="Client" className="clientImg" />
                    <img src={Adobe} alt="Client" className="clientImg" />
                    <img src={Microsoft} alt="Client" className="clientImg" />
                    <img src={Facebook} alt="Client" className="clientImg" />
                </div>
            </div>

            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>

                <form ref={form} onSubmit={sendEmail} className="contactForm">
                    <input type="text" name="user_name" className="name" placeholder='Your Name' />
                    <input type="email" name="user_email" className="email" placeholder='Your Email' />
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                    <button type='submit' value='send' className="submitBtn">Submit</button>
                    <div className="links">
                        <img className="link" src={FacebookIcon} alt="Facebook" />
                        <img className="link" src={TwitterIcon} alt="Twitter" />
                        <img className="link" src={YouTubeIcon} alt="Youtube" />
                        <img className="link" src={IntagramIcon} alt="Instagram" />
                    </div>
                </form>

            </div>
        </section>
    );
}

export default Contact;
