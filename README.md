# Shop API Project

A full-stack e-commerce application with Django REST Framework backend and React frontend.

## 🚀 Features

- **Backend**: Django REST Framework API for product management
- **Frontend**: Modern React application with Vite
- **Database**: SQLite (easy setup, no configuration needed)
- **CORS**: Configured for seamless frontend-backend communication

## 📁 Project Structure

```
/
├── backend/              # Django + DRF backend
│   ├── shopapi/         # Django project
│   ├── venv/            # Python virtual environment
│   └── requirements.txt # Python dependencies
├── frontend/            # React + Vite frontend
│   ├── src/            # React source code
│   ├── node_modules/   # Node dependencies
│   └── package.json    # Node dependencies
├── .env                # Environment variables
├── start.sh            # Startup script (Linux/Mac)
├── start.bat           # Startup script (Windows)
└── README.md           # This file
```

## 🛠️ Tech Stack

### Backend
- Django 5.2.8
- Django REST Framework 3.15.2
- django-cors-headers 4.3.1
- SQLite

### Frontend
- React 18
- Vite 5
- Modern ES6+ JavaScript

## 🚀 Quick Start

### Option 1: Using Startup Scripts (Recommended)

**Windows:**
```bash
start.bat
```

**Linux/Mac:**
```bash
chmod +x start.sh
./start.sh
```

The scripts will:
- Create virtual environment if it doesn't exist
- Install all dependencies
- Run database migrations
- Start both backend (port 8000) and frontend (port 5173)

### Option 2: Manual Setup

#### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Create and activate virtual environment:
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Linux/Mac
python3 -m venv venv
source venv/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run migrations:
```bash
cd shopapi
python manage.py migrate
```

5. Start backend server:
```bash
python manage.py runserver 8000
```

#### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

## 🌐 Access Points

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8000/api/
- **Django Admin**: http://localhost:8000/admin/

## 📡 API Endpoints

- `GET /api/products/` - List all products
- `POST /api/products/` - Create a new product
- `GET /api/products/{id}/` - Get product details
- `PUT /api/products/{id}/` - Update a product
- `DELETE /api/products/{id}/` - Delete a product

## 🔧 Configuration

### Environment Variables

**Root `.env` file:**
```
BACKEND_PORT=8000
FRONTEND_PORT=5173
API_URL=http://localhost:8000/api/
```

**Frontend `.env` file:**
```
VITE_API_URL=http://localhost:8000/api/
```

## 📝 Development

### Backend Development

- Backend runs on port **8000**
- CORS is enabled for `http://localhost:5173`
- Database migrations: `python shopapi/manage.py migrate`
- Create superuser: `python shopapi/manage.py createsuperuser`

### Frontend Development

- Frontend runs on port **5173**
- Hot module replacement enabled
- API calls are made to the backend using the `VITE_API_URL` environment variable

## 📦 Dependencies

### Backend
- Django==5.2.8
- djangorestframework==3.15.2
- django-cors-headers==4.3.1

### Frontend
- react ^18.2.0
- react-dom ^18.2.0
- vite ^5.0.8

## 🗄️ Database

The project uses SQLite by default. The database file is located at:
```
backend/shopapi/db.sqlite3
```

## 📚 Additional Documentation

- [Backend README](backend/README.md) - Detailed backend setup and API documentation
- [Frontend README](frontend/README.md) - Frontend development guide

## 🐛 Troubleshooting

### Backend Issues

1. **Port 8000 already in use:**
   - Change the port in `start.sh`/`start.bat` or run: `python manage.py runserver 8001`

2. **Migration errors:**
   - Delete `db.sqlite3` and run migrations again: `python manage.py migrate`

### Frontend Issues

1. **Port 5173 already in use:**
   - Vite will automatically use the next available port

2. **API connection errors:**
   - Ensure backend is running on port 8000
   - Check `frontend/.env` has correct `VITE_API_URL`

## 📄 License

This project is open source and available under the MIT License.
