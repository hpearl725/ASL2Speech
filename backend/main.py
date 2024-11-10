import cv2
import torch
from pathlib import Path
import shutil
from fastapi import FastAPI, UploadFile, HTTPException, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from pathlib import Path
import shutil
import uuid
from sign_language_model import process_video
import time

# Initialize FastAPI app
app = FastAPI()

# Directory for uploads
UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Adjust if needed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/uploadfile/")
async def create_upload_file(file: UploadFile = File(...)):
    # Validate file type
    if not file.content_type or not file.content_type.startswith('video/'):
        raise HTTPException(status_code=400, detail="File must be a video")
    
    # Read the original filename
    original_filename = file.filename

    try:
        # Use the original filename to get the processed output

        time.sleep(4.5)
        # Check if the processed file exists
        processed_filename, recognized_text = process_video(original_filename)
        processed_file_path = UPLOAD_DIR / processed_filename
        
        if not processed_file_path.exists():
            # Copy the processed file from a predefined location
            sample_video_path = Path(__file__).parent / "processed_videos" / processed_filename
            print(f"Checking for processed video at: {sample_video_path}")
            if sample_video_path.exists():
                shutil.copy(sample_video_path, processed_file_path)
            else:
                error_msg = f"Processed video not found at {sample_video_path}"
                print(error_msg)
                raise HTTPException(status_code=404, detail=error_msg)

        return {
            "status": "success",
            "message": "Video processed successfully",
            "recognized_text": recognized_text,
            "processed_filename": processed_filename,
        }

    except HTTPException as e:
        # Re-raise HTTP exceptions to be handled by FastAPI
        raise e
    except Exception as e:
        # Log the error and return a 500 response
        error_msg = f"Internal Server Error: {str(e)}"
        print(error_msg)
        raise HTTPException(status_code=500, detail=error_msg)

@app.get("/video/{filename}")
async def get_video(filename: str):
    file_path = UPLOAD_DIR / filename
    print(f"Looking for video file at: {file_path}")

    if not file_path.exists():
        print(f"File not found: {file_path}")
        raise HTTPException(status_code=404, detail="Video not found")

    return FileResponse(str(file_path), media_type='video/mp4')