from fastapi import FastAPI, Form, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import Annotated
import tensorflow as tf

app = FastAPI()

# CORS middleware to allow cross-origin requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this based on your requirements
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Load your TensorFlow model
# model = tf.saved_model.load("path/to/your/saved_model")

# Placeholder function for handling form submissions


async def handle_form_submission(name: str, email: str, message: str):
    # You can implement your logic to handle the form data here
    # For now, just print the form data
    print(f"Received form data: Name={name}, Email={email}, Message={message}")
    # Placeholder response
    return {"message": "Form submitted successfully!"}


@app.post("/predict/")
async def predict_audio(audio: UploadFile = File(...)):
    # Process the audio using your model
    # You may need to adapt this based on your actual model input processing
    # ...

    try:
        # Check if the uploaded file is a .wav file
        if not audio.filename.lower().endswith(".wav"):
            return {"error": "Invalid file format. Please upload a .wav file."}

        # Placeholder result
        result = {"prediction": "some_result"}
        
        # Return a response indicating that the audio has been received
        print(f"Received audio: " + audio.filename)
        response = {"message": "Audio received successfully!", "result": result}

        # Optionally, you can start processing the audio asynchronously
        # and return a response indicating that the audio is being processed
        # Uncomment the following lines if you want to enable asynchronous processing
        # import asyncio
        # asyncio.create_task(process_audio(audio.filename))
        # response = {"message": "Audio received successfully! Processing..."}

        return response

    except Exception as e:
        return {"error": f"Error processing file: {str(e)}"}


# New endpoint to handle form submissions
@app.post("/contact/")
# async def contact_form_submission(
#     name: str = Form(...),
#     email: str = Form(...),
#     message: str = Form(...),
# ):
async def contact_form_submission(name: Annotated[str, Form(...)], email: Annotated[str, Form(...)], message: Annotated[str, Form(...)]):
    try:
        print(name, email, message)
        # Custom validation logic (replace with your own validation rules)
        if not name or not email or not message:
            raise HTTPException(
                status_code=422, detail="All fields are required.")

        # Call the function to handle the form submission
        response = await handle_form_submission(name, email, message)
        return response
    except HTTPException as e:
        # Catch and re-raise HTTPException to return custom error response
        raise e
    except Exception as e:
        return {"error": f"Error processing form submission: {str(e)}"}
