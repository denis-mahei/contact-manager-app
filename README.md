# 📱 Contact Manager App

A full-stack contact management application with authentication, built with **React (frontend)** and a **Node.js/Express backend API**.

The project demonstrates modern frontend architecture with Redux Toolkit and a REST API backend with JWT authentication.

---

## 🔗 Live Demo

👉 Frontend: https://contact-book-manager-dm.vercel.app/contacts
👉 Backend API: https://github.com/denis-mahei/nodejs-contacts-api

---

## 🧩 Tech Stack

### Frontend
- React
- Redux Toolkit & Redux Persist
- React Router
- Axios
- Material UI (MUI)
- Formik + Yup
- React Hot Toast
- Vite

### Backend
- Node.js
- Express.js
- MongoDB (or your DB)
- JWT Authentication
- googleOAuth
- REST API

---

## 🚀 Features

### Authentication
- User registration / login / logout
- JWT-based authentication
- Persistent session (refresh token support)
- Protected routes (private/public)

### Contacts Management
- Add new contacts
- Delete contacts
- Filter contacts by name
- Filter contacts by type
- Responsive UI (mobile-first)

### UX / UI
- Skeleton loading states
- Toast notifications
- Responsive Material UI layout
- Modern clean UI

---

## 🔄 Project Structure

This project is split into two parts:

### 🖥 Frontend
Handles:
- UI rendering
- State management (Redux Toolkit)
- API communication (Axios)

### 🖧 Backend
Handles:
- Authentication logic
- Database operations
- REST API endpoints
- JWT token validation

---

## 🔌 API Connection

Frontend communicates with backend via REST API:

- `/auth/register`
- `/auth/login`
- `/auth/logout`
- `/contacts`
- `/contacts/:id`

All requests are authenticated using JWT token stored in HTTP headers.

---

## ⚙️ Setup Instructions

### Frontend

```bash
npm install
npm run dev