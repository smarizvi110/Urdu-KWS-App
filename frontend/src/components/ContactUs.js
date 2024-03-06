// ContactUs.js

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactUsForm from './ContactUsForm'; // Import the ContactUsForm component
import '../styles/ContactUs.css';

const ContactUs = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <h2>Contact Us</h2>
                <p>
                    Feel free to get in touch with us! You can reach out via the contact
                    form or visit our office.
                </p>
                {/* Render the ContactUsForm component */}
                <ContactUsForm />
            </div>
            <Footer />
        </div>
    );
};

export default ContactUs;
