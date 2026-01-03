# LM Pizzeria – Full-Stack Restaurant Ordering System

A modern, full-stack web application for a luxury pizzeria brand, featuring user authentication, online menu browsing, shopping cart, order management, and a complete backend with MySQL database.

**Phase 1:** React frontend with responsive design  
**Phase 2:** Node.js + Express backend with MySQL, JWT authentication, and CRUD operations

This project was developed as part of a university web development course (CSCI 426 – WEH Advanced).

---

## 🚀 Live Demo

**Frontend:** <https://lmpizzeria.netlify.app/>  
**Backend:** Ready for deployment on Railway/Render

---

## 📌 Overview

LM Pizzeria is a full-stack restaurant ordering system providing a complete customer experience from browsing to order management.

### Customer Features:
- 🔐 **User Authentication** - Secure signup and login with JWT
- 🍕 **Browse Menu** - Gourmet pizzas, sides, desserts, and drinks
- 📱 **Responsive Design** - Perfect on mobile, tablet, and desktop
- 🛒 **Shopping Cart** - Persistent cart with localStorage
- 📋 **Order Management** - View and manage order history
- ✅ **Order Confirmation** - Detailed confirmation after checkout

### Technical Features:
- RESTful API with 8 endpoints
- MySQL database with 3 related tables
- JWT-based authentication
- Password hashing with bcrypt
- Complete CRUD operations
- Input validation and error handling
- Clean, modular code architecture

---

## ✨ Features

### Phase 1 (Frontend):
- ✅ React 18 with modern hooks
- ✅ 10 pages including 1 dynamic route (`/menu/:id`)
- ✅ Responsive design with Tailwind CSS
- ✅ Shopping cart with context API
- ✅ Client-side routing with React Router
- ✅ Deployed on Netlify

### Phase 2 (Backend):
- ✅ Node.js + Express REST API
- ✅ MySQL database integration
- ✅ User authentication (signup/login)
- ✅ JWT token-based sessions (7-day expiry)
- ✅ CRUD operations on orders
- ✅ Data validation
- ✅ Error handling middleware
- ✅ Deployment ready

---

## 🛠 Tech Stack

### Frontend:
- **React 18.3.1** - UI library
- **React Router DOM 6.26.0** - Client-side routing
- **Vite 5.4.2** - Build tool and dev server
- **Tailwind CSS 3.4.11** - Utility-first CSS framework

### Backend:
- **Node.js** - JavaScript runtime
- **Express.js 4.18.2** - Web framework
- **MySQL** - Relational database
- **mysql2 3.11.0** - MySQL driver with Promises

### Authentication & Security:
- **bcrypt 5.1.1** - Password hashing (10 salt rounds)
- **jsonwebtoken 9.0.2** - JWT token generation/verification
- **dotenv 16.4.5** - Environment variable management
- **cors 2.8.5** - Cross-origin resource sharing

---

## 🚀 Getting Started

### Prerequisites
- **Node.js 16+** installed
- **MySQL 8.0+** installed
- **Git**

### 1. Clone the Repository

```bash
git clone https://github.com/Lamitamassry/lmpizzeria.git
cd lmpizzeria
```

### 2. Setup Frontend

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

**Edit `.env`:**
```env
VITE_API_URL=http://localhost:5000
```

```bash
# Start development server
npm run dev
```

Frontend runs on **http://localhost:5173**

### 3. Setup Backend

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

**Edit `backend/.env`:**
```env
PORT=5000
NODE_ENV=development

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=lm_pizzeria

JWT_SECRET=your_very_secure_secret_key_change_in_production
FRONTEND_URL=http://localhost:5173
```

### 4. Setup MySQL Database

**Create database:**
```bash
mysql -u root -p
```

```sql
CREATE DATABASE lm_pizzeria;
USE lm_pizzeria;
SOURCE db/schema.sql;
EXIT;
```

Or import directly:
```bash
mysql -u root -p lm_pizzeria < db/schema.sql
```

**Verify tables created:**
```sql
mysql -u root -p lm_pizzeria -e "SHOW TABLES;"
```

You should see: `users`, `orders`, `order_items`

### 5. Start Backend Server

```bash
# From backend directory

# Development mode (auto-restart on changes)
npm run dev

# Production mode
npm start
```

Backend runs on **http://localhost:5000**

### 6. Test the Application

1. Open browser to **http://localhost:5173**
2. Click "Sign Up" and create an account
3. Browse menu and add items to cart
4. Proceed to checkout (requires login)
5. View your orders in "My Orders"
6. Try updating/deleting orders

---

## 📁 Project Structure

```
lmpizzeria/
├── backend/
│   ├── server.js                 # Express server entry point
│   ├── package.json              # Backend dependencies
│   ├── .env.example             # Environment template
│   ├── controllers/
│   │   ├── authController.js    # User auth (signup/login)
│   │   └── orderController.js   # Order CRUD operations
│   ├── routes/
│   │   ├── auth.js              # Auth endpoints
│   │   └── orders.js            # Order endpoints
│   ├── middleware/
│   │   ├── auth.js              # JWT verification
│   │   └── errorHandler.js     # Error handling
│   └── db/
│       ├── connection.js        # MySQL connection pool
│       └── schema.sql           # Database schema
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation with auth state
│   │   ├── Footer.jsx
│   │   └── MenuItemCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Menu.jsx
│   │   ├── MenuItemDetail.jsx  # Dynamic route (/menu/:id)
│   │   ├── Contact.jsx
│   │   ├── Cart.jsx            # Cart with auth integration
│   │   ├── Login.jsx           # User login
│   │   ├── Signup.jsx          # User registration
│   │   ├── Orders.jsx          # Order history & management
│   │   └── OrderConfirmation.jsx
│   ├── context/
│   │   └── CartContext.jsx     # Global cart state
│   ├── data/
│   │   └── menuData.js         # Menu items
│   ├── App.jsx                 # Main app with routing
│   └── main.jsx                # React entry point
├── docs/
│   ├── PHASE2_REPORT_CONTENT.md    # Complete Phase 2 report
│   └── PHASE1_REPORT_FIXES.md      # Report update guide
├── PHASE1_CHECKLIST.md          # Phase 1 compliance
├── PHASE2_CHECKLIST.md          # Phase 2 compliance
├── .env.example
└── README.md
```

---

## 🔌 API Endpoints

### Authentication (Public)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Register new user |
| POST | `/api/auth/login` | Login user, get JWT token |
| GET | `/api/auth/me` | Get current user profile (protected) |

### Orders (Protected - Requires JWT Token)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/orders` | Create new order |
| GET | `/api/orders` | Get all orders for logged-in user |
| GET | `/api/orders/:id` | Get single order by ID |
| PUT | `/api/orders/:id` | Update order details |
| DELETE | `/api/orders/:id` | Delete order |

### Utility

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Server health check |

---

## 📝 API Examples

### Signup

```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

**Response:**
```json
{
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### Login

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Create Order (Authenticated)

```bash
curl -X POST http://localhost:5000/api/orders \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE" \
  -d '{
    "name": "John Doe",
    "phone": "123-456-7890",
    "orderType": "delivery",
    "address": "123 Main St, Apt 4B",
    "items": [
      {"name": "Margherita Pizza", "price": 12.99, "quantity": 2},
      {"name": "Garlic Bread", "price": 4.99, "quantity": 1}
    ],
    "total": 30.97
  }'
```

### Get All Orders

```bash
curl http://localhost:5000/api/orders \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"
```

### Delete Order

```bash
curl -X DELETE http://localhost:5000/api/orders/1 \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"
```

---

## 🗄 Database Schema

### Tables

**`users`** - User accounts
```sql
- id (PK, AUTO_INCREMENT)
- name (VARCHAR 255)
- email (VARCHAR 255, UNIQUE, INDEXED)
- password_hash (VARCHAR 255)
- created_at (TIMESTAMP)
```

**`orders`** - Customer orders
```sql
- id (PK, AUTO_INCREMENT)
- user_id (FK → users.id, CASCADE)
- name (VARCHAR 255)
- phone (VARCHAR 50)
- order_type (ENUM: 'dine-in', 'takeaway', 'delivery')
- address (TEXT, nullable)
- total (DECIMAL 10,2)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

**`order_items`** - Items within orders
```sql
- id (PK, AUTO_INCREMENT)
- order_id (FK → orders.id, CASCADE)
- item_name (VARCHAR 255)
- item_price (DECIMAL 10,2)
- quantity (INT)
```

### Relationships

```
users (1) ──< orders (many) ──< order_items (many)
```

- One user can have many orders
- One order can have many items
- Foreign keys with CASCADE delete

---

## 🚀 Deployment

### Frontend (Netlify)

**Current:** https://lmpizzeria.netlify.app/

1. Build project:
```bash
npm run build
```

2. Deploy `dist/` folder to Netlify

3. Set environment variable:
   - `VITE_API_URL` = `https://your-backend-url.com`

### Backend (Railway - Recommended)

1. Create account at [railway.app](https://railway.app/)
2. Create new project from GitHub
3. Add MySQL database plugin
4. Set environment variables (see `.env.example`)
5. Connect to Railway MySQL:
```bash
mysql -h <railway-host> -u <user> -p
```
6. Run schema:
```sql
SOURCE backend/db/schema.sql;
```
7. Deploy backend
8. Update frontend `VITE_API_URL` with Railway URL

**Alternative:** Render.com (similar process)

---

## 🔒 Security

- ✅ Passwords hashed with bcrypt (10 salt rounds)
- ✅ JWT tokens with 7-day expiration
- ✅ Bearer token authentication
- ✅ SQL injection prevention (parameterized queries)
- ✅ CORS configured
- ✅ Environment variables for secrets
- ✅ Input validation on all endpoints
- ✅ Authorization (users can only access their own data)

### Security Recommendations for Production:
- Use HTTPS only
- Implement rate limiting
- Add CSRF protection
- Store JWT in HTTP-only cookies
- Regular security audits
- Enable database SSL connections

---

## 🧪 Testing

### Manual Testing Workflow

**1. User Registration:**
- Navigate to `/signup`
- Fill form with valid data
- Verify auto-login and redirect to menu

**2. User Login:**
- Navigate to `/login`
- Enter credentials
- Verify token saved in localStorage
- Check navbar shows user name

**3. Order Placement:**
- Browse menu
- Add items to cart
- Proceed to checkout
- Login if not authenticated
- Fill checkout form
- Submit order
- Verify order confirmation page

**4. Order Management:**
- Navigate to `/orders`
- View all orders
- Delete an order
- Verify deletion

**5. Logout:**
- Click logout
- Verify redirect
- Check token removed from localStorage

### API Testing (Postman/cURL)

Use the API examples above to test all endpoints.

---

## 📊 Pages

Total: **10 pages** (exceeds Phase 1 requirement of 5)

1. **Home** (`/`) - Landing page
2. **About** (`/about`) - Company info
3. **Menu** (`/menu`) - Browse menu items
4. **Menu Detail** (`/menu/:id`) - Dynamic page for item details
5. **Contact** (`/contact`) - Contact information
6. **Cart** (`/cart`) - Shopping cart & checkout
7. **Login** (`/login`) - User login
8. **Signup** (`/signup`) - User registration
9. **Orders** (`/orders`) - Order history
10. **Order Confirmation** (`/order-confirmation`) - Post-order summary

---

## 📖 Documentation

- **[PHASE1_CHECKLIST.md](PHASE1_CHECKLIST.md)** - Phase 1 requirement compliance
- **[PHASE2_CHECKLIST.md](PHASE2_CHECKLIST.md)** - Phase 2 requirement compliance
- **[docs/PHASE2_REPORT_CONTENT.md](docs/PHASE2_REPORT_CONTENT.md)** - Complete technical report
- **[docs/PHASE1_REPORT_FIXES.md](docs/PHASE1_REPORT_FIXES.md)** - Report update guidelines

---

## 👨‍💻 Development

### Available Scripts

**Frontend:**
```bash
npm run dev      # Start Vite dev server (http://localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
```

**Backend:**
```bash
npm start        # Start server
npm run dev      # Start with nodemon (auto-restart)
```

### Code Quality
- ES6+ JavaScript
- Functional React components with hooks
- Async/await for asynchronous operations
- Clean, commented code
- Modular MVC-style architecture
- Error handling throughout

---

## 🎨 Customization

### Change Color Theme

Edit `tailwind.config.js`:
```javascript
colors: {
  accent: {
    rose: '#ff6b9d',    // Primary brand color
    pink: '#ff8fb3',    // Secondary
    gold: '#d4a574',    // Accent
  },
}
```

### Add Menu Items

Edit `src/data/menuData.js` and add items to categories.

### Modify Database Schema

Edit `backend/db/schema.sql` and re-run migration.

---

## 🤝 Contributing

This is a university project. For issues or suggestions, please open a GitHub issue.

---

## 📄 License

Educational use only - CSCI 426 course project.

---

## 👤 Author

**Course:** CSCI 426 - Web Development (Advanced)  
**Date:** December 2025  
**Repository:** https://github.com/Lamitamassry/lmpizzeria

---

## 🙏 Acknowledgments

- Course instructor and TAs
- React, Express, MySQL documentation
- Tailwind CSS team
- JWT.io for authentication guidance

---

## 📸 Screenshots

See report documents in `docs/` for detailed screenshots of:
- All 10 pages (desktop & mobile)
- Database schema in MySQL Workbench
- API testing in Postman
- Authentication flow
- Order management

---

**Project Status:** ✅ Complete - Fully compliant with Phase 1 and Phase 2 requirements
