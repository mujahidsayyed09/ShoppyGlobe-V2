# 🛍️ ShoppyGlobe E-commerce App

A full-stack e-commerce app with product listings, cart functionality, and user authentication.

---

## 📑 Table of Contents

* [🚀 Tech Stack](#-tech-stack)
* [🧾 Features](#-features)
* [🗄️ MongoDB Integration](#️-mongodb-integration)
* [🧪 ThunderClient + MongoDB Atlas Testing](#-thunderclient--mongodb-atlas-testing)
* [📁 Folder Structure](#-folder-structure)
* [🔧 Environment Variables](#-environment-variables)
* [📦 Installation](#-installation)
* [🚀 Deployment](#-deployment)
* [👤 Author](#-author)

---

## 🚀 Tech Stack

**Frontend:** React, CSS, Axios, React Router
**Backend:** Node.js, Express.js, MongoDB (Atlas)
**Authentication:** JWT

---

## 🧾 Features

* User login & signup
* Browse products
* Add to cart (protected route)
* Dynamic cart count & user info
* Protected checkout route

---

## 🗄️ MongoDB Integration

**Database:** `shoppyglobe`

**Collections:**

* `products`: Stores product data (name, price, description, stock)
* `carts`: Stores cart items (product IDs and quantities)
* `users`: Stores user authentication data

**CRUD Operations:**

* **Products:** Create, Read, Update, Delete
* **Cart Items:** Add to Cart, Update Quantity, Remove Items, Clear Cart

---

## 🧪 ThunderClient + MongoDB Atlas Testing

All API endpoints tested using ThunderClient with results verified in MongoDB Atlas.

### 🧍 Authentication Routes

| API Route                 | Description              | ThunderClient Screenshot | MongoDB Screenshot           |
| ------------------------- | ------------------------ | ------------------------ | ---------------------------- |
| POST `/api/auth/register` | Register a new user      | ![Register](<img width="1088" height="641" alt="image" src="https://github.com/user-attachments/assets/92098a95-b983-42b3-9b5c-7b62fd6b79b2" />
) | ![User Created](<img width="1220" height="557" alt="image" src="https://github.com/user-attachments/assets/d26db517-4e5c-41aa-abf9-6f5c9bc2fa34" />
) |
| POST `/api/auth/login`    | Login user and get token | ![Login](placeholder)    | ![User Check](placeholder)   |

### 📦 Product Routes

| API Route               | Description        | ThunderClient Screenshot | MongoDB Screenshot           |
| ----------------------- | ------------------ | ------------------------ | ---------------------------- |
| POST `/api/products/`   | Create product     | ![Create](placeholder)   | ![Product DB](placeholder)   |
| GET `/api/products/`    | Get all products   | ![Fetch](placeholder)    | ![All Products](placeholder) |
| GET `/api/products/:id` | Get single product | ![Single](placeholder)   | ![One Product](placeholder)  |

### 🛒 Cart Routes

| API Route                     | Description                 | ThunderClient Screenshot | MongoDB Screenshot          |
| ----------------------------- | --------------------------- | ------------------------ | --------------------------- |
| POST `/api/cart/`             | Add to cart (Protected)     | ![Add](placeholder)      | ![Cart Add](placeholder)    |
| GET `/api/cart/`              | Get cart (Protected)        | ![Get](placeholder)      | ![Cart Get](placeholder)    |
| PUT `/api/cart/:productId`    | Update quantity (Protected) | ![Update](placeholder)   | ![Cart Update](placeholder) |
| DELETE `/api/cart/:productId` | Remove item (Protected)     | ![Remove](placeholder)   | ![Cart Remove](placeholder) |
| DELETE `/api/cart/clear`      | Clear entire cart           | ![Clear](placeholder)    | ![Cart Clear](placeholder)  |

### 👤 User Routes

| API Route               | Description         | ThunderClient Screenshot | MongoDB Screenshot           |
| ----------------------- | ------------------- | ------------------------ | ---------------------------- |
| GET `/api/user/profile` | Get user profile    | ![Profile](placeholder)  | ![User Profile](placeholder) |
| PUT `/api/user/profile` | Update user profile | ![Update](placeholder)   | ![User Updated](placeholder) |

### ⚠️ Miscellaneous

| Test           | Description         | Screenshot            |
| -------------- | ------------------- | --------------------- |
| Invalid Route  | 404 Not Found route | ![404](placeholder)   |
| Error Handling | Global error check  | ![Error](placeholder) |

---

## 📁 Folder Structure

```
shoppyglobe/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── server.js
│   ├── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   ├── .env
│   ├── vite.config.js
│   ├── package.json
│
└── README.md
```

---

## 🔧 Environment Variables

### 🔒 Backend `.env`

```
NODE_ENV=development
PORT=5000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-secret-key>
```

### 🌐 Frontend `.env`

```
VITE_API_BASE_URL=http://localhost:5000/api
```

> 🔁 Update to production URL after deployment.

---

## 📦 Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/shoppyglobe-fullstack.git
cd shoppyglobe-fullstack
```

### 2️⃣ Backend setup

```bash
cd backend
npm install
npm start
```

### 3️⃣ Frontend setup

```bash
cd frontend
npm install
npm run dev
```

Open browser at: [http://localhost:5173](http://localhost:5173)

---

## 🚀 Deployment

**Frontend:** Vercel
**Backend:** Render

Deploy with your GitHub and connect environment variables accordingly.

---

## 👤 Author

**Mujahid Sayyed**
📧 [mujahidsayed203@gmail.com](mailto:mujahidsayed203@gmail.com)
🔗 [GitHub](https://github.com/mujahidsayyed09) | [LinkedIn](https://www.linkedin.com/in/mujahidsayyed/) | [Portfolio](https://mujahidsayyed09.github.io/PORTFOLIO/)

---

> ✅ Feel free to fork, contribute, and improve this project!
