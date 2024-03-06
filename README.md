# Urdu Keyword Spotting Application

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets\images\CSaLT@LUMS_Logo_Dark.png">
  <source media="(prefers-color-scheme: light)" srcset="assets\images\CSaLT@LUMS_Logo_Light.png">
  <img alt="CSaLT@LUMS Logo">
</picture>

<p align="center">
A project of <a href = "https://www.c-salt.org/">CSaLT</a>.
</p>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites


- [Node.js](https://nodejs.org/en/download/)
- [Python](https://www.python.org/downloads/)
- A package manager like [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/lang/en/docs/install/)

### Installation

#### Setting up the Backend

Navigate to the backend directory and create a virtual environment:

```zsh
cd backend
python3 -m venv venv
```

Activate the virtual environment:

- On Windows:

  ```zsh
  venv\Scripts\activate
  ```

- On MacOS/Linux:

  ```zsh
  source venv/bin/activate
  ```

Install the required Python packages:

```zsh
pip install -r requirements.txt
```

Run the FastAPI server:

```zsh
uvicorn server:app --reload
```

The FastAPI server will start, typically on `http://localhost:8000`.

#### Setting up the Frontend

Navigate to the frontend directory:

```zsh
cd frontend
```

Install the required npm packages:

```zsh
npm install
```

Start the React development server:

```zsh
npm start
```

The React app should now be running on `http://localhost:3000`.

<!-- ## Usage

Describe how to use your application, including how to upload files and perform keyword spotting. Provide examples of how to navigate the app, any login information needed, and where users can expect to find the results of their actions.

### Uploading Files

Explain the process for uploading files through the React app. Include any specific requirements for the file types, sizes, or formats supported.

### Performing Keyword Spotting

Detail how users can perform keyword spotting, including any specific pages or components they should use, how to select or input keywords, and how they will receive or view the results.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc -->
