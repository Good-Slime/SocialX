# SocialX

SocialX is a backend-focused social media application inspired by Twitter.  
It implements core social features using a clean, service-based Node.js architecture.

This project exists to demonstrate backend engineering concepts — not UI.

---

## Tech Stack

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose

**Authentication**
- JWT (JSON Web Tokens)
- bcrypt

**Utilities**
- Multer
- dotenv
- nodemon

---

## Features

- User signup and login
- JWT-based authentication
- Create and delete tweets
- Like / unlike tweets
- Comment on tweets
- MongoDB relations using `populate`
- RESTful API design
- Controller–Service separation

---

## Project Structure

```
src/
├── connections/ # Database connections
├── controllers/ # HTTP request/response handling
├── middlewares/ # Authentication and custom middleware
├── models/ # Mongoose schemas
├── routes/ # API route definitions
├── services/ # Business logic
├── utils/ # Helper utilities
└── index.js # Application entry point
```


Controllers do not contain business logic.  
Services do.  
If you mix them, your architecture is wrong.

---

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## Installation

```bash
git clone https://github.com/Good-Slime/SocialX.git
cd SocialX
npm install
```
 ## Run the Application
```
npm start
```

## Authentication

Send the JWT in request headers:
```
Authorization: Bearer <JWT_TOKEN>
```

Requests without a valid token are rejected.

---

## License

MIT