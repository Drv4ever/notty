# NOTTY Backend

Backend server for the NOTTY notes application with authentication.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file (optional, defaults are used if not provided):
```bash
PORT=3001
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

3. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Endpoints

### Authentication

- `POST /api/auth/signup` - Create a new user account
  - Body: `{ email, password, name? }`
  - Returns: `{ token, user }`

- `POST /api/auth/login` - Login with email and password
  - Body: `{ email, password }`
  - Returns: `{ token, user }`

- `GET /api/auth/me` - Get current user (requires authentication)
  - Headers: `Authorization: Bearer <token>`
  - Returns: `{ id, email, name }`

### Health Check

- `GET /api/health` - Check if server is running

## Notes

- User data is stored in `users.json` (created automatically)
- Passwords are hashed using bcrypt
- JWT tokens expire after 7 days
- Default port is 3001
