# Salon Appointment Manager

A fullstack app for managing salon appointments, built with **Node.js, GraphQL, PostgreSQL, React, TypeScript, and Apollo Client**.  
---

## Features  

### Backend (Node.js + GraphQL + PostgreSQL)  
- **GraphQL API** (Express + Apollo Server)  
- **PostgreSQL with Prisma ORM**  
- **CRUD for appointments** (Create, Read, Update, Delete)  
- **Includes salon & service details in queries**  
- **Modular architecture for maintainability**  

### 🔹 Frontend (React + TypeScript + Apollo Client)  
- **View all appointments**
- **Add a new appointment**  
- **Feature-based folder structure** (clean & scalable)  
- **Styled with TailwindCSS**
---

## 📂 Project Structure  

```tree
backend/                 # GraphQL API
├── src/
│   ├── modules/         # Feature-based modules
│   ├── config/          # Prisma & environment setup
│   ├── schema/          # GraphQL schema
│   ├── server.ts        # Express + Apollo setup
│   ├── index.ts         # Entry point
├── prisma/              # DB schema & migrations
├── package.json
├── tsconfig.json
│── .gitignore
frontend/                # React App
├── src/
│   ├── features/        # Feature-based structure
│   ├── config/          # Apollo & global state
│   ├── pages/           # Feature pages
│   ├── App.tsx          # Main App
│   ├── index.tsx        # Entry point
├── public/
├── package.json
├── tsconfig.json
│── README.md                # Documentation
│── .gitignore
```
---

## 🛠 Setup Instructions  

### 1. Clone the repo  
```bash
git clone https://github.com/your-username/salon-appointment-app.git
cd salon-appointment-app
```

### 2. Backend Setup
📍 Move into the backend folder & install dependencies
cd backend
npm install

### 3. Create a .env file in api/
DATABASE_URL=postgresql://your_user:your_password@localhost:5432/salon_db
PORT=4000

### 4. Run db stuff
```bash
npx prisma migrate dev --name init
```
