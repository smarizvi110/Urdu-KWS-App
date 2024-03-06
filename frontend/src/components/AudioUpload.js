import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import '../styles/AudioUpload.css';

const AudioUpload = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];

        if (file && !isLoading) {
            const formData = new FormData();
            formData.append('audio', file);

            try {
                setIsLoading(true);
                setShowPopup(true);

                const response = await axios.post('http://127.0.0.1:8000/predict/', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                console.log(response.data);

                if (response.data && response.data.message === 'Audio received successfully!' && response.data.result && response.data.result.prediction === 'some_result') {
                    navigate('/contact-us');
                }

            } catch (error) {
                console.error('Error making prediction request:', error);
            } finally {
                setIsLoading(false);
                setShowPopup(false);
            }
        }
    };

    return (
        <div>
            <Navbar />
            <div className="upload-container">
                <h1>Upload Audio</h1>
                <div className="file-input-container">
                    <input type="file" accept="audio/*" onChange={handleFileUpload} />
                </div>
                <button
                    style={{ padding: '10px', marginTop: '20px', color: 'white' }}
                    className="btn btn-primary"
                    disabled={isLoading}
                >
                    {isLoading ? 'Uploading...' : 'Upload Audio'}
                </button>

                {showPopup && (
                    <div className="loading-popup">
                        <p>Loading...</p>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default AudioUpload;
