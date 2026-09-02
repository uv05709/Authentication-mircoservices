# Auth Microservice

A standalone authentication microservice built with **Node.js + Express**, providing secure user registration, login, and token management using **JWT access & refresh tokens** with **PostgreSQL** as the data store.

## Features

- User registration and login
- Password hashing with bcrypt
- JWT-based authentication (short-lived access tokens)
- Refresh token rotation for long-lived sessions
- Token revocation on logout
- Protected route middleware
- Input validation and centralized error handling

## Tech Stack

| Layer     | Technology        |
| --------- | ----------------- |
| Runtime   | Node.js           |
| Framework | Express           |
| Database  | PostgreSQL        |
| ORM       | Prisma            |
| Auth      | JSON Web Tokens   |
| Language  | TypeScript        |

## Prerequisites

- Node.js >= 20.x
- PostgreSQL >= 14.x
- npm >= 10.x

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/T4Tier3/Authentication-mircoservices.git
cd Authentication-mircoservices
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example environment file and fill in your values:

```bash
cp .env.example .env
```

Open `.env` and update the following required values:

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |
| `JWT_ACCESS_SECRET` | Secret for signing access tokens (min 32 chars) |
| `JWT_REFRESH_SECRET` | Secret for signing refresh tokens (min 32 chars) |
| `PORT` | Port the server listens on (default: 3000) |

> ⚠️ Never commit your `.env` file — it is already in `.gitignore`

### 4. Set up the database

```bash
npx prisma migrate dev
```

### 5. Start the server

```bash
npm run dev
```
