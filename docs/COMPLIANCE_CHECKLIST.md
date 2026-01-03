# Project Requirements Checklist

This checklist verifies that the project meets all Phase 1 and Phase 2 requirements for CSCI 426.

Project: LM Pizzeria  
Repository: <https://github.com/Lamitamassry/lm-pizzeria>  
Date: January 2026

---

## Phase 1 - Frontend Requirements

### Pages (Minimum 5 Required)

- [x] Home page (Home.jsx)
- [x] About page (About.jsx)
- [x] Menu page (Menu.jsx)
- [x] Contact page (Contact.jsx)
- [x] Additional pages: Cart, Login, Signup, Orders, Order Confirmation (6 extra)

**Total: 11 pages - Requirement met**

### Dynamic Routing

- [x] At least one dynamic route implemented (/menu/:id)
- [x] Uses URL parameters to display different content
- [x] MenuItemDetail component shows different items based on ID parameter

**Dynamic routing - Requirement met**

### Responsive Design

- [x] Works on mobile devices
- [x] Works on tablets
- [x] Works on desktop
- [x] Uses Tailwind CSS responsive classes

**Responsive design - Requirement met**

### Technology Stack

- [x] React 18.3.1
- [x] React Router DOM 6.26.0
- [x] Vite 5.4.2 for build tool
- [x] Tailwind CSS 3.4.11

**Tech stack - Requirement met**

### Deployment

- [x] Deployed to Netlify
- [x] Live URL: https://lmpizzeria.netlify.app/

**Deployment - Requirement met**

---

## Phase 2 - Backend Requirements

### Backend Technology

- [x] Node.js runtime
- [x] Express.js 4.18.2
- [x] MySQL database
- [x] RESTful API design

**Backend stack - Requirement met**

### Database (Minimum 2 Tables Required)

- [x] users table (id, username, email, password, created_at)
- [x] orders table (id, user_id, phone, order_type, address, notes, total, created_at)
- [x] order_items table (id, order_id, menu_item_name, price, quantity)
- [x] Foreign key relationships: orders.user_id → users.id, order_items.order_id → orders.id
- [x] Schema file provided (backend/db/schema.sql)

**Total: 3 tables - Requirement met**

### Authentication

- [x] User signup (POST /api/auth/signup)
- [x] User login (POST /api/auth/login)
- [x] Password hashing with bcrypt
- [x] JWT token authentication
- [x] Protected routes with auth middleware

**Authentication - Requirement met**

### CRUD Operations

- [x] Create order (POST /api/orders)
- [x] Read all orders (GET /api/orders)
- [x] Read single order (GET /api/orders/:id)
- [x] Update order (PUT /api/orders/:id)
- [x] Delete order (DELETE /api/orders/:id)

**CRUD operations - Requirement met**

### API Endpoints

| Endpoint | Method | Purpose | Auth Required |
|----------|--------|---------|--------------|
| / | GET | API info | No |
| /api/health | GET | Health check | No |
| /api/auth/signup | POST | Register user | No |
| /api/auth/login | POST | Login user | No |
| /api/auth/me | GET | Get user profile | Yes |
| /api/orders | GET | List orders | Yes |
| /api/orders | POST | Create order | Yes |
| /api/orders/:id | GET | Get order | Yes |
| /api/orders/:id | PUT | Update order | Yes |
| /api/orders/:id | DELETE | Delete order | Yes |

**Total: 10 endpoints - Requirement met**

### Input Validation

- [x] Server-side validation of required fields
- [x] Email format validation
- [x] Password length validation (minimum 6 characters)
- [x] Parameterized queries to prevent SQL injection
- [x] Input sanitization

**Input validation - Requirement met**

### Error Handling

- [x] Custom error middleware (middleware/errorHandler.js)
- [x] Proper HTTP status codes (200, 201, 400, 401, 404, 500)
- [x] Error messages sent to client
- [x] 404 handler for unknown routes
- [x] Global error handler

**Error handling - Requirement met**

### Security

- [x] CORS configured with origin whitelist
- [x] Environment variables for secrets (.env file)
- [x] .gitignore excludes .env files
- [x] Password hashing with bcrypt
- [x] JWT secret not hardcoded

**Security - Requirement met**

### Code Organization

- [x] Separate folders for routes, controllers, middleware
- [x] Clear folder structure
- [x] Consistent naming conventions
- [x] Comments in code
- [x] No hardcoded secrets

**Code organization - Requirement met**

---

## Full-Stack Integration

### Frontend-Backend Communication

- [x] Frontend makes API calls to backend
- [x] CORS allows frontend origin
- [x] JWT token stored and sent with requests
- [x] Error handling in frontend
- [x] Loading states in UI

**Integration - Requirement met**

### Complete Workflows

- [x] User can sign up
- [x] User can log in
- [x] User can browse menu
- [x] User can add items to cart
- [x] User can place order
- [x] User can view order history

**Workflows - Requirement met**

---

## Documentation

- [x] README.md with setup instructions
- [x] Installation guide
- [x] API endpoint documentation
- [x] Database schema file
- [x] Environment variables listed
- [x] Screenshots organized
- [x] Deployment instructions

**Documentation - Requirement met**

---

## Repository

- [x] .gitignore configured
- [x] node_modules not committed
- [x] .env files not committed
- [x] README includes live URL

**Repository - Requirement met**

---

## Summary

**Phase 1:** All requirements met (11 pages, dynamic routing, responsive design, deployed)

**Phase 2:** All requirements met (MySQL with 3 tables, JWT auth, full CRUD, 10 API endpoints, security, error handling)

**Status:** Project is complete and meets all course requirements.
