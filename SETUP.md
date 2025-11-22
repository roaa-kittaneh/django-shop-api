# Setup Instructions

## Initial Setup Steps

### 1. Create Environment Files

Since `.env` files are in `.gitignore`, you need to create them manually:

**Root `.env` file** (create in project root):
```
BACKEND_PORT=8000
BACKEND_URL=http://localhost:8000
FRONTEND_PORT=5173
FRONTEND_URL=http://localhost:5173
API_URL=http://localhost:8000/api/
```

**Frontend `.env` file** (create in `frontend/` directory):
```
VITE_API_URL=http://localhost:8000/api/
```

### 2. Move Database (if exists)

If you have an existing `db.sqlite3` file in the old `shopapi/` directory, move it to:
```
backend/shopapi/db.sqlite3
```

### 3. Install Frontend Dependencies

Navigate to the frontend directory and install npm packages:
```bash
cd frontend
npm install
cd ..
```

### 4. Create Backend Virtual Environment

Navigate to the backend directory and create a virtual environment:
```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# Linux/Mac
source venv/bin/activate
```

### 5. Install Backend Dependencies

```bash
pip install -r requirements.txt
```

### 6. Run Migrations

```bash
cd shopapi
python manage.py migrate
cd ../..
```

## Running the Project

### Option 1: Using Startup Scripts

**Windows:**
```bash
start.bat
```

**Linux/Mac:**
```bash
chmod +x start.sh
./start.sh
```

### Option 2: Manual Start

**Terminal 1 - Backend:**
```bash
cd backend
venv\Scripts\activate  # Windows
# or
source venv/bin/activate  # Linux/Mac

cd shopapi
python manage.py runserver 8000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

## Access Points

- Frontend: http://localhost:5173
- Backend API: http://localhost:8000/api/
- Django Admin: http://localhost:8000/admin/

## Troubleshooting

### Backend won't start
- Make sure virtual environment is activated
- Check if port 8000 is available
- Run migrations: `python shopapi/manage.py migrate`

### Frontend won't start
- Make sure `node_modules` exists (run `npm install`)
- Check if port 5173 is available
- Verify `frontend/.env` file exists with `VITE_API_URL`

### CORS errors
- Ensure backend is running on port 8000
- Check `backend/shopapi/shopapi/settings.py` has CORS configuration
- Verify frontend is running on port 5173

