# NOTTY - Login/Signup System Setup

This guide will help you set up and run the NOTTY application with authentication.

## Prerequisites

- Node.js (v16 or higher)
- npm

## Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Create a `.env` file:
```bash
PORT=3001
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

4. Start the backend server:
```bash
npm start
```

The backend will run on `http://localhost:3001`

## Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend/frontend
```

2. Install dependencies (if not already done):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173` (or another port if 5173 is taken)

## Usage

1. Start the backend server first
2. Start the frontend server
3. Open your browser to the frontend URL
4. You'll be redirected to the login page
5. Click "Sign up" to create a new account
6. After signing up or logging in, you'll be taken to the notes app

## Features

- User registration with email and password
- Secure login with JWT authentication
- Protected routes (notes app requires authentication)
- Logout functionality
- Password hashing with bcrypt
- Token-based authentication

## API Configuration

The frontend is configured to connect to `http://localhost:3001/api`. If you need to change this, update the `API_URL` constant in `frontend/frontend/src/contexts/AuthContext.jsx`.
