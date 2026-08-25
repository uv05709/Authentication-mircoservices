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
