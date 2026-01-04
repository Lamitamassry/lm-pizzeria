# LM Pizzeria – Full-Stack Restaurant Ordering System

A full-stack web application for a pizzeria restaurant with user authentication, menu browsing, shopping cart, and order management. Uses React for the frontend and Node.js with MySQL for the backend.

**Phase 1:** React frontend with responsive design  
**Phase 2:** Node.js + Express backend with MySQL, JWT authentication, and CRUD operations

Developed for CSCI 426 - WEH Advanced  
**Student:** Lamita Masry | **Instructor:** Prof. Fouad Najem | **Term:** Spring 2026

---

## Live Demo

**Frontend:** <https://lmpizzeria.netlify.app/>  
**Backend:** Can be deployed on Railway or Render

---

## Overview

This is a restaurant ordering system where users can browse a menu, add items to a cart, and place orders. The system includes user authentication and order management.

### Features

- User signup and login with JWT authentication
- Menu browsing with pizzas, sides, desserts, and drinks
- Responsive design that works on mobile, tablet, and desktop
- Shopping cart with localStorage persistence
- Order history and management
- Order confirmation page

### Technical Implementation

- RESTful API with 10 endpoints
- MySQL database with 3 related tables (users, orders, order_items)
- JWT authentication with bcrypt password hashing
- Full CRUD operations on orders
- Input validation and error handling
- Modular code structure

---

## ✨ Features

### Phase 1 (Frontend)

- ✅ React 18 with modern hooks
- ✅ 10 pages including 1 dynamic route (`/menu/:id`)
- ✅ Responsive design with Tailwind CSS
- ✅ Shopping cart with context API
- ✅ Client-side routing with React Router
- ✅ Deployed on Netlify

### Phase 2 (Backend)

- ✅ Node.js + Express REST API
- ✅ MySQL database integration
- ✅ User authentication (signup/login)
- ✅ JWT token-based sessions (7-day expiry)
- ✅ CRUD operations on orders
- ✅ Data validation
- ✅ Error handling middleware
- ✅ Deployment ready

---

## Tech Stack

### Frontend

- **React 18.3.1** - UI library
- **React Router DOM 6.26.0** - Client-side routing
- **Vite 5.4.2** - Build tool and dev server
- **Tailwind CSS 3.4.11** - Utility-first CSS framework

### Backend

- **Node.js** - JavaScript runtime
- **Express.js 4.18.2** - Web framework
- **MySQL** - Relational database
- **mysql2 3.11.0** - MySQL driver with Promises

### Authentication & Security

- **bcrypt 5.1.1** - Password hashing (10 salt rounds)
- **jsonwebtoken 9.0.2** - JWT token generation/verification
- **dotenv 16.4.5** - Environment variable management
- **cors 2.8.5** - Cross-origin resource sharing

---

## Getting Started

### Prerequisites

- **Node.js 16+** installed
- **MySQL 8.0+** installed
- **Git**

### 1. Clone the Repository

```bash
git clone <YOUR_GITHUB_REPO_URL>
cd lami
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

Frontend runs on **<http://localhost:5173>**

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

Backend runs on **<http://localhost:5000>**

### 6. Test the Application

1. Open browser to **<http://localhost:5173>**
2. Click "Sign Up" and create an account
3. Browse menu and add items to cart
4. Proceed to checkout (requires login)
5. View your orders in "My Orders"
6. Try updating/deleting orders

---

## Project Structure

```
lami/
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

## API Endpoints

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
| GET | `/` | Root endpoint - API info |
| GET | `/api/health` | Server health check |

**Total: 10 API Endpoints**

---

## API Examples

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
- password (VARCHAR 255)
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

**Current:** <https://lmpizzeria.netlify.app/>

1. Build project:

```bash
npm run build
```

1. Deploy `dist/` folder to Netlify

2. Set environment variable:
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
2. Update frontend `VITE_API_URL` with Railway URL

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

### Security Recommendations for Production

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

## 🧪 Final Test Checklist

### Prerequisites

- MySQL server running
- Database `lm_pizzeria` created
- Backend `.env` configured
- All dependencies installed

### Test 1: Database Setup

```bash
# Connect to MySQL
mysql -u root -p

# Create database and tables
CREATE DATABASE lm_pizzeria;
USE lm_pizzeria;
SOURCE backend/db/schema.sql;

# Verify tables
SHOW TABLES;
# Expected output: users, orders, order_items
```

**Expected Result:** ✅ All 3 tables created successfully

### Test 2: Backend Server

```bash
cd backend
node index.js
```

**Expected Output:**

```
Server running on port 5000
Environment: development
Frontend URL: http://localhost:5173
Database connected successfully
Connected to: lm_pizzeria at localhost
```

**Expected Result:** ✅ Server starts without errors

### Test 3: API Health Check

```bash
curl http://localhost:5000/api/health
```

**Expected Output:**

```json
{
  "status": "ok",
  "timestamp": "2026-01-03T12:00:00.000Z",
  "environment": "development"
}
```

**Expected Result:** ✅ Returns 200 OK with status

### Test 4: User Signup

```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"test123456"}'
```

**Expected Output:**

```json
{
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "name": "Test User",
    "email": "test@example.com"
  }
}
```

**Expected Result:** ✅ Returns 201 with JWT token

### Test 5: User Login

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123456"}'
```

**Expected Output:**

```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {...}
}
```

**Expected Result:** ✅ Returns 200 with JWT token

### Test 6: Create Order (with token)

```bash
# Replace <TOKEN> with actual JWT from signup/login
curl -X POST http://localhost:5000/api/orders \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <TOKEN>" \
  -d '{
    "name": "Test User",
    "phone": "+1234567890",
    "orderType": "delivery",
    "address": "123 Main St",
    "items": [
      {"name": "Pizza", "price": 12.99, "quantity": 2}
    ]
  }'
```

**Expected Result:** ✅ Returns 201 with order details

### Test 7: Frontend Development Server

```bash
# In project root (not backend folder)
npm run dev
```

**Expected Output:**

```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

**Expected Result:** ✅ Frontend accessible at <http://localhost:5173>

### Test 8: Frontend Pages

Visit these URLs and verify they load without errors:

1. ✅ <http://localhost:5173/> (Home)
2. ✅ <http://localhost:5173/about> (About)
3. ✅ <http://localhost:5173/menu> (Menu)
4. ✅ <http://localhost:5173/menu/1> (Menu Detail - Dynamic Route)
5. ✅ <http://localhost:5173/contact> (Contact)
6. ✅ <http://localhost:5173/cart> (Cart)
7. ✅ <http://localhost:5173/login> (Login)
8. ✅ <http://localhost:5173/signup> (Signup)
9. ✅ <http://localhost:5173/orders> (Orders - requires login)
10. ✅ <http://localhost:5173/order-confirmation> (Order Confirmation)

**Expected Result:** ✅ All pages render correctly

### Test 9: End-to-End User Flow

1. Open <http://localhost:5173/signup>
2. Create new account with unique email
3. Verify redirect to /menu and token in localStorage (F12 → Application)
4. Add items to cart from menu
5. Go to /cart and verify items appear
6. Proceed to checkout (should be logged in)
7. View orders at /orders
8. Logout and login again at /login

**Expected Result:** ✅ Complete flow works without errors

### Test 10: Security Verification

```bash
# Check password is hashed in database
mysql -u pizzeria_app -p lm_pizzeria -e "SELECT id, name, email, LEFT(password, 10) as password_preview FROM users LIMIT 1;"
```

**Expected Output:** Password should start with `$2b$10$` (bcrypt hash)

**Expected Result:** ✅ Passwords are hashed, not plain text

### Test Summary

If all tests pass:

- ✅ Database is set up correctly
- ✅ Backend API is functional
- ✅ Authentication works (signup/login/JWT)
- ✅ Orders can be created and retrieved
- ✅ Frontend connects to backend
- ✅ All 10 pages are accessible
- ✅ Security measures are in place

**PROJECT STATUS:** 🎉 READY FOR SUBMISSION

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

## Contributing

This is a course project for CSCI 426.

---

## License

Educational use only.

---

## Author

CSCI 426 - Web Development (Advanced)  
December 2025

---

## Acknowledgments

- Course instructor and teaching assistants
- React, Express, and MySQL documentation
- Tailwind CSS documentation
- Various online resources for JWT implementation

---

## Screenshots

Screenshots are organized in `docs/screenshots/` by phase. See [SCREENSHOTS_INDEX.md](docs/screenshots/SCREENSHOTS_INDEX.md) for details.

---

## Documentation

Additional documentation in the `docs/` folder:

- [COMPLIANCE_CHECKLIST.md](docs/COMPLIANCE_CHECKLIST.md) - Requirements checklist
- [DEPLOYMENT_RAILWAY.md](docs/DEPLOYMENT_RAILWAY.md) - Backend deployment guide
- [DEPLOYMENT_FRONTEND.md](docs/DEPLOYMENT_FRONTEND.md) - Frontend deployment guide

---

**Status:** Complete - meets Phase 1 and Phase 2 requirements
