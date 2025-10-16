# MySQL Node.js CRUD Project

Simple Node.js project demonstrating CRUD operations using MySQL.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Setup MySQL database:
```sql
CREATE DATABASE testdb;
USE testdb;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);
```

3. Update MySQL credentials in `config.js`.

4. Start the server:
```bash
npm start
```

5. API Endpoints:
- `POST /api/users` → Create user
- `GET /api/users` → Get all users
- `GET /api/users/:id` → Get user by id
- `PUT /api/users/:id` → Update user
- `DELETE /api/users/:id` → Delete user