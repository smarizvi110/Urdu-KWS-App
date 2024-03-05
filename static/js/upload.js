"use strict";
const uploadForm = document.getElementById('uploadForm');
const audioFileInput = document.getElementById('audioFile');
const keywordsDiv = document.getElementById('keywords');
uploadForm.onsubmit = async (e) => {
    e.preventDefault();
    if (!audioFileInput.files || audioFileInput.files.length === 0) {
        console.error("No file selected.");
        return;
    }
    const formData = new FormData();
    formData.append('file', audioFileInput.files[0]);
    try {
        const response = await fetch('http://127.0.0.1:5000/spot-keywords', {
            method: 'POST',
            body: formData,
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        keywordsDiv.textContent = 'Keyword: ' + data.keywords;
    }
    catch (error) {
        console.error('Error uploading file:', error);
    }
};
