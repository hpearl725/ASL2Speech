# 1. Clone the repository
git clone https://github.com/yourusername/echo.git && cd echo

# 2. Install frontend dependencies
cd frontend && npm install

# 3. Install backend dependencies
cd ../backend && pip install -r requirements.txt

# 4. Create the uploads directory
mkdir uploads

# 5. Start the backend server
uvicorn main:app --reload
# Backend runs at: http://localhost:8000

# 6. Start the frontend server
cd ../frontend
npm run dev
# Frontend runs at: http://localhost:3000

# 7. Open your browser and navigate to:
# http://localhost:3000/upload
