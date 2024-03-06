// src/App.jsx

import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AudioUpload from './components/AudioUpload';
import ContactUs from './components/ContactUs';
import KWS from './components/KWS';
import { SpeakerVerification } from './components/SpeakerVerification';

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/speaker-verification" element={<SpeakerVerification />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/kws" element={<KWS />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
