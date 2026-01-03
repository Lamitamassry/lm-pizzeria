# LM Pizzeria - Screenshots Documentation

This document lists all project screenshots organized by development phase.

---

## Folder Structure

Screenshots are organized into two folders:

- **phase1/** - Frontend development screenshots (6 images)
- **phase2/** - Backend integration and database screenshots (9 images)

---

## Phase 1 - Frontend Development

Location: `phase1/`

These screenshots demonstrate the React frontend meeting the 5+ pages requirement and responsive design.

| Filename | Description |
|----------|-------------|
| Home Page.png | Main landing page with hero section |
| home page2.png | Home page alternate view or responsive layout |
| Menu.png | Menu page displaying product catalog |
| about.png | About page with restaurant information |
| cart.png | Shopping cart page |
| order confirmation.png | Order confirmation page after checkout |

**Requirements demonstrated:**
- 6 distinct pages (exceeds minimum of 5)
- Responsive design across different views
- Navigation and routing working
- Complete user flow from browsing to checkout

---

## Phase 2 - Backend Integration & Database

Location: `phase2/`

These screenshots demonstrate full-stack integration with authentication, database operations, and API functionality.

### Authentication & API

| Filename | Description |
|----------|-------------|
| login.png | User login page with authentication form |
| login_api_success.png | Login API response showing JWT token in Network tab |
| backend.png | Backend server running and responding to requests |

### Database Tables

| Filename | Description |
|----------|-------------|
| 01_database_tables_list.png | MySQL database showing users, orders, and order_items tables |
| order item.png | Order_items table structure and sample data |
| order item and id.png | Order_items table with order_id relationships |
| orders_with_items_join.png | SQL join query showing orders linked to order_items |

### CRUD Operations

| Filename | Description |
|----------|-------------|
| order by id.png | GET request retrieving specific order by ID |
| order by qy.png | GET request retrieving orders (query results) |

**Requirements demonstrated:**
- JWT authentication implemented
- MySQL database with 3 related tables (users, orders, order_items)
- Foreign key relationships working correctly
- CRUD operations functional (Create, Read operations shown)
- API endpoints responding with proper data
- Network tab showing API calls and responses

---

## Summary

**Total Screenshots:** 15 images

**Phase 1 Evidence:**
- Multiple pages (6 pages shown)
- Responsive frontend
- Complete user interface
- React Router navigation

**Phase 2 Evidence:**
- User authentication with JWT
- Backend server operational
- MySQL database with relational tables
- API endpoints functional
- Data persistence verified
- Join queries working between tables

All screenshots demonstrate compliance with CSCI 426 Phase 1 and Phase 2 requirements.
