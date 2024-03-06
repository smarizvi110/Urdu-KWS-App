# Urdu Keyword Spotting Flask Application

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets\images\CSaLT@LUMS_Logo_Dark.png">
  <source media="(prefers-color-scheme: light)" srcset="assets\images\CSaLT@LUMS_Logo_Light.png">
  <img alt="CSaLT@LUMS Logo">
</picture>

A project of [CSaLT](https://www.c-salt.org/).

## Introduction

This project is a simple web application for keyword spotting in audio files. It uses a Flask server in the backend to process audio files and identify keywords. The frontend allows users to upload audio files and view the spotted keywords.

## Setup

### Prerequisites

- Python 3.6 or higher
- npm and Node.js (optional, for editing and compiling TypeScript)

### Installation

1. **Clone the repository**

    ```zsh
    git clone https://github.com/smarizvi110/Urdu-KWS-Flask-App
    cd Urdu-KWS-Flask-App
    ```

2. **Set up the TypeScript compiler (optional)**
    - If you wish to edit the TypeScript file (`upload.ts`), you will also need to recompile it to to JavaScript:

        ```zsh
        npm install -g typescript
        tsc
        ```

3. **Create and activate a virtual environment**
    - For Unix/macOS:
  
        ```zsh
        python3 -m venv venv
        source venv/bin/activate
        ```

    - For Windows:
  
        ```zsh
        python -m venv venv
        .\venv\Scripts\activate
        ```

4. **Install Python dependencies**

    ```zsh
    pip install -r requirements.txt
    ```

### Running the Application

1. **Start the Flask server**
    - Make sure your virtual environment is activated.
    - Run the Flask application:

        ```zsh
        python app.py
        ```

    - The server will start on `http://127.0.0.1:5000/`. Keep it running while you use the application.

2. **Open the Web Interface**
    - Navigate to the URL where the Flask app is hosted.
    - Use the interface to upload audio files and spot keywords.

## Project Structure

- `/static`: Contains static files like CSS and JS.
- `/templates`: Contains the HTML template.
- `/uploads`: Temporary storage for uploaded audio files.
- `app.py`: The Flask application.
- `requirements.txt`: Python dependencies for the project.
- `upload.ts`: TypeScript file for handling file uploads (compiled to `upload.js`).
- `upload.js`: JavaScript file compiled from the TypeScript file.
- `index.html`: The main HTML file for the web interface.
- `style.css`: CSS file for styling the web interface.
- `tsconfig.json`: JSON file for configuring the TypeScript compiler.
