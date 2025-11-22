@echo off
echo Starting Shop API Project...
echo.

REM Check if virtual environment exists
if not exist "backend\venv" (
    echo Creating virtual environment...
    cd backend
    python -m venv venv
    cd ..
)

REM Start backend in a new window
echo Starting Django backend on port 8000...
cd backend
call venv\Scripts\activate.bat

REM Install dependencies if needed
if not exist "venv\.dependencies_installed" (
    echo Installing backend dependencies...
    pip install -r requirements.txt
    echo. > venv\.dependencies_installed
)

REM Run migrations
python shopapi\manage.py migrate --noinput

REM Start Django server in new window
start "Django Backend" cmd /k "venv\Scripts\activate.bat && python shopapi\manage.py runserver 8000"
cd ..

REM Wait a moment for backend to start
timeout /t 2 /nobreak >nul

REM Check if frontend node_modules exists
if not exist "frontend\node_modules" (
    echo Installing frontend dependencies...
    cd frontend
    call npm install
    cd ..
)

REM Start React frontend in new window
echo Starting React frontend on port 5173...
cd frontend
start "React Frontend" cmd /k "npm run dev"
cd ..

echo.
echo Backend running on http://localhost:8000
echo Frontend running on http://localhost:5173
echo.
echo Both servers are running in separate windows.
echo Close the windows to stop the servers.
echo.
pause

