# Shop Frontend

React + Vite frontend application for the Shop API project.

## Features

- 🚀 Built with React 18 and Vite
- 📡 API integration with Django REST Framework backend
- 🎨 Modern, responsive UI design
- ⚡ Fast development with hot module replacement

## Installation

1. Install dependencies:
```bash
npm install
```

## Development

Run the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Environment Variables

Create a `.env` file in the frontend directory:
```
VITE_API_URL=http://localhost:8000/api/
```

## Build

Build for production:
```bash
npm run build
```

The production build will be in the `dist/` directory.

## Project Structure

```
frontend/
├── src/
│   ├── services/
│   │   └── api.js          # API service functions
│   ├── App.jsx             # Main App component
│   ├── App.css             # App styles
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── .env                    # Environment variables
├── package.json            # Dependencies
└── vite.config.js          # Vite configuration
```

