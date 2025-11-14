# Django Shop API

A modern Django REST API project for managing products with a beautiful web interface.

## Features

- 🛍️ Product management API
- 🎨 Modern, responsive web interface
- 📱 Mobile-friendly design
- 🔄 RESTful API endpoints
- 💾 SQLite database (easy setup)

## Tech Stack

- **Backend**: Django 5.2.8
- **API**: Django REST Framework
- **Database**: SQLite
- **Frontend**: HTML, CSS, JavaScript

## Installation

1. Clone the repository:
```bash
git clone https://github.com/roaa-kittaneh/django-shop-api.git
cd django-shop-api
```

2. Create a virtual environment:
```bash
python -m venv venv
```

3. Activate the virtual environment:
- Windows:
```bash
venv\Scripts\activate
```
- Linux/Mac:
```bash
source venv/bin/activate
```

4. Install dependencies:
```bash
pip install -r requirements.txt
```

5. Run migrations:
```bash
cd shopapi
python manage.py migrate
```

6. Create a superuser (optional):
```bash
python manage.py createsuperuser
```

7. Run the development server:
```bash
python manage.py runserver
```

## Usage

- **Web Interface**: Visit `http://127.0.0.1:8000/` to see the product catalog
- **API Endpoints**: 
  - List/Create products: `http://127.0.0.1:8000/api/products/`
  - Product detail: `http://127.0.0.1:8000/api/products/{id}/`
- **Admin Panel**: Visit `http://127.0.0.1:8000/admin/` to manage products

## API Endpoints

- `GET /api/products/` - List all products
- `POST /api/products/` - Create a new product
- `GET /api/products/{id}/` - Get product details
- `PUT /api/products/{id}/` - Update a product
- `DELETE /api/products/{id}/` - Delete a product

## Project Structure

```
shopapi/
├── products/          # Products app
│   ├── models.py      # Product model
│   ├── views.py       # API views and web views
│   ├── serializers.py # API serializers
│   └── templates/     # HTML templates
├── shopapi/           # Project settings
│   ├── settings.py    # Django settings
│   └── urls.py        # URL configuration
└── manage.py          # Django management script
```

## License

This project is open source and available under the MIT License.
