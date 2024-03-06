// HomePage.js

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'; // Import the Footer component
import logo from '../assets/logo.png'; // Import the logo image
import '../styles/HomePage.css';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <div className="background-image">
                <img src={logo} alt="Logo" className="main-logo" />
                <h1 className="main-heading">Welcome to CIPL Audio Analysis Project</h1>
                <br />
                <br />
                <h2 className="sub-heading">Explore cutting-edge audio analysis capabilities</h2>
            </div>
            <div className="main-container">
                <p className="main-description">
                    <br />
                    <br />
                    The project involves Keyword Spotting (KWS), inspired by Google's model. Using an assorted dataset of isolated words, the model learns to discern and accurately identify specific predetermined words in novel audio samples.
                    <br />
                    <br />
                    We've also implemented a Speaker Verification System. Trained on an audio recording of a designated speaker, it acquires unique vocal characteristics. When presented with a new recording, the Speaker Verification System verifies whether the speaker aligns with the originally trained voice, effectively determining the speaker's identity. This dual-pronged approach showcases the project's nuanced capabilities in audio analysis, encompassing both keyword identification and speaker verification with a high degree of precision.
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
