from fastapi import FastAPI, UploadFile, HTTPException, File
from fastapi.responses import FileResponse
import shutil
import os
from pathlib import Path
import uuid
import time

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow requests from your frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Replace with your frontend domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create uploads directory if it doesn't exist
UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)

@app.get("/")
def read_root():
    return {"message": "Backend is running!"}

@app.post("/uploadfile/")
async def create_upload_file(file: UploadFile = File(...)):  # Use File(...)
    # Validate file type
    if not file.content_type or not file.content_type.startswith('video/'):
        raise HTTPException(status_code=400, detail="File must be a video")
    
    # Generate unique filename
    file_extension = Path(file.filename).suffix
    unique_filename = f"{uuid.uuid4()}{file_extension}"
    file_path = UPLOAD_DIR / unique_filename
    
    try:
        # Save uploaded file
        with file_path.open("wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
            
        # Process video here
        time.sleep(1)
        time.sleep(1)
        time.sleep(1)
        time.sleep(1)
        
        # TODO: Add video processing logic
        # For now, let's assume the processed video is saved as 'processed_' + unique_filename
        processed_filename = f"processed_{unique_filename}"
        processed_file_path = UPLOAD_DIR / processed_filename

        # Simulate processing by copying the original file
        shutil.copyfile(file_path, processed_file_path)

        return {
            "status": "success",
            "message": "Video uploaded and processed successfully",
            "filename": processed_filename,
            "file_path": str(processed_file_path),
            "file_size": os.path.getsize(processed_file_path),
            "content_type": file.content_type
        }
        
    except Exception as e:
        # Clean up on error
        if file_path.exists():
            file_path.unlink()
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/video/{filename}")
async def get_video(filename: str):
    file_path = UPLOAD_DIR / filename
    if not file_path.exists():
        raise HTTPException(status_code=404, detail="Video not found")
    return FileResponse(str(file_path))
