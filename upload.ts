const uploadForm = document.getElementById('uploadForm') as HTMLFormElement;
const audioFileInput = document.getElementById('audioFile') as HTMLInputElement;
const keywordsDiv = document.getElementById('keywords') as HTMLDivElement;

uploadForm.onsubmit = async (e: Event) => {
    e.preventDefault();

    if (!audioFileInput.files || audioFileInput.files.length === 0) {
        console.error("No file selected.");
        return;
    }

    const formData = new FormData();
    formData.append('file', audioFileInput.files[0]);

    try {
        const response = await fetch('http://127.0.0.1:5000/spot-keyword', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        keywordsDiv.textContent = 'Keyword: ' + data.keywords;
    } catch (error) {
        console.error('Error uploading file:', error);
    }
};
