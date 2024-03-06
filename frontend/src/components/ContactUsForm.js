// ContactUsForm.js

import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ContactUsForm.css';

const ContactUsForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Convert form data to URL-encoded format
            const urlEncodedData = new URLSearchParams(formData).toString();

            // Make a POST request to your backend endpoint with URL-encoded data
            const response = await axios.post('http://127.0.0.1:8000/contact/', urlEncodedData, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            // Handle the response as needed
            console.log('Response from backend:', response.data);
        } catch (error) {
            // Handle errors
            if (error.response) {
                // The request was made and the server responded with a status code
                console.error('Server responded with an error:', error.response.data);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received from the server:', error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error setting up the request:', error.message);
            }
        }
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <label htmlFor="message">Message:</label>
            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
            ></textarea>

            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactUsForm;
