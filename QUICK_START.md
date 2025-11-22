# 🚀 Quick Start Guide

## Step-by-Step Instructions to Run the Project

### Method 1: Using the Startup Script (Easiest - Recommended)

**For Windows:**

1. Double-click `start.bat` or run in PowerShell:
   ```bash
   .\start.bat
   ```

2. The script will:
   - Create virtual environment (if needed)
   - Install all dependencies
   - Run database migrations
   - Open two separate windows:
     - **Window 1**: Django backend server
     - **Window 2**: React frontend server

3. Wait for both servers to start (you'll see messages in both windows)

4. Open your browser and go to:
   - **Frontend (React App)**: http://localhost:5173
   - **Backend API**: http://localhost:8000/api/products/
   - **Django Admin**: http://localhost:8000/admin/

### Method 2: Manual Setup (If you prefer step-by-step control)

#### Step 1: Setup Backend

1. Open PowerShell or Command Prompt

2. Navigate to backend folder:
   ```bash
   cd backend
   ```

3. Create virtual environment:
   ```bash
   python -m venv venv
   ```

4. Activate virtual environment:
   ```bash
   venv\Scripts\activate
   ```

5. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

6. Navigate to shopapi folder:
   ```bash
   cd shopapi
   ```

7. Run migrations:
   ```bash
   python manage.py migrate
   ```

8. Start Django server:
   ```bash
   python manage.py runserver 8000
   ```

   You should see: `Starting development server at http://127.0.0.1:8000/`

#### Step 2: Setup Frontend (Open a NEW terminal window)

1. Navigate to frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies (first time only):
   ```bash
   npm install
   ```

3. Start React development server:
   ```bash
   npm run dev
   ```

   You should see: `Local: http://localhost:5173/`

#### Step 3: View the Application

1. Open your web browser
2. Go to: **http://localhost:5173**
3. You should see the Product Catalog page

## 📍 Access Points

- **Frontend (React App)**: http://localhost:5173
- **Backend API**: http://localhost:8000/api/products/
- **Django Admin Panel**: http://localhost:8000/admin/

## 🧪 Testing the API

You can test the API directly in your browser or using curl:

**Get all products:**
```
http://localhost:8000/api/products/
```

**Using PowerShell (curl):**
```powershell
curl http://localhost:8000/api/products/
```

## 🛑 Stopping the Servers

- **If using start.bat**: Close both command windows
- **If running manually**: Press `Ctrl+C` in each terminal window

## ⚠️ Troubleshooting

### Port Already in Use

If you see "port already in use" errors:

**Backend (port 8000):**
- Find and close the process using port 8000
- Or change port in `start.bat` line 29: `runserver 8001`

**Frontend (port 5173):**
- Vite will automatically use the next available port (5174, 5175, etc.)

### Module Not Found Errors

**Backend:**
- Make sure virtual environment is activated
- Reinstall: `pip install -r requirements.txt`

**Frontend:**
- Make sure you're in the `frontend` folder
- Run: `npm install`

### Database Errors

If you see database-related errors:
```bash
cd backend\shopapi
python manage.py migrate
```

### CORS Errors

If the frontend can't connect to the backend:
- Make sure backend is running on port 8000
- Check that `backend/shopapi/shopapi/settings.py` has CORS configuration
- Verify frontend `.env` file has: `VITE_API_URL=http://localhost:8000/api/`

## 📝 Creating Sample Data

To add products to test the application:

1. Go to Django Admin: http://localhost:8000/admin/
2. Create a superuser first:
   ```bash
   cd backend\shopapi
   python manage.py createsuperuser
   ```
3. Login and add products through the admin panel

Or use the API directly (using PowerShell):
```powershell
curl -X POST http://localhost:8000/api/products/ `
  -H "Content-Type: application/json" `
  -d '{\"name\":\"Test Product\",\"description\":\"Test Description\",\"price\":\"29.99\",\"quantity\":10}'
```

