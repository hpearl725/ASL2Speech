from fastapi import FastAPI
from fastapi import UploadFile

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Backend is running!"}

@app.post("/uploadfile/")
async def create_upload_file(file: UploadFile):
    return {"filename": file.filename}