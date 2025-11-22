# Django Shop API Backend

Django REST Framework backend for the Shop API project.

## Features

- 🛍️ Product management API
- 🔄 RESTful API endpoints
- 💾 SQLite database (easy setup)
- 🌐 CORS enabled for frontend integration

## Tech Stack

- **Backend**: Django 5.2.8
- **API**: Django REST Framework 3.15.2
- **Database**: SQLite
- **CORS**: django-cors-headers 4.3.1

## Installation

### 1. Create Virtual Environment

Navigate to the backend directory:
```bash
cd backend
python -m venv venv
```

### 2. Activate Virtual Environment

**Windows:**
```bash
venv\Scripts\activate
```

**Linux/Mac:**
```bash
source venv/bin/activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Run Migrations

```bash
cd shopapi
python manage.py migrate
```

### 5. Create Superuser (Optional)

```bash
python manage.py createsuperuser
```

### 6. Run Development Server

```bash
python manage.py runserver 8000
```

The backend will be available at `http://localhost:8000`

## API Endpoints

- `GET /api/products/` - List all products
- `POST /api/products/` - Create a new product
- `GET /api/products/{id}/` - Get product details
- `PUT /api/products/{id}/` - Update a product
- `DELETE /api/products/{id}/` - Delete a product

## Project Structure

```
backend/
├── shopapi/
│   ├── products/          # Products app
│   │   ├── models.py      # Product model
│   │   ├── views.py       # API views
│   │   ├── serializers.py # API serializers
│   │   └── migrations/    # Database migrations
│   ├── shopapi/           # Project settings
│   │   ├── settings.py    # Django settings
│   │   └── urls.py        # URL configuration
│   └── manage.py          # Django management script
├── venv/                  # Virtual environment
└── requirements.txt       # Python dependencies
```

## Configuration

The backend is configured to:
- Run on port **8000**
- Allow CORS requests from `http://localhost:5173` (frontend)
- Use SQLite database (db.sqlite3)

## Admin Panel

Access the Django admin panel at:
```
http://localhost:8000/admin/
```

Use the superuser credentials created in step 5.

