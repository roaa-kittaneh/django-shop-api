# Troubleshooting: "Failed to fetch" Error

## Problem
The React frontend shows "Error Loading Products - Failed to fetch" when trying to connect to the backend.

## Solutions

### Solution 1: Restart Both Servers

**Important:** After changing CORS settings or .env files, you MUST restart both servers:

1. **Stop both servers** (Close the command windows or press Ctrl+C)

2. **Restart the backend:**
   ```bash
   cd backend
   venv\Scripts\activate
   cd shopapi
   python manage.py runserver 8000
   ```

3. **Restart the frontend** (in a new terminal):
   ```bash
   cd frontend
   npm run dev
   ```

### Solution 2: Verify Backend is Running

1. Open your browser and go to: **http://localhost:8000/api/products/**
   - You should see JSON data (even if it's an empty array `[]`)
   - If you see an error, the backend is not running correctly

2. Also try: **http://127.0.0.1:8000/api/products/**
   - Both should work

### Solution 3: Check Browser Console

1. Open the React app: http://localhost:5173
2. Press `F12` to open Developer Tools
3. Go to the **Console** tab
4. Look for error messages - they will tell you exactly what's wrong
5. Check the **Network** tab to see if the API request is being made

### Solution 4: Verify .env File

Make sure `frontend/.env` exists and contains:
```
VITE_API_URL=http://localhost:8000/api/
```

**Important:** After creating or modifying `.env`, you MUST restart the Vite dev server!

### Solution 5: Test API Directly

Test if the API works by opening these URLs in your browser:

- http://localhost:8000/api/products/
- http://127.0.0.1:8000/api/products/

Both should return JSON. If they don't, the backend has an issue.

### Solution 6: Check CORS Settings

The backend settings have been updated to allow all origins in development. Make sure you've restarted the Django server after the change.

### Solution 7: Use 127.0.0.1 Instead of localhost

If `localhost` doesn't work, try updating `frontend/.env`:
```
VITE_API_URL=http://127.0.0.1:8000/api/
```

Then restart the frontend server.

### Solution 8: Check Firewall/Antivirus

Sometimes Windows Firewall or antivirus software blocks connections. Try:
- Temporarily disabling firewall
- Adding exceptions for Python and Node.js

## Quick Diagnostic Steps

1. ✅ Is backend running? → Check http://localhost:8000/api/products/
2. ✅ Is frontend running? → Check http://localhost:5173
3. ✅ Check browser console (F12) for errors
4. ✅ Verify .env file exists in frontend/
5. ✅ Restart both servers after any changes

## Common Error Messages

- **"Failed to fetch"** → Backend not running or CORS issue
- **"NetworkError"** → Connection refused, backend not accessible
- **"404 Not Found"** → Wrong API URL in .env file
- **"CORS policy"** → CORS not configured correctly

