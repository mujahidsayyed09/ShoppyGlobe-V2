# ShoppyGlobe - E-commerce Full Stack Application

A fully functional MERN stack e-commerce application with user authentication, product listing, and cart management. The frontend is built using React.js, and the backend uses Node.js, Express.js, and MongoDB.

---

## 📁 Project Structure

```
shoppyglobe/
├── client/          # React Frontend
├── server/          # Node/Express Backend
├── README.md        # Project Documentation
```

---

## 🛠️ How to Set Up This Project Locally

### Prerequisites

* Node.js and npm installed
* MongoDB running locally or a cloud URI (MongoDB Atlas)

### 1. Clone the Repository

```bash
git clone https://github.com/mujahidsayyed09/ShoppyGlobe-V2.git
cd shoppyglobe
```

### 2. Install Backend Dependencies

```bash
cd server
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file inside the `server` directory:

```env
PORT=5100
MONGO_URI=mongodb://localhost:27017/shoppyglobe
JWT_SECRET=your_jwt_secret_key
```

### 4. Start Backend Server

```bash
npm start
```

Backend will run on: `http://localhost:5100`

### 5. Install Frontend Dependencies

```bash
cd ../client
npm install
```

### 6. Configure Frontend Base URL

Edit `client/src/config.js`:

```js
export const BASE_URL = "http://localhost:5100";
```

### 7. Start Frontend Server

```bash
npm run dev
```

Frontend will run on: `http://localhost:5173`

---

## 📦 ThunderClient CRUD Examples

### 🔹 Create Product (POST)

**Endpoint:** `POST /api/products`
**Body:**

```json
{
  "name": "Shirt",
  "image": "https://example.com/shirt.jpg",
  "price": 499
}
```

**Screenshot:**
![POST product](screenshots/post-product.png)

---

### 🔹 Read All Products (GET)

**Endpoint:** `GET /api/products`
**Screenshot:**
![GET products](screenshots/get-products.png)

---

### 🔹 Update Product (PUT)

**Endpoint:** `PUT /api/products/:id`
**Body:**

```json
{
  "price": 599
}
```

**Screenshot:**
![PUT product](screenshots/put-product.png)

---

### 🔹 Delete Product (DELETE)

**Endpoint:** `DELETE /api/products/:id`
**Screenshot:**
![DELETE product](screenshots/delete-product.png)

---

## 🧑‍💻 User Authentication

* Register: `POST /api/auth/register`
* Login: `POST /api/auth/login`

You’ll receive a JWT token on login, which is used for protected routes.

---

## 🛒 Cart Functionality (MongoDB + LocalStorage)

* Add to cart: `POST /api/cart`
* Update quantity: `PUT /api/cart`
* Remove from cart: `DELETE /api/cart/:id`

Cart is persisted in localStorage for frontend state and MongoDB for backend storage.

---

## 🚀 How to Deploy the Website

### Frontend (Netlify)

1. Push your frontend code (`client/`) to GitHub.
2. Go to [https://netlify.com](https://netlify.com)
3. Create a new site from GitHub.
4. Set build command:

```bash
npm run build
```

5. Set publish directory:

```
dist
```

6. Click "Deploy"

### Backend (Render)

1. Push your backend code (`server/`) to GitHub.
2. Go to [https://render.com](https://render.com)
3. Create a new web service.
4. Set environment variables (same as `.env`)
5. Build & Start commands:

```bash
npm install
npm start
```

6. Render URL will be your live API URL.

---

## ✅ Important Notes

* Make sure to allow CORS in backend (`server/index.js`)
* Frontend `BASE_URL` must match backend Render deployment
* Cart should be cleared on logout (use `localStorage.removeItem("cart")`)
* Dynamic routes like `/cart`, `/login`, `/register` must be handled via Netlify's `_redirects`

Create a `_redirects` file in `client/public/`:

```
/*    /index.html   200
```

---

## 📬 Contact

**Mujahid Sayyed**
📧 [mujahidsayed203@gmail.com](mailto:mujahidsayed203@gmail.com)
🔗 [LinkedIn](https://www.linkedin.com/in/mujahidsayyed/)

---

Happy Coding 🚀
